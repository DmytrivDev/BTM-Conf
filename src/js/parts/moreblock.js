function addMoreBlocks(container) {
  const moreBlock = container?.querySelector('.more-block');
  const btnMore = container?.querySelector('.addMore');

  btnMore?.addEventListener('click', () => {
    if (moreBlock) {
      btnMore.style.display = 'none';
      moreBlock.classList.add('isOpened');
      setTimeout(() => {
        moreBlock.classList.add('isAnim');
      }, 100);
    }
  });
}

const commit = document.querySelector('.commit');
const speaker = document.querySelector('.speaker');

addMoreBlocks(commit);
addMoreBlocks(speaker);
