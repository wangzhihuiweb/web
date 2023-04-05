<template>
  <swiper
    class="swiper"
    @swiper="onSwiper"
    observer
    observeParents
    :autoplay="{ delay: 66666,disableOnInteraction: false,}"
    :modules="[Autoplay,EffectFade]"
    effect="fade"
  >
    >
    <swiper-slide>
      <visitsNum></visitsNum>
      <BrowseCount></BrowseCount>
      <AccessTime
        v-if="data.visitsdata.length > 0"
        :visitsdata="data.visitsdata"
      ></AccessTime>
      <DeviceClassify
        v-if="data.visitsdata.length > 0"
        :visitsdata="data.visitsdata"
      ></DeviceClassify>
      <MapDistribute
        v-if="data.visitsdata.length > 0"
        :visitsdata="data.visitsdata"
      ></MapDistribute>
      <weather></weather>
      <div class="flasheffectoutbox">
        <div style="width: 1000px; height: 500px; position: relative;">
          <div class="line2 line"></div>
          <div class="line3 line"></div>
          <div class="line4 line"></div>
          <div class="line5 line"></div>
          <div class="line6 line"></div>

          <!--主动效-->
          <div class="maineffectoutbox circleeffectclass">
            <a href="/home/projectchart" target="_blank">
              <img
                class="effectposition maindataeffect"
                src="@/assets/img/maindataeffect.png"
              />
              <div
                class="effectposition acrossremindeffectout"
                style="width: 76px; height: 76px; margin: 9px;"
              >
                <div
                  class="acrossremindeffectin"
                  style="width: 68px; height: 68px; margin: 4px;"
                ></div>
              </div>
              <img
                class="effectposition maindataspecialeffect"
                src="@/assets/img/maindataspecialeffect.png"
              />
              <img
                class="effectposition acrossremindeffecindex"
                src="@/assets/img/maindataicon.png"
              />
              <span class="stagetitle">项目陈列</span>
            </a>
          </div>
          <!--卫星动效-->
          <div
            class="circleeffectclass aroundfunctioneffect"
            style="left: 254px; top: 135px;"
            @click="customjump('/home/viewingitems/3')"
          >
            <img
              class="effectposition arounddataeffect02"
              src="@/assets/img/aroundeffect.png"
            />
            <div
              class="effectposition acrossremindeffectout acrossremindeffectoutard"
            >
              <div class="acrossremindeffectin acrossremindeffectinard"></div>
            </div>
            <img
              class="effectposition acrossremindeffecindex"
              src="@/assets/img/xingzhengshenpi.png"
            />
            <span class="stagetitle stagearoundtitle" >猫九小说(PC)</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="left: 190px; bottom: 89px;"
            @click="customjump('/home/viewingitems/5')"
          >
            <img
              class="effectposition arounddataeffect01"
              src="@/assets/img/aroundeffect.png"
            />
            <div
              class="effectposition acrossremindeffectout acrossremindeffectoutard"
            >
              <div class="acrossremindeffectin acrossremindeffectinard"></div>
            </div>
            <img
              class="effectposition acrossremindeffecindex"
              src="@/assets/img/baixingpaiAPP.png"
            />
            <span class="stagetitle stagearoundtitle" >猫九小说(H5)</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="right: 405px; bottom: 53px;"
            @click="customjump('/home/viewingitems/14')"
          >
            <img
              class="effectposition arounddataeffect02"
              src="@/assets/img/aroundeffect.png"
            />
            <div
              class="effectposition acrossremindeffectout acrossremindeffectoutard"
            >
              <div class="acrossremindeffectin acrossremindeffectinard"></div>
            </div>
            <img
              class="effectposition acrossremindeffecindex"
              src="@/assets/img/zhatuyunshu.png"
            />
            <span class="stagetitle stagearoundtitle" >微信小程序</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="right: 243px; bottom: 165px;"
            @click="customjump('/home/viewingitems/15')"
          >
            <img
              class="effectposition arounddataeffect01"
              src="@/assets/img/aroundeffect.png"
            />
            <div
              class="effectposition acrossremindeffectout acrossremindeffectoutard"
            >
              <div class="acrossremindeffectin acrossremindeffectinard"></div>
            </div>
            <img
              class="effectposition acrossremindeffecindex"
              src="@/assets/img/12319rexian.png"
            />
            <span class="stagetitle stagearoundtitle">后台系统</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="right: 294px; top: 79px;"
            @click="customjump('/home/viewingitems/1')"
          >
            <img
              class="effectposition arounddataeffect03"
              src="@/assets/img/aroundeffect.png"
            />
            <div
              class="effectposition acrossremindeffectout acrossremindeffectoutard"
            >
              <div class="acrossremindeffectin acrossremindeffectinard"></div>
            </div>
            <img
              class="effectposition acrossremindeffecindex"
              src="@/assets/img/xingzhengshenpi.png"
            />
            <span class="stagetitle stagearoundtitle">帮主课堂（PC）</span>
          </div>

          <div
            class="circleeffectclass decarround01"
            style="top: 218px; left: 92px;"
          >
            <div class="acrossremindeffectin decarroundin01" style=""></div>
          </div>
          <div
            class="circleeffectclass decarround01"
            style="top: 197px; right: 163px;"
          >
            <div class="acrossremindeffectin decarroundin01" style=""></div>
          </div>
          <div
            class="circleeffectclass decarround02"
            style="top: 99px; right: 93px;"
          >
            <div class="acrossremindeffectin decarroundin02" style=""></div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <applets></applets>
    </swiper-slide>
  </swiper>
  <!-- <button @click="swiper.slideNext()">Slide to the next slide</button> -->
</template>
<script lang="ts" setup name="visitchart">
import BrowseCount from '@/components/basic/browsecount.vue'
import visitsNum from '@/components/basic/visitsNum.vue'
import AccessTime from '@/components/basic/accesstime.vue'
import DeviceClassify from '@/components/basic/deviceclassify.vue'
import MapDistribute from '@/components/basic/mapdistribute.vue'
import applets from '@/components/basic/applets.vue'
import weather from '@/components/basic/weather.vue'
import {useRouter } from 'vue-router'
import { getvisits } from '@/api/users/visits'
import { reactive,onActivated} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay,EffectFade} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
const router = useRouter()
let useSwiper: any = null; // swiper实例
// 初始化swiper
const onSwiper = (swiper: any) => {
	useSwiper = swiper;
};
// 滑动事件记录分页 @slideChange="onSlideChange"
// const onSlideChange = () => {
// 	console.log("page", useSwiper.activeIndex); 
// };
// onMounted(()=>{
 
// })

onActivated(()=>{
  // console.log(1231)
  // useSwiper.slidePrev();//上一个
  // useSwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
  // console.log(useSwiper)
  useSwiper.autoplay.start();
  useSwiper.slideTo(0, 66666, false);
})

const data = reactive({
  visitsdata: [],
})
getvisits().then((res) => {
  if (res.status == 0) {
    data.visitsdata = res.data
  }
})

const customjump=(url:any)=>{
  router.push(url)
}

</script>
<style scoped lang="less">
.swiper {
  height: calc(100vh);
  background-color: #020712;
  position: relative;
  :deep(.swiper-slide:nth-child(1)) {
    background-color: #020712;
    margin: 0;
    font-family: 'Microsoft YaHei';
    font-weight: lighter;
    background-image: url(@/assets/images/Homebodybg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: -120px;
  }
  .swiper-slide:nth-child(2) {
    background-image: url(@/assets/images/banner3.jpg);
    background-repeat: no-repeat;
    background-position: center;
  }
  .swiper-slide.swiper-slide-active{
    z-index: 123;
  }
}
@import url('@/assets/css/flasheffectoutbox.css');
</style>
