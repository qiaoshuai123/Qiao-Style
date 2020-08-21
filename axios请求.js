/**
 * @file Http request
 */

import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  const pathName = (config.url.split('/')).pop()
  if (pathName !== 'login') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // console.log(userInfo, 'sdsdsd')
    if (userInfo) {
      config.headers.Authorization = userInfo.token
    } else {
      window.location.href = '#login' // 登录失效后的跳转地址
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})


// 返回拦截
axios.interceptors.response.use((response) => {
  if (response.data.code === -10) {
    localStorage.clear()
    if (process.env.NODE_ENV === 'development') {
      window.location.href = ''
    } else if (process.env.NODE_ENV === 'production') {
      window.location.href = ''
    }
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default axios
