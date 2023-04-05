<template>
    <div>
        知识体系知识体系知识体系知识体系知识体系知识体系
    </div>
</template>
<script lang="ts" setup name="knowledge">
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
    // alert(onActivated)
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
    // alert(onDeactivated)
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>