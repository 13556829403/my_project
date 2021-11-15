/**
 * todo api 封装axios
 */

import axios from "axios";

const http = axios.create({
  // 配置请求根路径
  baseURL: process.env.VUE_APP_URL,

  // 超时时间
  timeout: 10 * 1000,
});

//请求拦截，在每个请求发出去之前，针对每个域名做不同的配置
http.interceptors.request.use((config) => {

  if (config.requestBase == "VUE_APP_URL") {

    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    
  } else if (config.requestBase == "VUE_APP_URL_SOURCE") {
    
    config.headers["Content-Type"] = "application/json";
    config.baseURL = process.env.VUE_APP_URL_SOURCE;
    config.data = JSON.stringify(config.data);

  }

  return config;
});
export default http;
