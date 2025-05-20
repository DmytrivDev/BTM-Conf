export function addDataCeo(modal, event) {
  const ceoItem = event.currentTarget.closest('.ceo__item');

  if (!ceoItem) return;

  const ceoData = {
    title: ceoItem.querySelector('.tl4')?.textContent || '',
    descript: ceoItem.querySelector('.ceo__descript')?.innerHTML || '',
  };

  modal.querySelector('.ceoinf__tl').textContent = ceoData.title;
  modal.querySelector('.ceoinf__txt').innerHTML = ceoData.descript;
}
