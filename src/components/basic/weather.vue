<template>
  <div class="weatherbox">
    <div class="time">
      <h3>
        {{ state.time.hm }}&nbsp;&nbsp;{{ state.time.s }}
        <!--秒用图片<div> <img :src="bindImg(state.time.s1)" alt=""><img :src="bindImg(state.time.s2)" alt="">  </div>-->
      </h3>
      <p>
        <span>{{ state.time.mdq }}</span>
        &nbsp;&nbsp;
        <span>{{ state.time.good }}</span>
      </p>
    </div>
    <div class="weather" v-if="Object.keys(state.weather).length">
      <div class="img">
        <img :src="bindImg(state.weather.casts[0].dayweather)" alt="" />

        <!-- <img src="@/assets/images/"+bindImg()+"" alt=""> -->
      
      </div>
      <div class="info">
        <!-- {{ state.weather.casts}} -->
        <h3 v-html="state.weather.casts[0].dayweather"></h3>
        <p>
          {{ state.weather.casts[0].nighttemp }}&nbsp;~&nbsp;{{
            state.weather.casts[0].daytemp
          }}&#8451;
        </p>
        <p>{{ state.weather.province }}&nbsp;~&nbsp;{{ state.weather.city }}</p>
        <p>风力：{{ state.weather.casts[0].daypower }}</p>
      </div>
      <div class="info other" v-for="item in state.weather.casts.slice(1)">
                <h3>{{item.date.split('-')[1]}}-{{item.date.split('-')[2]}}</h3>
                <h3>{{item.dayweather}}</h3>
                <p>{{ item.nighttemp }}&nbsp;~&nbsp;{{item.daytemp}}&#8451;</p>
                <p>风力：{{ item.daypower }}</p>
               
            </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import { getweather } from '@/api/users/weather'
import { formatAxis, formatDate } from '@/utils/formatTime'
//   const bindIcon(icon) {
//     return require("@/assets/images/"+icon);
// }
const bindImg =(url:string)=>{
  return `/public/images/weather/${url}.png`
}
// console.log(bindImg('2'))
// const bindImg = (item: any) => {
//   return `./src/assets/images/digit/${item}.png`
// }
const state = reactive({
  time: {
    hm: '',
    s: '',
    mdq: '',
    good: '',
    s1: '0',
    s2: '0',
  },
  setIntervalTime: 0,
  datahtml: '',
  second: [],
  weather: {} as any,
})
getweather().then((res) => {
  if (res.status == 0) {
    state.weather = res.data.forecasts[0]
    // state.weather=toRaw(state.weather)
  }
})
// 时间初始化
const initTime = () => {
  state.time.hm = formatDate(new Date(), 'HH:MM')
  state.time.s = formatDate(new Date(), 'SS')
  state.time.mdq = formatDate(new Date(), 'YYYY-mm-dd WWW')
  state.time.good = formatAxis(new Date())

  state.time.s1 = state.time.s.split('')[0]
  state.time.s2 = state.time.s.split('')[1]
  // state.second=
  // [...state.time.s].map((item:any) => {
  //   // console.log(item)
  //   str += `<img src='${DigitalPictures[item]}' alt=''>`
  // })
  // state.datahtml=str
}
// 时间初始化定时器
const initSetTime = () => {
  initTime()
  state.setIntervalTime = window.setInterval(() => {
    initTime()
  }, 1000)
}
// 页面加载时
onMounted(() => {
  initSetTime()
})
// 页面卸载时
onUnmounted(() => {
  window.clearInterval(state.setIntervalTime)
})
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'din';
  src: url('@/assets/font/DIN Condensed Bold.ttf');
}
.weatherbox {
  width: 800px;
  height: 200px;
  bottom: 50px;
  position: absolute;
  left: 530px;
  display: flex;
  // border: 1px solid #f00;
  .weather {
    display: flex;
    flex: 1;
    align-items: center;
    color: #00d8ff;

    .img {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      // background-color: #00d8ff;
    }
    .img img {
      width: 80%;
    }
    .info {
      color: #00d8ff;

      h3 {
        font-size: 18px;
        font-family: 'sy';
        opacity: 0.7;
      }
      p {
        font-size: 14px;
        font-family: 'sy';
        opacity: 0.7;
      }
    }
    .other{
        margin-left: 15px;
        padding-left:15px;
        border-left: 1px dashed #046172;
        h3{
            font-size: 14px;
        }
    }
  }
  .weather::before {
    content: '';
    width: 2px;
    height: 60%;
    margin-right: 10px;
    background-color: #046172;
  }

  .time {
    width: 340px;
    // background-color: #f00;
    display: flex;
    justify-content: center;
    flex-direction: column;
    p {
      margin-top: 10px;
      span {
        color: #00d8ff;
        font-size: 30px;
        font-family: din, sy;
      }
    }
    h3 {
      height: 100px;
      display: flex;
      align-items: center;
      font-size: 80px;
      font-family: din;
      color: #00d8ff;
      div {
        margin-left: 10px;
        height: 100px;
        display: flex;
        img {
          height: 100%;
          margin-top: -5px;
        }
        img:last-child {
          margin-left: -10px;
        }
      }
      // font-size:10px;
    }
  }
}
</style>
