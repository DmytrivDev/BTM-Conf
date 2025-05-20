import { initSlider } from './splidecust';
import { pauseVideo } from './videoplay';

const ambassSplide = document.querySelector('.ambass');
if (ambassSplide) {
  initSlider(ambassSplide, {
    perPage: 4,
    gap: '1.875rem',
    breakpoints: {
      960: {
        perPage: 3,
        gap: '0.875rem',
        pagination: true,
      },
      675: {
        perPage: 2,
      },
      475: {
        perPage: 1,
      },
    },
  });
}

let reviewsSliderInstance;
const reviewsSplide = document.querySelector('.reviews');

const initReviewsSlider = () => {
  if (reviewsSplide && !reviewsSliderInstance) {
    reviewsSliderInstance = initSlider(reviewsSplide, {
      perPage: 1,
      gap: '3.125rem',
      breakpoints: {
        960: {
          gap: '1.875rem',
        },
      },
    });

    reviewsSliderInstance?.on('move', () => {
      pauseVideo();
    });
  }
};

document.addEventListener('DOMContentLoaded', initReviewsSlider);
