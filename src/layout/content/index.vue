<style scoped lang="less">
* {
  cursor: url(@/assets/images/pointer.png) 8 3, auto !important;
}
.banner {
  height: calc(100vh);
}
.banner .swiper-slide:nth-child(1) {
  background-color: #020712;
  margin: 0;
  font-family: 'Microsoft YaHei';
  font-weight: lighter;
  background-image: url(@/assets/images/Homebodybg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -120px;
}
.banner .swiper-slide:nth-child(2) {
  background-image: url(@/assets/images/banner3.jpg);
  background-repeat: no-repeat;
  background-position: center;
}
@import url('@/assets/css/flasheffectoutbox.css');
</style>
<template>
  <swiper
    :options="state.swiperOptionSwp1"
    :modules="[EffectFade, Autoplay]"
    :speed="1000"
    :autoplay="{ delay: 5000, disableOnInteraction: true }"
    effect="fade"
    class="banner"
  >
    <swiper-slide>
      <visitsNum></visitsNum>
      <BrowseCount></BrowseCount>
      <AccessTime
        v-if="data.visitsdata.length > 0"
        :visitsdata="data.visitsdata"
      ></AccessTime>
      <DeviceClassify></DeviceClassify>
      <MapDistribute
        v-if="data.visitsdata.length > 0"
        :visitsdata="data.visitsdata"
      ></MapDistribute>
      <weather></weather>
      <!-- {{  data.visitsdata }} -->
      <div class="flasheffectoutbox">
        <div style="width: 1000px; height: 500px; position: relative;">
          <div class="line2 line"></div>
          <div class="line3 line"></div>
          <div class="line4 line"></div>
          <div class="line5 line"></div>
          <div class="line6 line"></div>

          <!--主动效-->
          <div class="maineffectoutbox circleeffectclass">
            <a href="/projects" target="_blank">
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
            <span class="stagetitle stagearoundtitle">猫九小说(PC)</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="left: 190px; bottom: 89px;"
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
            <span class="stagetitle stagearoundtitle">猫九小说(H5)</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="right: 405px; bottom: 53px;"
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
            <span class="stagetitle stagearoundtitle">微信小程序</span>
          </div>

          <div
            class="circleeffectclass aroundfunctioneffect"
            style="right: 243px; bottom: 165px;"
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
    <!-- <swiper-slide v-for="item in bannerArr" :key="item" :style="`background:url('${item}') no-repeat center center;`">
      
    </swiper-slide> -->
    <!-- <swiper-slide style="background-image:url(@'/assets/images/banner1.jpg') no-repeat center center;">
      <div>

      </div>
    </swiper-slide> -->
    <swiper-slide>
      <applets></applets>
    </swiper-slide>
    <!--<swiper-slide><img src="@/assets/images/banner3.jpg" /></swiper-slide>
    <swiper-slide><img src="@/assets/images/banner4.jpg" /></swiper-slide>
    <swiper-slide><img src="@/assets/images/banner5.jpg" /></swiper-slide> -->
  </swiper>
</template>
<script lang="ts">
import BrowseCount from '@/components/basic/browsecount.vue'
import visitsNum from '@/components/basic/visitsNum.vue'
import AccessTime from '@/components/basic/accesstime.vue'
import DeviceClassify from '@/components/basic/deviceclassify.vue'
import MapDistribute from '@/components/basic/mapdistribute.vue'
import applets from '@/components/basic/applets.vue'
import weather from '@/components/basic/weather.vue'
import { EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { getvisits } from '@/api/users/visits'
import { reactive } from 'vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    visitsNum,
    applets,
    BrowseCount,
    AccessTime,
    DeviceClassify,
    MapDistribute,
    weather,
  },
  setup() {
    const bannerArr = ['src/assets/images/banner3.jpg']
    const state = {
      swiperOptionSwp1: {
        navigation: {
          nextEl: '.swiper-button-next.swp1',
          prevEl: '.swiper-button-prev.swp1',
        },
        loop: true,
      },
    }

    const data = reactive({
      visitsdata: [],
    })
    getvisits().then((res) => {
      if (res.status == 0) {
        data.visitsdata = res.data
      }
    })

    return {
      bannerArr,
      EffectFade,
      Autoplay,
      data,
      state,
    }
  },
}
</script>
