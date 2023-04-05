<template>
  <div class="diagram" id="Diagram"></div>
</template>
<script setup lang="ts">
import { nextTick } from 'vue'
import * as echarts from 'echarts'
nextTick(() => {
  const Diagram: HTMLElement = document.getElementById(
    'Diagram',
  ) as HTMLDivElement
  var myChart = echarts.init(Diagram)
  let colorList = [
    '#CF4645',
    '#B580B2',
    '#29008A',
    '#146A90',
    '#8956FF',
    '#70C9A8',
    '#bfbfbf',
    '#595959',
    '#40a9ff',
    '#1890ff',
    '#ffd666',
    '#ffc53d',
    '#ffc53d',
    '#ffc069',
    '#ffa940',
    '#fa8c16',
    '#eccbd9',
    '#ffadad',
    '#ff6392',
    '#ffc09f',
    '#ffcb77',
    '#ffe066',
    '#ffd53e',
    '#ffda3d',
    '#adf7b6',
    '#a0e8af',
    '#80ed99',
    '#07beb8',
    '#17c3b2',
    '#48cae4',
    '#97d2fb',
    '#83bcff',
    '#91e5f6',
    '#9381ff',
  ]
  let colorListLen = colorList.length
  let fontSizeList = [
    20,
    21.5,
    22,
    23.5,
    18,
    16.5,
    18,
    17.5,
    16,
    16.5,
    17,
    17.5,
    18,
    18.5,
    19,
    19.5,
    20,
    20.5,
    21,
    22,
    23,
    24,
  ]
  let fontSizeListLen = fontSizeList.length
  let customLabel = {
    color: colorList[Math.floor(Math.random() * colorListLen)],
    fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
  }
  let bgColor = 'transparent'
  let canDraggable = true
  const option = {
    // backgroundColor: '#fffcf9',
    color: ['#37A2DA', '#32C5E9', '#67E0E3'],
    title: {
      show: true,
      text: '应用技能',
      // x: 'center',
      y: 'center',
      // 文字的颜色,默认 #333。
      textStyle:{
        color: '#fffcf9',
        fontSize:22
      },
      right:10
    },
    toolbox: {
      show: true,
      feature: {
        // dataView: {readOnly: false},
        // magicType: {type: ['line', 'bar']},
        restore: {},
        // saveAsImage: {}
      },
    },
    itemStyle: {
      color: bgColor,
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 120,
          edgeLength: 10,
        },
        roam:false,
        // roam: 'scale',
        // symbol: '',
        // symbolSize: 0,
        label: {
          show: true,
          color: 'auto',
          fontSize: 14,
        },
        data: [
          {
            name: 'HTML',
            value: 2,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'CSS',
            value: 12,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'JS',
            value: 22,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'TS',
            value: 42,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Node',
            value: 52,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'vue',
            value: 62,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'vite',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'PS',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'webpack',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'uni-app',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '小程序',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Jquery',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '快应用',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Flutter',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Echarts',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Vant',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Pinia',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'SSCMS',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Element Plus',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'MySQL',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '腾讯云',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '宝塔面板',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'nginx',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '（反）代理',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: '服务器',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Layui',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'NPM',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'GIT',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'SVN',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Github',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Gitee',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Gitlab',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
          {
            name: 'Taro',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor,
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize:
                fontSizeList[Math.floor(Math.random() * fontSizeListLen)],
            },
          },
        ],
      },
    ],
  }
  myChart.setOption(option)
  //   myChart.setOption(
  //     {
  //       title: {
  //         text: '',
  //         textStyle: {
  //           //文字颜色
  //           color: '#fff',
  //           //字体大小
  //           fontSize: 26,
  //         },
  //         left: 'center',
  //       },
  //       animationDurationUpdate: 1500,
  //       animationEasingUpdate: 'quinticInOut',
  //       series: [
  //         {
  //           type: 'graph',
  //           layout: 'force',
  //         //   progressiveThreshold: 700,
  //           data: diagramJSON.nodes.map(function (node: RawNode) {
  //             return {
  //               x: node.x,
  //               y: node.y,
  //               id: node.id,
  //               name: node.label,
  //               symbolSize: node.size,
  //               itemStyle: {
  //                 color: node.color,
  //               },
  //             }
  //           }),
  //            // 关系对象上的标签
  //            label: {
  //                 normal: {
  //                     // 是否显示标签
  //                     show: true,
  //                     // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
  //                     position: "inside",
  //                     // 文本样式
  //                     textStyle: {
  //                         fontSize: 16,
  //                         color: 'white'
  //                     }
  //                 }
  //             },
  //           roam: false
  //         },
  //       ],
  //     },
  //     true,
  //   )
})
</script>
