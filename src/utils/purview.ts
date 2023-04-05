import {getpcinfo} from '@/api/base/index'
import {ElMessage} from 'element-plus'
export function pcAccess(){
    return new Promise((resolve,reject)=>{
        getpcinfo().then((res:any)=>{
           if(res.status==0){
            resolve(res.data)
           }else{
            ElMessage.error(res.message);
           }
        })
    })
}