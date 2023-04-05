<template>
  <div class="visitsNum">
    <div class="title">全站设备访问总量</div>
    <div class="figure">
      <div v-html="state.datahtml"></div>
      <!-- <img src="@/assets/images/digit/2.png" alt="">
       <img src="@/assets/images/digit/8.png" alt=""> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onBeforeMount } from 'vue'
import mittBus from '@/utils/mitt'
import { DigitalPictures } from '@/utils/digit'
const state = reactive({
  datahtml: '',
})
onBeforeMount(() => {
  mittBus.on('visitsNumber', (res: any) => {
    // let data=[...res]
    let str="";
    [...res].map((item) => {
      // console.log(item)
      str += `<img src='${DigitalPictures[item]}' alt=''>`
    })
    state.datahtml=str
    // console.log(state.datahtml) 
  })
})
</script>

<style scoped lang="less">
.visitsNum {
  width: 496px;
  height: 186px;
  background: url(@/assets/images/border_bg01.png) no-repeat
    rgba(5, 149, 235, 0.2);
  position: absolute;
  bottom:73%;
  left: 10px;
  .title {
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background: url(@/assets/images/title_bg01.png) center center no-repeat;
    font-size: 16px;
    color: #0e94ea;
    font-weight: 900;
  }
  .figure {
    height: 100px;
    // background-color: #0e94ea;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100px;
      :deep(img) {
        height: 90%;
      }
    }
  }
}
</style>
