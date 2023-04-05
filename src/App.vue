<template>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
import { Local } from '@/utils/storage'
import {setvisits} from '@/api/users/visits'
import { NextLoading } from '@/utils/loading'
NextLoading.start()
onMounted(()=>{
  // alert(123)
    if(Local.get('ISvisit') !=='true'){
        const obj={
            device:import.meta.env.VITE_DEVICE
        }
        setvisits(obj).then((res)=>{
          Local.set('ISvisit','true')
        })
       
    }
})
console.log(import.meta.env.VITE_API_URL)
console.log(import.meta.env.VITE_DEVICE)
</script>
