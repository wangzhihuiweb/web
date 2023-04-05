<template>
  <div class="browsecount">
    <span class="j_1"></span>
    <span class="j_2"></span>
    <span class="j_3"></span>
    <span class="j_4"></span>
    <h3>
      <img src="@/assets/images/icon/icon4.png" alt="" />
      全站设备访问量占比
    </h3>
    <div class="data">
      <div class="left" id="VisitsPie"></div>
      <div class="right pie-data">
        <p v-for="(item, index) in data">
          <i class="legend" :style="{ background: item.background }"></i>
          <span>{{ item.name }}</span>
          <span class="pie-number" style="">{{ item.value }}</span>
          <span>{{ (item.percent * 100).toFixed() }}%</span>
        </p>
        <!-- {{ startColor }} -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, toRaw, nextTick } from 'vue'
import * as echarts from 'echarts'
import { getvisits } from '@/api/users/visits'
import mittBus from '@/utils/mitt';
const startColor = [
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
]
const borderStartColor = [
  '#0077c5',
  '#a819d7',
  '#c99002',
  '#24bc00',
  '#b6cb04',
  '#112ee2',
  '#00bd9c',
  '#ce078f',
  '#00b2cd',
  '#ec3c3c',
]
const data = ref()
getvisits().then((res) => {
  // console.log(res)
  if (res.status == 0) {
    mittBus.emit('visitsNumber',""+res.data.length+"");
    //方法一 js对象数组根据某个共同字段分组,返回一个数组
    let map = <any>{}
    let myArr = []
    let arr = res.data
    for (let i = 0; i < arr.length; i++) {
      if (!map[arr[i].device]) {
        // console.log( [arr[i]])
        myArr.push({
          name: arr[i].device,
          // data: [arr[i]],
          value: 1,
          percent: '',
          background: startColor[i],
        })
        // console.log(arr[i])
        map[arr[i].device] = arr[i]
      } else {
        for (let j = 0; j < myArr.length; j++) {
          if (arr[i].device === myArr[j].name) {
            // myArr[j].data.push(arr[i]);
            myArr[j].value++
            myArr[j].percent = (myArr[j].value / arr.length).toFixed(2)
            myArr[j].background = startColor[j]
            break
          }
        }
      }
    }
    data.value = myArr
    // console.log(data)
    //方法一 js对象数组根据某个共同字段再次分组
    // let result = <any>{}
    // let arr = res.data
    // arr.forEach(function (it: any) {
    //   // console.log(it)
    //   if (!result[it.device]) result[it.device] = []
    // //   Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
    //   if (result.hasOwnProperty(it.device)) {
    //     result[it.device].push(it)
    //   }
    // })
    // data.value=result;
    // console.log(data)
    // let xData:any = [];
    // let yData:any = [];
    // data.value.map((a:any) => {
    //     xData.push(a.device);
    //     yData.push(a.percent);
    // });
    // console.log(xData)
    // console.log(yData)

    function deepCopy(obj: any) {
      if (typeof obj !== 'object') {
        return obj
      }
      var newobj = <any>{}
      for (var attr in obj) {
        newobj[attr] = obj[attr]
      }
      return newobj
    }
    var RealData: any = [] //真实数据
    var borderData: any = [] //边框数据
    data.value.map((item: any, index: number) => {
      var newobj = deepCopy(item)
      var newobj1 = deepCopy(item)
      RealData.push(newobj)
      borderData.push(newobj1)
    })

    RealData.map((item: any, index: number) => {
      item.itemStyle = {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: startColor[index], // 0% 处的颜色
              },
              {
                offset: 1,
                color: startColor[index], // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
        },
      }
    })
    borderData.map((item: any, index: number) => {
      item.itemStyle = {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: borderStartColor[index], // 0% 处的颜色
              },
              {
                offset: 1,
                color: borderStartColor[index], // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
        },
      }
    })
    // console.log(RealData)
    const option = {
      tooltip: {
        trigger: 'item',
        //            position: ['30%', '50%'],
        confine: true,
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
        // formatter:(data:any)=>{
        //   console.log(data)
        // }
        formatter: function (data: any) {
          return (
            data.name +
            '端 : 访问量' +
            data.value +
            '<br/>全站占比：' +
            data.percent.toFixed(0) +
            '%'
          )
        },
      },
      series: [
        // 主要展示层的
        {
          radius: ['50%', '85%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          name: '全站访问量占比',
          data: RealData,
        },
        // 边框的设置
        {
          radius: ['45%', '50%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          animation: false,
          tooltip: {
            show: false,
          },
          data: borderData,
        },
      ],
    }

    nextTick(() => {
      const VisitsPie: HTMLElement = document.getElementById(
        'VisitsPie',
      ) as HTMLDivElement
      var myChart = echarts.init(VisitsPie)
      // 绘制图表
      // console.log(data)
      myChart.setOption(option)
    })
  }
})
// 基于准备好的dom，初始化echarts实例

// console.log(VisitsPie)
// onMounted(() => {

// })
</script>
<style lang="less" scoped>
.browsecount {
  width: 496px;
  border: #1a3f72 solid 2px;
  height: 320px;
  background: rgba(41, 85, 252, 0.2);
  position: absolute;
  bottom: 37%;
  left: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

  .data {
    display: flex;
    width: 100%;
    flex: 1;
    padding-bottom: 10px;
    .left {
      width: 240px;
    }
    .right {
      flex: 1;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 10px;
      p {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        color: #cdddf7;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        cursor: default;
        i {
            display: block;
            width: 20px;
            height: 16px;
            line-height: 20px;
            border-radius: 2px;
            margin-right: 10px;
          }
        span {
          // width: 0;
          // flex-grow: 1;
          // margin: 0 5px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 70px;

        }
      }
    }
  }
}
</style>
