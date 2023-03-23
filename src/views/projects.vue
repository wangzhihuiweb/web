<template>
    <div class="box">
        <div class="header">
            dd
        </div>
        <div class="con">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
const Footer =defineAsyncComponent(()=>import('@/layout/footer/index.vue'))
</script>
<style scoped lang="less">
    .box{
        width: 100%;
        height: calc(100vh);
        background: url(@/assets/images/banner5.jpg) no-repeat fixed;
        display: flex;
        flex-direction: column;
        .header{
            height: 80px;
            background-color: rgba(255,255,255,0.5);
        }
        .con{
            flex: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow:scroll;
            // overflow-x: auto;
            overflow: hidden;
            justify-content:center;
            padding-top: 30px;
            div{
                width: 300px;
                height: 200px;
                border-radius: 10px;
                margin-right: 15px;
                margin-bottom: 15px;
                background-color:rgba(255,255,255,0.15);
            }
        }
    }
</style>