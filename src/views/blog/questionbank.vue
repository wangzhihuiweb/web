<template>
    <div class="box">
      {{ data }}
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue'
  const data = ref('questionbank')
  </script>