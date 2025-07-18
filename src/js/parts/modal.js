import scrollLock from 'scroll-lock';

import { closeMenu } from './mobmenu';
import { addDataAmbass } from './ambass';

const activeModals = new Set();
export const initializedModals = new WeakSet();

export function showModal(modal) {
  modal.classList.add('isOpened');
  scrollLock.disablePageScroll(modal, { reserveScrollBarGap: true });
  activeModals.add(modal);
}

export function closeModal(modal) {
  modal.classList.remove('isOpened');

  setTimeout(() => {
    scrollLock.enablePageScroll(modal);
    activeModals.delete(modal);
  }, 150);
}

export function initCloseModal(modal) {
  if (initializedModals.has(modal)) return;

  const modalContainer = modal.querySelector('.containerModal');
  const btnsCloseModal = modal.querySelectorAll('.closeModal');

  btnsCloseModal.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });

  if (modalContainer) {
    modalContainer.addEventListener('click', event => {
      if (event.target === modalContainer) {
        closeModal(modal);
      }
    });
  }

  initializedModals.add(modal);
}

export function openModal(modalId, event, name, title, success, pay) {
  const modal = document.getElementById(modalId);
  if (modal) {
    activeModals.forEach(activeModal => {
      if (activeModal !== modal) {
        closeModal(activeModal);
      }
    });

    if (!initializedModals.has(modal)) {
      initCloseModal(modal);
    }

    if (!modal.classList.contains('isOpened')) {
      closeMenu();
      addDataAmbass(modal, event);
      showModal(modal);
      document.getElementById('formname').value = name;
      document.getElementById('formtitle').innerHTML = title;
      modal.querySelector('form').dataset.success = success;

      if (pay) {
        modal.querySelector('form').dataset.payment = pay;
        modal.querySelector('#payNow').classList.remove('hideBtn');
      } else {
        modal.querySelector('#payNow').classList.showe('hideBtn');
      }
    }
  }
}

function initOpenModal() {
  const btnsOpenModal = document.querySelectorAll('.openModal');
  btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', event => {
      const modalId = btn.dataset.id;
      const modaName = btn.dataset.name;
      const modaTtl = btn.dataset.title;
      const success = btn.dataset.success;
      const pay = btn.dataset.pay;
      if (modalId) {
        openModal(modalId, event, modaName, modaTtl, success, pay);
      }
    });
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const lastModal = Array.from(activeModals).pop();
    if (lastModal) closeModal(lastModal);
  }
});

document.addEventListener('DOMContentLoaded', initOpenModal);
