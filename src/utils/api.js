/**
 * todo api 封装
 */

import axios from 'axios'
import {Message} from 'element-ui'
import router from '../router'

/**
 * 配置拦截器
 */

// 响应拦截器
axios.interceptors.response.use(
    success=>{
        // 判断响应成功 且 状态码处于200-299
        if(success.status && success.status >= 200 && success.status<300 ){

            // 业务逻辑错误 || 未登录 || 无权限 ，其他的单独做判断
            if(success.data.code==500 || success.data.code==401 || success.data.code==403){

                // 弹出message弹窗
                Message.error({message:success.data.message});
                return;
            }
        } 

        // 如果有提示信息 例如：提交成功 登录成功 也进行返回
        if(success.data.message){
            Message.success({message:success.data.message});
        }

        return success.data; 

    },error =>{
        // 请求出错
        if(error.response.code>500){
            Message.error({message:'服务器不见了'})

        }else if(error.response.code==500){
            Message.error({message:'请求出错了，请稍后再次尝试'})

        }else if(error.response.code==404){
            Message.error({message:'请求接口不存在，请联系管理员'})

        }else if(error.response.code==403){
            Message.error({message:'权限不足，请联系管理员'})

        }else if(error.response.code==401){
            Message.error({message:'cookie已失效或未登录，请登录后再进行操作'})
            
            // 未登录 使用路由替换路径，跳转登录页面
            router.replace('/');

        }else{
            Message.error({message:'未知错误，请重新尝试'})

        }

        return;
    }
)


// 提前准备项目前置路径，区分不同服务
let base ='';

// 配置post请求-Json 
export const postRequest = (url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}