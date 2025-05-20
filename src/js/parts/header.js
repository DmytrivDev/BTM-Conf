const header = document.querySelector('.header');

function checkScrollTop() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop < 10) {
    header.classList.remove('isScroll');
  } else {
    header.classList.add('isScroll');
  }
}

window.addEventListener('scroll', checkScrollTop);
document.addEventListener('DOMContentLoaded', checkScrollTop);
