import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let swiper = null;

function initSwiper() {
  if (window.innerWidth < 1440 && !swiper) {
    swiper = new Swiper('.my-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.1,
      spaceBetween: 16,

      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  if (window.innerWidth >= 1440 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);