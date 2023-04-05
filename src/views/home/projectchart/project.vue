<template>
    <div class="project" id="project">   
    </div>
</template>
 <script setup lang="ts">
 import {nextTick} from 'vue'
import * as echarts from 'echarts'
import {projectIdJSON} from '@/api/echarts'
import { useRouter } from 'vue-router'
// console.log(useRouter())
const router = useRouter()
nextTick(() => {
  const visitarea: HTMLElement = document.getElementById('project',
  ) as HTMLDivElement
  var myChart = echarts.init(visitarea)
  myChart.setOption(projectIdJSON)
  myChart.on("click", function (params:any) {

        console.log(params);
        if(params.data.ish5){
          router.push(`/home/viewingitems/${params.data.id}`)
        }else{
          window.open(params.data.url);
        }
       
      });
})

</script>