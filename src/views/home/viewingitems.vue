<template>
  <div class="viewingitems" id="viewingitemsID">
    <canvas id="canvasID"></canvas>
    <div class="viewingitems_left">
      <!-- {{ state.dataAll }} -->
       <!-- <span></span>@click="ClickEvent" -->
      <router-link  v-for="item in state.dataAll.data" :to="'/home/viewingitems/'+item.id" :key="item.id">{{item.name }}</router-link>
    </div>
    <div class="viewingitems_right">
      <iframe
        class="iframeH5"
        v-if="state.data?.ish5"
        :src="state.data.url"
        frameborder="0"
      ></iframe>
      <iframe
        v-else
        class="iframe"
        :src="state.data.url"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<style lang="less" scoped>
.viewingitems {
  overflow: hidden;
  width: 1920px;
  // width: calc(100vw);
  height: calc(100vh);
  display: flex;
  background-color: #001d33;
  position: relative;
  z-index: 2;
  .viewingitems_left {
    padding-top: 140px;
    box-sizing: border-box;
    width: 150px;
    padding-left: 10px;
      padding-right: 10px;
    background-color: #071941;
    a{
    
      padding-top: 12px;
      font-size:12px;
      padding-bottom:12px;
      border-bottom: 1px dotted #cbcccc;
      display:block;
    }
    a.router-link-active{
      color:#00d8ff;
    }
  }
  .viewingitems_right {
    flex: 1;
    .iframe {
      width: 100%;
      height:100%;
      background-color:rgba(255, 255, 255, 1);
      box-sizing: border-box;
      padding-top:90px;
    }

    .iframeH5{
      width:380px;
      height: 769px;
      position: relative;
      left: 20%;
      padding-top: 50px;
      box-sizing: border-box;
      padding-left: 28px;
      padding-right: 28px;
      overflow:hidden;
      padding-bottom: 40px;
      margin-top: 111px;
      margin-left:-190px;
      background:url(@/assets/images/iPhoneX_model.png) no-repeat;
      background-size: 100% 100%;
      ::deep(body){
        overflow: hidden;
      }
    }
  }

  canvas{
    position:absolute;
    top:0;
    bottom: 0;
    z-index: -1;
  }

}
</style>
<script setup lang="ts">
import { onActivated, onDeactivated, reactive, watch,defineEmits,onMounted} from 'vue'
import {useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router'
import { projectIdJSON } from '@/api/echarts'
import {session} from '@/utils/storage'
const dataS: any = projectIdJSON.series.find((i) => i.name == '项目介绍')
const router = useRouter()
// const route=useRoute()
const state = reactive({
  setIntervalTime: 0,
  data: [] as any,
  dataAll:[] as any,
})
const getInitFun=(id:any)=>{
    // state.id = router.currentRoute.value.params.id
    state.data = dataS.data.find((j: any) => j.id == id )

}
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    if(newValue.name=="viewingitems"){
      getInitFun(newValue.params.id)
    }
    // console.log(newValue)
    // console.log('newValue1231321',newValue.params.id)
    // getInitFun(newValue.params.id)
  },
  { immediate: true }
)
// console.log(projectIdJSON.series)
// console.log(dataS)
//  dataS.data.find((j) => j.id == id)
// console.log(id)
// console.log(dataS.data.find((j: any) => j.id == id))

// const ClickEvent =()=>{
// alert(123)
// }

const emits = defineEmits(['stopMoving'])
  const sendFun = (status:string) => {
      emits('stopMoving',status)
  }

onActivated(() => {
  sendFun('stop')
  const canvas: HTMLCanvasElement = document.getElementById(
    'canvasID',
  ) as HTMLCanvasElement
  const viewingitemsID: HTMLDivElement = document.getElementById(
    'viewingitemsID',
  ) as HTMLDivElement
  const context = canvas.getContext('2d') as any
  const W = viewingitemsID.clientWidth
  const H = viewingitemsID.clientHeight
  canvas.width = W
  canvas.height = H
  var fontSize = 16
  var colunms = Math.floor(W / fontSize)
  var drops = [] as any
  for (var i = 0; i < colunms; i++) {
    drops.push(0)
  }
  const str = 'javascript html5 canvas'

  const draw = () => {
    context.fillStyle = 'rgba(0,0,0,.05)'
    context.fillRect(0, 0, W, H)
    context.font = '700 ' + fontSize + 'px  微软雅黑'
    context.fillStyle = '#00cc33'
    for (var i = 0; i < colunms; i++) {
      var index = Math.floor(Math.random() * str.length)
      var x = i * fontSize
      var y = drops[i] * fontSize
      context.fillText(str[index], x, y)
      if (y >= canvas.height && Math.random() > 0.99) {
        drops[i] = 0
      }
      drops[i]++
    }
  }
  draw()
    state.setIntervalTime = window.setInterval(() => {
      // console.log(1213)
      draw()
    }, 30)
    state.dataAll=dataS;
    getInitFun(router.currentRoute.value.params.id)
  
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // session.set("ismove",'start')
  sendFun('start')
  window.clearInterval(state.setIntervalTime)
  // alert(onDeactivated)
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>
