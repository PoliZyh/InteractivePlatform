// utils/request.ts
import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    // if (response.data.message) {
    //   ElMessage({
    //     type: 'success',
    //     message: response.data.message
    //   })
    // }
    return response.data
  },
  (error) => {
    // 失败的回调，处理http网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络异常'
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)


export default request