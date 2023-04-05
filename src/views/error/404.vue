<template>
    <div class="box">
        <img :src="img404" />
    </div>
</template>
<style scoped lang="less">
    .box{
        display:flex;
        width: 100%;
        min-height: calc(100vh);
        align-items: center;
        justify-content: center;
        background-color: #283150;
        img{
            width: 1000px;
        }
    }
</style>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { NextLoading } from '@/utils/loading'
import img404 from '@/assets/images/404.jpeg'
NextLoading.done()
useRouter().push('/');
// window.location.href='/'
        // 
</script>