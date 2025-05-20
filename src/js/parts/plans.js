function setupTabsSections() {
  const tabsSections = document.querySelectorAll('.plans, .tickets');

  tabsSections.forEach(section => {
    const radios = section.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const selectedId = radio.value;
        const tabs = section.querySelectorAll('.plans__cards, .tickets__cards');

        tabs.forEach(tab => {
          if (tab.id === selectedId) {
            tab.classList.remove('is-hidden');
          } else {
            tab.classList.add('is-hidden');
          }
        });
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', setupTabsSections);
