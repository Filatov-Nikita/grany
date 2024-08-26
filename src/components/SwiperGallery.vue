<template>
  <swiper
    class="gallery-swiper"
    loop
    lazy
    :initialSlide="initialSlide"
    centeredSlides
    watchSlidesProgress
    :followFinger="false"
    :longSwipes="false"
    :shortSwipes="false"
    :breakpoints="{
      1024: {
        slidesPerView: 1.5
      },
      1920: {
        slidesPerView: 1.5
      }
    }"
    :navigation="{
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    }"
    :modules="modules"
    :slidesPerView="1"
    :spaceBetween="21"
    @swiper="setSwiper"
  >
    <swiper-slide v-for="src in sources" :key="src">
      <img
        :data-src="src"
        class="swiper-lazy tw-w-full tw-h-full tw-object-cover"
      />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>

    <!-- Navigation arrows -->
    <button class="swiper-prev" @click="swiper.slidePrev()">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7149 16L11.9999 24L19.7149 32L21.0115 30.6553L15.5102 24.9507L36 24.9507L36 23.0491L15.5104 23.0491L21.0115 17.3447L19.7149 16Z" fill="white"/>
      </svg>
    </button>
    <button class="swiper-next" @click="swiper.slideNext()">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7149 16L11.9999 24L19.7149 32L21.0115 30.6553L15.5102 24.9507L36 24.9507L36 23.0491L15.5104 23.0491L21.0115 17.3447L19.7149 16Z" fill="white"/>
      </svg>
    </button>
  </swiper>
</template>

<script>
import "swiper/css";
import "swiper/css/lazy";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Lazy, Navigation } from "swiper";
import { ref } from '@vue/reactivity';

export default {
  props: {
    sources: {
      required: true,
      type: Array
    },
    initialSlide: {
      default: 0,
      type: Number
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = ref(null);
    return {
      modules: [Lazy, Navigation],
      swiper,
      setSwiper: (instance) => {
        swiper.value = instance;
      }
    };
  },
}
</script>
<style scoped>
.gallery-swiper {
  width: 100%;
  height: 100%;
}

.swiper-next, .swiper-prev {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  background: #081924;
  border-radius: 50%;
}

.swiper-prev {
  left: 16px;
}

.swiper-next {
  right: 16px;
  transform: translateY(-50%) rotate(180deg);
}

@screen lg {
  .swiper-next, .swiper-prev {
    width: 48px;
    height: 48px;
  }

  .swiper-prev {
    left: 40px;
  }

  .swiper-next {
    right: 40px;
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>
