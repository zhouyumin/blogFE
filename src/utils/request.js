import axios from 'axios'
const request = axios.create({
  baseURL: '/api',
})

//请求拦截器
request.interceptors.request.use(
  (config) => {
    // const user = JSON.parse(window.localStorage.getItem('user'))
    // //如果有登录用户则统一设置token
    // if (user) {
    //   config.headers.Authorization = `Bearer ${user.token}`
    // }
    //所有请求经过这里
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
