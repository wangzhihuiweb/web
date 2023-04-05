
<template>
    <div class="company" id="company">
        
    </div>
</template>
 <script setup lang="ts">
 import {nextTick} from 'vue'
import * as echarts from 'echarts'
import {companyIdJSON} from '@/api/echarts'

nextTick(() => {
  const visitarea: HTMLElement = document.getElementById('company',
  ) as HTMLDivElement
  var myChart = echarts.init(visitarea)
  myChart.setOption(companyIdJSON)
})

</script>