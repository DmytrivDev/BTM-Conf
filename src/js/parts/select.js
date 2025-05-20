import NiceSelect from 'nice-select2';

const eventsSelectCh = document.querySelector('.events__select');

if (eventsSelectCh) {
  document.addEventListener('facetwp-loaded', function () {
    const eventsSelect = document.querySelectorAll('.events__select select');
    const allTxt = eventsSelectCh.dataset.all;

    eventsSelect.forEach(select => {
      if (!select.nextElementSibling || !select.nextElementSibling.classList.contains('nice-select')) {
        const cont = select.closest('.facetwp-facet');
        const name = cont.dataset.name;
        const title = eventsSelectCh.dataset[name];
        cont.insertAdjacentHTML('afterbegin', '<p>'+title+'</p>')
        new NiceSelect(select, {
          searchable: false,
          placeholder: allTxt
        });
      }
    });
  });
}
