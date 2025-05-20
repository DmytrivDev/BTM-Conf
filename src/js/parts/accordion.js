import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqList = document.querySelectorAll('.faq__list');

faqList?.forEach(list => {
  new Accordion(list, {
    duration: 400,
    showMultiple: true,
  });

  const panels = list.querySelectorAll('.ac-panel');
  panels.forEach(panel => {
    panel.addEventListener('click', event => {
      event.stopPropagation();
    });
  });
});
