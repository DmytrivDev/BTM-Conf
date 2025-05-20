const policyArticle = document.querySelector('.policy');
if (policyArticle) {
  tabsSidebar(policyArticle);
}

function tabsSidebar(page) {
  let titles = page.querySelectorAll('.policy__content h2');

  if (titles.length < 1) {
    titles = page.querySelectorAll('.policy__content h3');
  }

  titles.forEach((title, index) => {
    title.setAttribute('id', `title-${index + 1}`);
  });

  const quickBodyList = document.createElement('ul');
  quickBodyList.classList.add(`tabs`, 'ankor');

  let cl = 'active';
  titles.forEach((title, index) => {
    cl = index >= 0 ? 'none' : 'active';
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.className = `${cl} tab`;
    link.setAttribute('href', `#title-${index + 1}`);

    link.textContent = title.textContent.replace(/^\d+\.\s*/, '');

    listItem.appendChild(link);
    quickBodyList.appendChild(listItem);
  });

  const quickCont = page.querySelector('.policy__sidebar');
  if (quickCont) {
    quickCont.innerHTML = '';
    quickCont.appendChild(quickBodyList);
  }

  setTimeout(function () {
    const links = quickBodyList.querySelectorAll('a');
    const headers = Array.from(links).map((_, i) =>
      document.getElementById(`title-${i + 1}`)
    );
    const policyRow = page.querySelector('.policy__row');
    const policyBox = page.querySelector('.policy__box');

    const setActiveLink = function () {
      const scrollTop = window.scrollY;
      const computedStyle = window.getComputedStyle(policyBox);
      const topValue = parseFloat(computedStyle.top) || 0;
      const distanceToHeader =
        policyRow.getBoundingClientRect().top + scrollTop;
      // const headerHeight = document.querySelector('.header').offsetHeight;

      let activeLink = links[0];

      headers.forEach((header, i) => {
        if (scrollTop - distanceToHeader >= header.offsetTop - topValue - 114) {
          activeLink = links[i];
        }
      });

      links.forEach(link => link.classList.remove('active'));
      activeLink.classList.add('active');

      // Прокручиваем родителя, чтобы активная ссылка была видна
      smoothVerticalScroll(activeLink, 20);
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
  }, 500);

  document.querySelectorAll('a.ankor, .ankor a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const policyRow = page.querySelector('.policy__row');
      const policyBox = page.querySelector('.policy__box');

      const scrollTop = window.scrollY;
      const computedStyle = window.getComputedStyle(policyBox);
      const topValue = parseFloat(computedStyle.top) || 0;
      const distanceToHeader =
        policyRow.getBoundingClientRect().top + scrollTop;

      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;

      let offset = target.offsetTop;
      let ofF;

      const balance = window.innerWidth > 960 ? 1 : 113;

      if (this.classList.contains('tab')) {
        ofF = offset + distanceToHeader - topValue - balance;
      }

      let topic = this.dataset.topic || this.textContent;

      const targetInput = document.getElementById('target');
      if (targetInput) {
        targetInput.value = topic;
      }

      document.body.classList.remove('openedNav');

      window.scrollTo({
        top: ofF,
        behavior: 'smooth',
      });
    });
  });
}

// Кастомная функция для ускоренного вертикального скролла с центровкой
function smoothVerticalScroll(element, duration) {
  const container = document.querySelector('.policy__sidebar'); // Родительский контейнер
  const containerHeight = container.offsetHeight;
  const elementTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  // Расчет целевой позиции скролла
  const targetScrollPosition =
    elementTop - (containerHeight / 2 - elementHeight / 2);

  let start = container.scrollTop;
  let change = targetScrollPosition - start;
  let currentTime = 0;
  const increment = 1; // Ускорение (чем меньше, тем быстрее)

  function animateScroll() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    container.scrollTop = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}

// Функция для плавного эффекта
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
