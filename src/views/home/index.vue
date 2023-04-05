<template>
  <div class="header">
    <div class="header_left">
      <span class="animated infinite pulse slow">代理外站数据</span>
      <!-- <router-link to="/home/visitchart">代理外站数据</router-link> -->
    </div>
    <div class="nav">
      <router-link to="/home/visitchart">首页</router-link>
      <router-link to="/home/projectchart">参与项目</router-link>
      <span @click="goblog()">前端知识体系</span>
      <!-- <router-link to="/home/knowledge">前端知识体系</router-link> -->
      <span @click="gotoadmin()">后台管理</span>
    </div>
    <div class="header_right" @click="goblog()"><span class="animated infinite pulse slow">切换到博客模块</span></div>
  </div>

  <router-link
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    class="goviewingitems"
    id="GoviewingitemsID"
    to="/home/viewingitems/5"
  ></router-link>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }" @stopMoving="getstopMoving">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { NextLoading } from '@/utils/loading'
import {switchingmodule}  from '@/utils/switchingmodule'
NextLoading.done()
const state = reactive({
  iSpeedX: 6,
  iSpeedY: 8,
  setIntervalTime: 0,
  stopmoving:'start' as string,
})
const goblog=()=>{
  const data={
    id:1,
    isShowblog:"true",
  };
  switchingmodule(data)
}

const gotoadmin=()=>{
  window.open(`http://www.wzhmeet.top:8881`);
}

const startMove = () => {
  //  alert(state.stopmoving)
  // alert(state.stopmoving==='start')
  if (state.stopmoving=='start') {
    let _this = state
    clearInterval(_this.setIntervalTime)
    _this.setIntervalTime = setInterval(function () {
      const oDiv: HTMLElement = document.getElementById(
        'GoviewingitemsID',
      ) as HTMLDivElement
      var l = oDiv.offsetLeft + _this.iSpeedX
      var t = oDiv.offsetTop + _this.iSpeedY
      var oDivoffT = document.documentElement.clientHeight - oDiv.offsetHeight
      var oDivoffl = document.documentElement.clientWidth - oDiv.offsetWidth

      if (t >= oDivoffT) {
        _this.iSpeedY *= -1
        t = oDivoffT
      } else if (t < 0) {
        _this.iSpeedY *= -1
        t = 0
      }

      if (l >= oDivoffl) {
        _this.iSpeedX *= -1
        l = oDivoffl
      } else if (l <= 0) {
        _this.iSpeedX *= -1
        l = 0
      }
      oDiv.style.left = l + 'px'
      oDiv.style.top = t + 'px'
    }, 100)
  }
}

const mouseOver = () => {
  window.clearInterval(state.setIntervalTime)
}
const mouseLeave = () => {
  startMove()
}
const getstopMoving = (val: any) => {
  state.stopmoving=val;
  if(val=='stop'){
    const oDiv: HTMLElement = document.getElementById(
        'GoviewingitemsID',
      ) as HTMLDivElement;
      oDiv.style.left='35px';
      oDiv.style.top='55px';
      mouseOver()
  }
  startMove()
}

onMounted(() => {
  startMove()
})

onUnmounted(() => {
  window.clearInterval(state.setIntervalTime)
})
</script>
<style lang="less" scoped>
* {
  cursor: url(@/assets/images/pointer.png) 8 3, auto !important;
}
.header {
  position: fixed;
  width: 100%;
  height: 111px;
  top: 0;
  z-index: 333;
  display: flex;
  justify-content: center;
  background: url(@/assets/images/head_bg.png) no-repeat center -20px;
  .nav {
    width: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a,
    span {
      color: #087ce1;
      font-size: 24px;
      font-family: 'sy';
      text-shadow: 4px 4px 2px #091f54;
      white-space: nowrap;
      // cursor: pointer;
    }
    a.router-link-active {
      color: #fff;
    }
  }
  .header_left {
    flex: 1;
    display: flex;
    justify-content:start;
    height: 36px;
    align-items: center;
    span{
      color: #fff;
      font-weight:bold;
      font-family: 'sy';
      margin-left: 10px;
      letter-spacing:2px;
          
white-space: nowrap;  /* 禁止换行 */
text-overflow: ellipsis;
    }
  }
  .header_right {
    flex: 1;
    display: flex;
    justify-content:start;
    height: 36px;
    align-items: center;
    // background-color: #087ce1;
    span{
      color: #fff;
      font-weight:bold;
      font-family: 'sy';
      margin-left: 100px;
      letter-spacing:2px;
          
white-space: nowrap;  /* 禁止换行 */
text-overflow: ellipsis;
    }
  }
}

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
 
  50% {
    -webkit-transform: scale3d(1.08, 1.08, 1.08);
    transform: scale3d(1.08, 1.08, 1.08);
  }
 
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
 
  50% {
    -webkit-transform: scale3d(1.08, 1.08, 1.08);
    transform: scale3d(1.08, 1.08, 1.08);
  }
 
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  &.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  &.slow {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
}

.goviewingitems {
  position: fixed;
  width: 60px;
  height: 73px;
  z-index: 99999;
  background: url(@/assets/images/viewingitems.png) no-repeat;
  background-size: 100% 100%;
  top: 55px;
  left: 35px;
}
</style>
