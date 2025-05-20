const policyNavBtn = document.querySelector('.policy__nav');
const policyWidget = document.querySelector('.policy__widget');
const tabs = document.querySelectorAll('.tabs a');

function toggleNavPolicy() {
  if (policyNavBtn && policyWidget) {
    policyNavBtn.classList.toggle('isOpened');
    policyWidget.classList.toggle('isOpened');
  }
}

function closeNavPolicy() {
  if (policyNavBtn && policyWidget) {
    policyNavBtn.classList.remove('isOpened');
    policyWidget.classList.remove('isOpened');
  }
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeNavPolicy();
  }
}

function initMenu() {
  if (policyNavBtn && policyWidget) {
    window.addEventListener('resize', handleResize);
    policyNavBtn.addEventListener('click', toggleNavPolicy);
  }

  if (tabs) {
    tabs.forEach(tab => {
      tab.addEventListener('click', closeNavPolicy);
    });
  }
}

document.addEventListener('DOMContentLoaded', initMenu);
