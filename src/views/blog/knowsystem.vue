<style lang="less">
.box{
  max-width:1000px;
  margin:auto;
  img{
    max-width:1000px;
    display: block;
  }
}
</style>
<template>
    <div class="box">
      <img src="@/assets/images/blog/knowsystem1.jpg" alt="">
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const data=ref("demo1")
</script>