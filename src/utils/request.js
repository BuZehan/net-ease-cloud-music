// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const baseURL = 'http://192.168.1.104:3000' //解决手机加载资源无效
// axios.default.baseUrl ='http://192.168.0.9:8080'
const axiosInstance = axios.create({
    baseURL,
    timeout: 50000
})

//拦截业务的逻辑 进行请求业务的修改 
axiosInstance.interceptors.request.use((config) => {
    nProgress.start()
    return config
}, (err) => { 
    return Promise.reject(err) })
axiosInstance.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (err) => { return Promise.reject(err) })

export default (url, method, data) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return axiosInstance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
}