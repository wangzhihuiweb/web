<style lang="less" scoped>
.box {
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  padding-top: 20px;
  div{
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    border-radius:10px;
    .el-image{
      width:200px;
      height: 200px;
    }
    span{
      margin-top: 10px;
      color: #fff;
      font-size: 18px;
      font-family: 'sy';
    }
  }
 
}
</style>
<template>
  <div class="box">
    <div  v-for="(item,index) in state.srcList">
      <el-image
      :src="item.url[0]"
      :zoom-rate="1.2"
      :preview-src-list="item.url"
      :initial-index="index"
      :title="item.name" 
      fit="cover"
    />
    <span>{{ item.name }}</span>
    </div>
   
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

// 定义变量内容
const state =reactive({
  srcList:[
    {url:['http://www.wzhmeet.top:8887/web/面试经验谈.jpg'],name:'面试经验谈'},
    {url:['http://www.wzhmeet.top:8887/web/前端知识体系.png'],name:'前端知识体系'},
    {url:['http://www.wzhmeet.top:8887/web/基础知识.png'],name:'基础知识'},
    {url:['http://www.wzhmeet.top:8887/web/算法.png'],name:'算法'},
    {url:['http://www.wzhmeet.top:8887/web/前端工程化.png'],name:'前端工程化'},
    {url:['http://www.wzhmeet.top:8887/web/前端框架计算机网络与安全浏览器原理.png'],name:'前端框架计算机网络与安全浏览器原理'},
    {url:['http://www.wzhmeet.top:8887/web/CSSGrid.png'],name:'CSSGrid'},
  ]
})

</script>
