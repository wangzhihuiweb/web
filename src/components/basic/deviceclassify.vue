<template>
  <div class="box">
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
  </div>
</template>
<script lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { Pagination } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
          renderBullet: function (index:any, className:any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        modules: [Pagination],
      };
    },
  };
</script>

<style lang="less" scoped>
.box {
  width: 550px;
  border: #1a3f72 solid 1px;
  height: 400px;
  background: rgba(41, 85, 252, 0.2);
  position: absolute;
  top: 50px;
  right: 10px;
  display: flex;
  z-index: 22;
  flex-direction: column;
  box-sizing: border-box;

  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }
  
  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
    

}
</style>
