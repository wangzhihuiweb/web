<template>
  <div class="blog_nav">
    <div class="left">
      <div class="headsculpture">
        <img src="@/assets/images/headsculpture.jpg" />
      </div>
      <h3>WELCOME!</h3>
    </div>
    <div class="right">
      <router-link to="/blog">主页</router-link>
      <router-link to="/blog/knowsystem">前端知识</router-link>
      <router-link to="/blog/vue3setup">Vue3与Vue2对比使用</router-link>
      <router-link to="/blog/payment">第三方支付</router-link>
      <span @click="goproject()">切换到项目模块</span>
    </div>
  </div>

  <div class="blog_module">
    <div class="blog_main" v-show="state.blog_main == true">
      <div class="blog_main_hero"></div>
      <div class=""></div>
      <div class="blog_main_footer">
        <img src="@/assets/images/智慧展站logo.png" alt="" />
        <a href="https://beian.miit.gov.cn" target="_blank">
          晋ICP备2022011484号-1
        </a>
        <span>V1.0.0</span>
      </div>
    </div>
    <router-view v-slot="{ Component }" v-show="state.blog_main == false">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { session } from '@/utils/storage'
import { NextLoading } from '@/utils/loading'
import { useRouter } from 'vue-router'
import { reactive, watch } from 'vue'
import {switchingmodule}  from '@/utils/switchingmodule'
const router = useRouter()
NextLoading.done()

const state = reactive({
  blog_main: false,
})

const goproject=()=>{
  const data={
    id:1,
    isShowblog:"false",
  };
  switchingmodule(data)
}


watch(
  () => router.currentRoute.value.fullPath,
  () => {
    if (router.currentRoute.value.name == 'blog') {
      state.blog_main = true
    }else{
      state.blog_main = false
    }
  },
  {
    immediate: true,
  },
)
</script>
<style scoped lang="less">
.blog_nav {
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #1b3577;
  .left {
    display: flex;
    height: 60px;
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    .headsculpture {
      width: 56px;
      height: 56px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
    }
    h3 {
      font-family: 'sy';
      color: #fff;
      font-size: 24px;
      margin-left: 10px;
      margin-right: 10px;
      text-shadow: 4px 4px 2px #091f54;
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    a,
    span {
      cursor: pointer;
      color: #087ce1;
      font-size: 18px;
      font-family: 'sy';
      margin-right: 50px;
      text-shadow: 4px 4px 2px #091f54;
      // cursor: pointer;
    }
    .router-link-active.router-link-exact-active {
      color: #fff;
    }
    // background-color: aqua;
  }
}

.blog_module {
  box-sizing: border-box;
  min-height: calc(100vh);
  background-color: #1b3577;
  padding-top: 60px;
  .blog_main {
    // height: 1000px;
    .blog_main_hero {
      display: flex;
      height: calc(100vh - 100px);
      background: url(@/assets/images/blogbg.jpg) center center / cover
        no-repeat;
    }

    .blog_main_footer {
      position: relative;
      height: 40px;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      width: 100%;
      color: #777777;
      background-color: #000000;
      font-size: 12px;
      a {
        color: #777777;
        font-size: 12px;
        margin-right: 12px;
      }
      a:hover {
        color: #0019fd;
        text-decoration: underline;
      }
      img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
