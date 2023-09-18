<script setup>
const swiper = ref(null)
function getRef(swiperInstance) {
  swiper.value = swiperInstance
}
function next() {
  swiper.value.slideNext()
}
function prev() {
  swiper.value.slidePrev()
}
const images = [
  'interlockCardOne.jpeg',
  'interlockCardTwo.jpeg',
  'interlockCardThree.jpeg',

  'interlockCardOne.jpeg',
  'interlockCardTwo.jpeg',
  'interlockCardThree.jpeg',

  'interlockCardOne.jpeg',
  'interlockCardTwo.jpeg',
  'interlockCardThree.jpeg',
]
</script>

<template>
  <Swiper
    ref="swiper"
    :breakpoints="{
      300: {
        centeredSlides: true,
        slidesPerView: 1.4,
      },
      600: {
        centeredSlides: true,
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 1,
      },
      1248: {
        slidesPerView: 1.4,
      },

      1300: {
        slidesPerView: 1.6,
      },
    }"
    :loop="true"
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :autoplay="{ delay: 3000, waitForTransition: true, pauseOnMouseEnter: true }"
    @swiper="getRef"
  >
    <SwiperSlide
      v-for="(image, index) in images"
      :key="index"
    >
      <div class="max-w-[300px]">
        <CoreCard :img="image" />
      </div>
    </SwiperSlide>
  </Swiper>
  <div class="flex gap-x-3 justify-center md:justify-start">
    <Button class="bg-black h-9 w-9 rounded-full" @click="prev()">
      <Icon name="ep:right" color="white" size="20" class="rotate-180" />
    </Button>
    <Button class="bg-green h-9 w-9 rounded-full " @click="next()">
      <Icon name="ep:right" color="white" size="20" />
    </Button>
  </div>
</template>
