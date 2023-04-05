<template>
  <div class="box">
    <div class="bg"></div>
    <project></project>
    <div class="right">
      <diagram></diagram>
      <company></company>
    </div>
  </div>
</template>
<script lang="ts" setup name="projectchart">
import company from '@/views/home/projectchart/company.vue'
import project from '@/views/home/projectchart/project.vue'
import diagram from '@/views/home/projectchart/diagram.vue'
import {useRouter } from 'vue-router'
import { toRaw } from 'vue';
// console.log(useRouter())
const router = useRouter()
// document.title = "智慧铺-"+router.currentRoute.value.meta.title;
</script>
<style lang="less" scoped>
.box {
  overflow: hidden;
  height: calc(100vh);
  padding-top: 111px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  z-index: 2;
}
.box .bg {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  background-color: #080815;
}
.box .project {
  // width: calc(100vw / 2);
  width: 960px;
  box-sizing: border-box;
  padding: 80px;
}
.box .right {
  width: 960px;
  // width: calc(100vw / 2);
  display: flex;
  flex-direction: column;
  .company {
    height:40%;
  }
  .diagram{
    // background-color: aqua;
    color: aliceblue;
    font-size: 30px;
    // height: 500px;
    flex: 1;
  }
}
</style>
