let activeVideo = null;

const playVideo = async videoElement => {
  if (activeVideo && activeVideo !== videoElement) {
    activeVideo.pause(); // Ставим на паузу предыдущее видео
  }

  try {
    await videoElement.play(); // Ждем, пока видео начнет воспроизводиться
    videoElement.controls = true; // Добавляем атрибут controls для текущего видео
    activeVideo = videoElement; // Обновляем активное видео
  } catch (err) {
    console.log(err);
  }
};

const videos = document.querySelectorAll('.reviews-video');

videos?.forEach(videoItem => {
  const arrows = videoItem.querySelector('.arrows');
  const videoBox = videoItem.querySelector('.reviews__video');
  const btnPlay = videoItem.querySelector('.video-play');
  const video = videoItem.querySelector('video');

  function checkActiveVideo() {
    if (video !== activeVideo) {
      if (btnPlay) {
        arrows.style.display = 'none';
        btnPlay.style.display = 'none';
        videoItem.classList.add('bg-hidd');
      }

      playVideo(video);
    }
  }

  videoBox.addEventListener('click', checkActiveVideo);
  btnPlay.addEventListener('click', checkActiveVideo);
});

export function pauseVideo() {
  const videos = document.querySelectorAll('.reviews-video video');
  videos.forEach(video => {
    video.pause();
  });
}
