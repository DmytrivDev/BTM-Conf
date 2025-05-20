import scrollLock from 'scroll-lock';
import { pauseVideo } from './videoplay';
import { closeFilter } from './filtermodal';

const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.mobmenu');
const mobMenuBody = document.querySelector('.mobmenu__body');
const mobNavLinks = document.querySelectorAll(
  '.mobmenu .navmenu__list a, .btn-anchor'
);

let isScrollLocked = false;

function toggleScrollLock() {
  if (mobMenuBody) {
    if (isScrollLocked) {
      scrollLock.enablePageScroll(mobMenuBody);
    } else {
      scrollLock.disablePageScroll(mobMenuBody, { reserveScrollBarGap: true });
    }
    isScrollLocked = !isScrollLocked;
  }
}

function toggleMenu() {
  if (burger && mobMenu) {
    burger.classList.toggle('isOpened');
    mobMenu.classList.toggle('isOpened');
    toggleScrollLock();
    pauseVideo();
    closeFilter();
  }
}

export function closeMenu() {
  if (burger && mobMenu) {
    burger.classList.remove('isOpened');
    mobMenu.classList.remove('isOpened');
    if (mobMenuBody) scrollLock.enablePageScroll(mobMenuBody);
    isScrollLocked = false;
  }
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

function initMenu() {
  if (burger && mobMenu) {
    window.addEventListener('resize', handleResize);
    burger.addEventListener('click', toggleMenu);
  }

  if (mobNavLinks) {
    mobNavLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

document.addEventListener('DOMContentLoaded', initMenu);
