<template>
  <div class="deviceclassify">
    <swiper
      :pagination="pagination"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in myArr" :data="item">
        <visitarea :data="item"></visitarea>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRaw } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation,Autoplay} from 'swiper'
import visitarea from '@/components/basic/visitarea.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default defineComponent({
  props: ['visitsdata'],
  components: {
    Swiper,
    SwiperSlide,
    visitarea,
  },
  setup(props) {
    const arr = <any>toRaw(props.visitsdata)
    let map = <any>{}
    let myArr = []
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      // console.log(!map[arr[i].address])
      if (!map[arr[i].device]) {
        myArr.push({
          name: arr[i].device,
          value: 1,
          data: [arr[i]],
        })
        // console.log(arr[i])
        map[arr[i].device] = arr[i]
      } else {
        for (let j = 0; j < myArr.length; j++) {
          if (arr[i].device === myArr[j].name) {
            myArr[j].data.push(arr[i])
            myArr[j].value++
            break
          }
        }
      }
    }

    // console.log(myArr)

    return {
      pagination: {
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
      },
      modules: [Pagination, Navigation,Autoplay],
      myArr,
    }
  },
})
</script>

<style lang="less" scoped>
.deviceclassify {
  width: 550px;
  border: #1a3f72 solid 1px;
  height: 400px;
  background: rgba(41, 85, 252, 0.2);
  position: absolute;
  bottom: 50%;
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

  :deep(.swiper-pagination-bullet) {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    font-weight: bold;
    opacity: 1;
    background: #0066d3;
  }

  :deep(.swiper-pagination-bullet-active) {
    color: #fff;
    background: #027cff;
  }
}
</style>
