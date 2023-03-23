<template>
  <div class="box">
    <div id="china_map"></div>
  </div>
</template>
<script lang="ts" setup>
// 定义父组件传过来的值
import * as echarts from 'echarts'
import china from '@/assets/map/china.json'
import { onMounted, toRaw, nextTick } from 'vue'
import { map } from 'lodash';
const shengfen:any=china
// const visitsdata=ref()
const props = defineProps({
  // 菜单列表
  visitsdata: {
    type: Array,
    default: () => [],
  },
})
// function 0 {
// 	return Math.round(Math.random()*500);
// }
//     const visitsdata = computed(() => {
// 	return props.visitsdata
// });
onMounted(() => {
  //         console.log(props)
  // // setTimeout(()=>{
  //     console.log(props.visitsdata)

  // },1000)
  let map = <any>{}
  let myArr = []
  let arr = <any>toRaw(props.visitsdata)
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    // console.log(!map[arr[i].address])
    if (!map[arr[i].address] && arr[i].address != null) {
      myArr.push({
        name: arr[i].address,
        value: 1,
      })
      // console.log(arr[i])
      map[arr[i].address] = arr[i]
    } else {
      for (let j = 0; j < myArr.length; j++) {
        if (arr[i].address === myArr[j].name) {
          // myArr[j].data.push(arr[i]);
          myArr[j].value++
          break
        }
      }
    }
  }
  initmap(myArr)
})

function initmap(data:any) {
//  console.log(data)
  var mydata = [
    { name: '北京', value: 0 },
    { name: '天津', value: 0 },
    { name: '上海', value: 0 },
    { name: '重庆', value: 0 },
    { name: '河北', value: 0 },
    { name: '河南', value: 0 },
    { name: '云南', value: 0 },
    { name: '辽宁', value: 0 },
    { name: '黑龙江', value: 0 },
    { name: '湖南', value: 0 },
    { name: '安徽', value: 0 },
    { name: '山东', value: 0 },
    { name: '新疆', value: 0 },
    { name: '江苏', value: 0 },
    { name: '浙江', value: 0 },
    { name: '江西', value: 0 },
    { name: '湖北', value: 0 },
    { name: '广西', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '山西', value: 0 },
    { name: '内蒙古', value: 0 },
    { name: '陕西', value: 0 },
    { name: '吉林', value: 0 },
    { name: '福建', value: 0 },
    { name: '贵州', value: 0 },
    { name: '广东', value: 0 },
    { name: '青海', value: 0 },
    { name: '西藏', value: 0 },
    { name: '四川', value: 0 },
    { name: '宁夏', value: 0 },
    { name: '海南', value: 0 },
    { name: '台湾', value: 0 },
    { name: '香港', value: 0 },
    { name: '澳门', value: 0 },
  ]
  let newdata=<any>{};
  mydata.forEach((it:any)=>{
    if (!newdata[it.name]) newdata[it.name] = {}
    newdata[it.name]=it
  })


  // mydata.forEach((item,index:any)=>{
  //   index=item.name
  // })
  // console.log(newdata)
  data.map((item:any)=>{
    // console.log(item)
    newdata[item.name].value=item.value+100
  })

  var option = {
    //backgroundColor: '#FFFFFF',
    tooltip: {
      trigger: 'item',
    
    },
    visualMap: {
      show: false,
      x: 'left',
      y: 'bottom',
      //layoutCenter:['30%','30%'],
      splitList: [
        { start: 500, end: 600 },
        { start: 400, end: 500 },
        { start: 300, end: 400 },
        { start: 200, end: 300 },
        { start: 100, end: 200 },
        { start: 0, end: 100 },
      ],
      color: ['#ff0', '#ffff00', '#0E94EB','#6FBCF0', '#F0F06F', '#0085d9'],
    },
    series: [
      {
        name: '访问省份',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        data: mydata,
      },
    ],
  }
  nextTick(() => {
    echarts.registerMap("china",shengfen)
    const china_mapId: HTMLElement = document.getElementById(
      'china_map',
    ) as HTMLDivElement
    var china_map = echarts.init(china_mapId, 'macarons')
    china_map.setOption(option)
  })
}
</script>
<style lang="less" scoped>
.box {
  width: 700px;
//   border: #1a3f72 solid 1px;
  height: 440px;
//   background: rgba(41, 85, 252, 0.2);
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  z-index: 5;
  flex-direction: column;
  box-sizing: border-box;
//   transform: scale(1.3);
  div{height: 440px;transform: scale(1.3);}
}
.box::after{
    content: "全站地区访问量";
    position: absolute;
    top:40px;
    font-size: 33px;
    color: #fff;
    left:41%;
}
</style>
