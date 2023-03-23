<template>
  <header>
    <router-link to="/" class="active">首页</router-link>
    <router-link to="/projects">工作项目</router-link>
    <a href="http://localhost:8881" target="_blank">后台系统</a>
    <!-- <router-link >后台系统</router-link> -->
    <router-link to="/home">我的</router-link>
    <router-link to="/home">前端知识体系</router-link>
    <router-link to="/home">技术经验分享</router-link>
  </header>
</template>
<script setup lang="ts">
const  adminUrl='./'+import.meta.env.VITE_API+':8881'
</script>
<style lang="less">
*{
  cursor: url(@/assets/images/pointer.png) 8 3, auto !important;
}
@font-face {
  font-family: 'sy';
  src: url('@/assets/font/SourceHanSerifCN-Heavy.otf');
}
header {
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    opacity: 0.5;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 24px;
    font-family: 'sy';
  }
  a:hover {
    opacity: 1;
  }
  a.active {
    opacity: 1;
  }
}
</style>
