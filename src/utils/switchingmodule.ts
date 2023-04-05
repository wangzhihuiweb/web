import { setpcinfo } from '@/api/base/index'
import { ElMessage } from 'element-plus'
import Vrouter from "@/router/index"
const router = Vrouter
export function switchingmodule(data: any) {
  setpcinfo(data).then((res: any) => {
    if (res.status == 0) {
    //    ElMessage.success(res.message)
       window.location.href='/'
    } else {
      ElMessage.error(res.message)
    }
  })
}
