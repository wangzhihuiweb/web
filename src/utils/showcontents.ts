import {getpcinfo} from '@/api/base/index'
import {ElMessage} from 'element-plus'
const result=()=>{
    return new Promise((resolve,reject)=>{
      getpcinfo().then((res:any)=>{
         if(res.status==0){
          resolve(res.data.isShowblog)
         }else{
          ElMessage.error(res.message);
         }
      })
  })
}
export default await result()

// const dd=function showblog(){
//   return new Promise((resolve,reject)=>{
//       getpcinfo().then((res:any)=>{
//          if(res.status==0){
//           resolve(res.data.isShowblog)
//          }else{
//           ElMessage.error(res.message);
//          }
//       })
//   })