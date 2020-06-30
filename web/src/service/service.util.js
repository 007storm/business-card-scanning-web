import axios from "axios";
import qs from "qs"
// import { Message } from "element-ui";
import $public from "../utils/public.js";
let cookie = new $public.Cookie();
const $axios = (options) => {
    return new Promise((resolve, reject) => {
        // 默认配置 axios 实例
        const instance = axios.create({
            baseURL: window.VUE_CONFIG.api,// 默认请求 ip
            headers: {// 默认 json 请求
                'Content-Type': 'application/json;charset=UTF-8'
            },
            // withCredentials: false,// 表示跨域请求时是否需要使用凭证
            timeout: process.env.VUE_APP_Timeout// 请求时间
            // paramsSerializer(params) { // 序列化函数
            //     qs.stringify(params);
            // }
        });
        // 请求配置
        instance.interceptors.request.use(config => {
            // 请求开始的时候可以修改默认配置选项
            // if (config.url != "/user/loginApp") {
            // }
            return config;
        }, error => {
            return Promise.reject(error);
        })
        // 响应配置
        instance.interceptors.response.use(response => {
            let resData;
            if (response.data == undefined) {
                resData = JSON.parse(response.request.responseText);
            } else {
                resData = response.data;
            }
            return resData;
        }, error => {
            let errorMessage = error.message;
            if (error && error.response) {
                switch (error.response.status) {
                case 400:
                    errorMessage = '错误请求'
                    break;
                case 401:
                    errorMessage = '未授权,请重新登录'
                    break;
                case 403:
                    errorMessage = '拒绝访问'
                    break;
                case 404:
                    errorMessage = '请求错误,未找到该资源'
                    break;
                case 405:
                    errorMessage = '请求方法未允许'
                    break;
                case 408:
                    errorMessage = '请求超时'
                    break;
                case 500:
                    errorMessage = '服务器端出错'
                    break;
                case 501:
                    errorMessage = '网络未实现'
                    break;
                case 502:
                    errorMessage = '网络错误'
                    break;
                case 503:
                    errorMessage = '服务不可用'
                    break;
                case 504:
                    errorMessage = '网络超时'
                    break;
                case 505:
                    errorMessage = 'http版本不支持该请求'
                    break;
                default:
                    errorMessage = error.message
                }
            }
            // Message({
            //     showClose: true,
            //     duration: 5000,
            //     message: errorMessage,
            //     type: "error"
            // })
            return Promise.resolve(error.response);
        })
        // 请求处理
        instance(options).then((res) => {
            resolve(res);
            return false;
        }).catch((error) => {
            reject(error);
        })
    })
}

export default $axios;