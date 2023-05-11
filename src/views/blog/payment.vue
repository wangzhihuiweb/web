<template>
  <div class="box">
    {{ data }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const data = ref('promise的各种应用场景')
</script>