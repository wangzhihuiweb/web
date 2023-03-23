import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from "axios";
import {ElMessage,ElMessageBox} from 'element-plus'
import { session } from './storage';

// 配置新建一个 axios 实例
const request:AxiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    timeout:5000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
})

//添加请求拦截器
request.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么 token
		if (session.get('token')) {
			config.headers!['Authorization'] = `${session.get('token')}`;
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);


// 添加响应拦截器
request.interceptors.response.use((response)=>{
    const res=response.data;
    if(res.code && res.code !==0){
        if (res.code === 401 || res.code === 4001) {
            // Session.clear(); // 清除浏览器全部临时缓存
            // window.location.href = '/'; // 去登录页
            // ElMessageBox.alert('你已被登出，请重新登录', '提示', {}).then(() => {}).catch(() => {});
        }
        return Promise.reject(request.interceptors.response);
    }else{
        return response.data
    }
},(error)=>{
    // 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
})

// 导出 axios 实例
export default request;
