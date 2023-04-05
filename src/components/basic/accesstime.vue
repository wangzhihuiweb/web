<template>
  <div class="accesstime">
    <span class="j_1"></span>
    <span class="j_2"></span>
    <span class="j_3"></span>
    <span class="j_4"></span>
    <h3>
      <img src="@/assets/images/icon/icon4.png" alt="" />
      全站地区访问量
    </h3>
    <div class="" id="qufenbu_dataId"></div>
  </div>
</template>
<script lang="ts" setup>
// 定义父组件传过来的值
import * as echarts from 'echarts'
import { toRaw,nextTick} from 'vue'
const props = defineProps({
  // 菜单列表
  visitsdata: {
    type: Array,
    default: () => [],
  },
})
const arr = <any>toRaw(props.visitsdata)
let map = <any>{}
let myArr = []
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
const seriesdata: Array<number> = []
const xAxisdata: Array<string> = []
myArr.map((item) => {
  // console.log(item)
  seriesdata.push(item.value)
  xAxisdata.push(item.name)
})
const option = {
  color: ['#0085d9'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    x: 30,
    y: 10,
    x2: 15,
    y2: 20,
  },
  xAxis: [
    {
      type: 'category',
      data: xAxisdata,
      // data : ['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南','河北1', '天津1', '北京1', '新疆1', '内蒙1', '宁夏1', '海南1'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: '#fff', //刻度线标签颜色
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#fff', //刻度线标签颜色
      },
    },
  ],
  series: [
    {
      name: '地区分布',
      type: 'bar',
      barWidth: '60%',
      data: seriesdata,
      // data:[10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220]
    },
  ],
}

nextTick(() => {
    const qufenbu_dataId: HTMLElement = document.getElementById(
      'qufenbu_dataId',
    ) as HTMLDivElement
    var qufenbu_data = echarts.init(qufenbu_dataId)
    qufenbu_data.setOption(option)
  })

// console.log(myArr)
</script>
<style lang="less" scoped>
.accesstime {
  width: 496px;
  border: #1a3f72 solid 2px;
  height: 320px;
  background: rgba(41, 85, 252, 0.2);
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  div{
    width: 496px;
    height: 260px;
    position: relative;
  }
  .j_1 {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-left: 5px solid #0595eb;
    border-top: 5px solid #0595eb;
  }
  .j_2 {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0px;
    right: 0px;
    border-right: 5px solid #0595eb;
    border-top: 5px solid #0595eb;
  }
  .j_3 {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    border-left: 5px solid #0595eb;
    border-bottom: 5px solid #0595eb;
  }
  .j_4 {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-right: 5px solid #0595eb;
    border-bottom: 5px solid #0595eb;
  }
  h3 {
    margin-top: 10px;
    height: 40px;
    color: #09adc6;
    display: flex;
    padding-left: 20px;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
}
</style>
