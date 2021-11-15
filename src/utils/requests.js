
import http from './http';

export const getUsers=function(data){
    let params={
        method:'post',
        url:'/X1',//写/api后的部分
        requestBase:'VUE_APP_URL',//用于拦截器判断
        data
    }
    return http(params)
}
export const getResource=function(data) {
    let params={
        method:'post',
        url:'/X2',
        requestBase:'VUE_APP_URL_SOURCE',
        data
    }
    return http(params);
}