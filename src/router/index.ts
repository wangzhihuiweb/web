import { createRouter, createWebHistory } from 'vue-router'
import {ElMessage,ElMessageBox} from 'element-plus'
import {pcAccess} from '@/utils/purview'
import {homeRouter} from '@/router/modules/home'
import {blogRouter} from '@/router/modules/blog'
import {notFound} from '@/router/modules/404'
import showblog from '@/utils/showcontents'
const pcAccessResult:any = await pcAccess()
// let redirectRoute=homeRouter
// // if(showblog()==true){
// //   redirectRoute=blogRouter
// // }
let routes=[] as any; 
let homeroutes=[{path:'/',redirect:'/home'},...homeRouter,...notFound]
let blogroutes=[{path:'/',redirect:'/blog'},...blogRouter,...notFound]
// console.log(redirectRoute)
// let routes=[] as any;
// console.log(showblog)
if(showblog=='true'){
  routes=blogroutes
}else{
  routes=homeroutes
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// console.log(pcAccessResult.accessrights)
const pagePathArr = ['/blog/knowsystem', '/blog/vue3setup','/blog/payment']
router.beforeEach((to,from,next)=>{
  // 访问的是有权限的页面，需要判断用户是否登录
  // alert(pcAccessResult.accessrights == "false")
  // alert(pagePathArr.indexOf(to.path))
  if (pagePathArr.indexOf(to.path) !== -1 && pcAccessResult.accessrights == "false") {
    ElMessageBox.alert('去后台管理页面打开访问权限吧！', '欢迎光临', {}).then(() => {
      window.open(`http://www.wzhmeet.top:8881`);
    }).catch(() => {
      window.open(`http://www.wzhmeet.top:8881`);
    });
  }else if(to.path=='/blog/payment'){
    ElMessage({
      message: '禁止访问！',
      type: 'warning',
    })
  } else {
    // 访问的是没有权限的页面
    next()
  }
})
// router.beforeEach(async(to,from,next)=>{

// })

export default router
