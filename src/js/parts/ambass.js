export function addDataAmbass(modal, event) {
  const evidnCard = event.currentTarget.closest('.evidn-card');

  if (!evidnCard) return;

  const evidnData = {
    ava: evidnCard.querySelector('.evidn-ava img')?.src || '',
    name: evidnCard.querySelector('.evidn-name')?.textContent || '',
    activity: evidnCard.querySelector('.evidn-activity p')?.textContent || '',
    desc: evidnCard.querySelector('.evidn-desc p')?.textContent || '',
    soc: evidnCard.querySelector('.evidn-soc')?.innerHTML || '',
    connect: evidnCard.querySelector('.evidn-link')?.href || '#',
  };

  modal.querySelector('.evidence__ava img').src = evidnData.ava;
  modal.querySelector('.evidence__tl').textContent = evidnData.name;
  modal.querySelector('.evidence__activity p').textContent = evidnData.activity;
  modal.querySelector('.txt-def p').textContent = evidnData.desc;
  modal.querySelector('.evidence__soc').innerHTML = evidnData.soc;
  modal
    .querySelector('.evidence__connect')
    ?.setAttribute('href', evidnData.connect);
}
