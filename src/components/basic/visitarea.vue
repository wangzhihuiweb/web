<style lang="less" scoped>
.warp {
  display: flex;
}
.visitarea {
  width: 550px;
  position: relative;
  height: 400px;
}
</style>
<template>
    <div :id="res.name" class="visitarea"></div>
</template>
<script lang="ts" setup>
import { toRaw, defineProps, nextTick } from 'vue'
import * as echarts from 'echarts'
const props = defineProps(['data'])
// console.log(props.data) //父组件信息
const res = <any>toRaw(props.data)
let map = <any>{}
let myArr = []
// console.log(res)
const arr = res.data
// console.log(arr)
for (let i = 0; i < arr.length; i++) {
  // console.log(!map[arr[i].address])
  if (!map[arr[i].address]) {
    myArr.push({
      name: arr[i].address,
      value: 1,
    })
    // console.log(arr[i])
    map[arr[i].address] = arr[i]
  } else {
    for (let j = 0; j < myArr.length; j++) {
      if (arr[i].address === myArr[j].name) {
        myArr[j].value++
        break
      }
    }
  }
}
const option = {
  title: {
    text:res.name+"站访问分布地区情况",
    textStyle: { color: '#fff'},
    //subtext: '纯属虚构',
    top:20,
    x: 'center',
  },
  // 控制提示
  tooltip: {
    // 非轴图形，使用item的意思是放到数据对应图形上触发提示
    trigger: 'item',
    // 格式化提示内容：
    // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  // 控制图表
  series: [
    {
      // 图表名称
      name: '访问地区',
      // 图表类型
      type: 'pie',
      // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
      // 百分比基于  图表DOM容器的半径
      radius: ['20%', '70%'],
      // 图表中心位置 left 50%  top 50% 距离图表DOM容器
      center: ['50%', '50%'],
      // 半径模式，另外一种是 area 面积模式
      roseType: 'radius',
      // 数据集 value 数据的值 name 数据的名称
      data: myArr,
      //文字调整
      label: {
        fontSize: 16,
      },
      //引导线
      labelLine: {
        length: 8,
        length2: 10,
      },
    },
  ],
  color: [
    '#0e94eb',
    '#c440ef',
    '#efb013',
    '#2fda07',
    '#d8ef13',
    '#2e4af8',
    '#0eebc4',
    '#f129b1',
    '#17defc',
    '#f86363',
    '#006cff',
    '#60cda0',
    '#ed8884',
    '#ff9f7f',
    '#0096ff',
    '#9fe6b8',
    '#32c5e9',
    '#1d9dff',
  ],
}

nextTick(() => {
  const visitarea: HTMLElement = document.getElementById(
    res.name,
  ) as HTMLDivElement
  var myChart = echarts.init(visitarea)
  myChart.setOption(option)
})
// console.log(myArr)
// console.log(parentData)
</script>
