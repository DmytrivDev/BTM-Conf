import scrollLock from 'scroll-lock';

const filterOpen = document.querySelector('.filter__open');
const filterClose = document.querySelector('.filter__close');
const filterWrapp = document.querySelector('.filter__wrapp');

let isScrollLocked = false;

function toggleScrollLock() {
  if (filterWrapp) {
    if (isScrollLocked) {
      scrollLock.enablePageScroll(filterWrapp);
    } else {
      scrollLock.disablePageScroll(filterWrapp, { reserveScrollBarGap: true });
    }
    isScrollLocked = !isScrollLocked;
  }
}

function openFilter() {
  if (filterOpen && filterWrapp) {
    filterWrapp.classList.add('isOpened');
    toggleScrollLock();
  }
}

export function closeFilter() {
  if (filterClose && filterWrapp) {
    filterWrapp.classList.remove('isOpened');
    if (filterWrapp) scrollLock.enablePageScroll(filterWrapp);
    isScrollLocked = false;
  }
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeFilter();
  }
}

function initMenu() {
  window.addEventListener('resize', handleResize);

  filterOpen?.addEventListener('click', openFilter);
  filterClose?.addEventListener('click', closeFilter);
}

document.addEventListener('DOMContentLoaded', initMenu);
