import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { NextLoading } from '@/utils/loading'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import animate from 'animate.css'
import '@/assets/css/reset.css'
import {debuggerF} from '@/utils/infinitedebugger'
// console.log("11111111111111111111111111111111111111111111111")
if(import.meta.env.MODE==="production"){
    debuggerF()
}
const app = createApp(App)
// NextLoading.start()
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
