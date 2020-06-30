/**
 * 公共函数
 */
// import { Message } from "element-ui"  // 弹框组件
import watermark from "./watermark.js";// 水印函数
import { Toast } from 'vant';
import router from "@/router/index";
/**
 * 获取当前时间
 * @param {Date} date 时间对象
 * @param {String} fmt 返回时间的格式 'yyyy-MM-dd hh:mm:ss'
 * @returns {String} 返回 当前日期
 */
const FormatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
    return fmt;
}
/**
 * localstorage 封装
 * @returns {Object} 返回 三个函数
 */
class Localstorage {
    constructor(){
        this.storage = window.localStorage;
        if (!window.localStorage) {
            console.error('浏览器不支持localstorage');
            return false;
        }
    }
    // 存储
    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    get(key){
        let getData = this.storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    clear(key){
        this.storage.removeItem(key);
    }
}

/**
 * Sessionstorage 封装
 * @returns {Object} 返回 三个函数
 */
class Sessionstorage {
    constructor(){
        this.storage = window.sessionStorage;
        if (!window.sessionStorage) {
            console.error('浏览器不支持sessionStorage');
            return false;
        }
    }
    // 存储
    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    get(key){
        let getData = this.storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    clear(key){
        this.storage.removeItem(key);
    }
}
/**
 * Cookie 封装
 * @returns {Object} 返回 三个函数
 */
export class Cookie {
    // 存储
    set(key, value){
        let Days = 1;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
    }
    // 获取
    get(key){
        let arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]); return null;
    }
    // 删除
    clear(key){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.get(key);
        if (cval != null) {
            document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
}

/**
 * Observer 封装
 * @returns {Object} 返回 三个函数
 */
class Observer {
    constructor(){
        this.msgs = Object.create(null);
    }
    // 订阅
    subscribeInfo(type, fn){
        if (typeof this.msgs[type] === "undefined") {
            this.msgs[type] = [fn];
        } else {
            this.msgs[type].push(fn);
        }
    }
    // 发布
    releaseInfo(type, data){
        if (!this.msgs[type]) return;
        let events = {
            type: type,
            data: data || {}
        }
        for (let i = 0; i < this.msgs[type].length; i++) {
            this.msgs[type][i].call(this, events);
        }
    }
    // 删除
    removeInfo(type, fn){
        if (this.msgs[type] instanceof Array) {
            if (fn) {
                for (let i = 0; i < this.msgs[type].length; i++){
                    this.msgs[type][i] === fn && this.msgs[type].splice(i, 1);
                }
            } else {
                this.msgs[type] = [];
            }
        }
    }
}

/**
 * 字节换算
 * @param {Number} limit 文件的字节数
 * @returns {String} 返回 文件大小值
 */
const ByteConversion = (limit) => {
    let size = "";
    if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B
        size = limit.toFixed(2) + "B";
    } else if (limit < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB
        size = (limit / 1024).toFixed(2) + "KB";
    } else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";
    } else { //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    let sizestr = size + "";
    let len = sizestr.indexOf("\.");
    let dec = sizestr.substr(len + 1, 2);
    if (dec == "00") { //当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
}
/**
 * 关闭窗口
 * @param {Function} callback 关闭前回调
 * @param {Number} time 关闭延迟时间
 * @returns {void}
 */
const CloseWindow = (callback, time = 200) => {
    setTimeout(() => {
        callback && callback();
        window.close();
    }, time);
}
/**
 * 数据类型判断
 * @param {Any} data 判断数据的类型
 * @returns {String} type 返回当前数据类型
 */
const GetDataType = data => {
    return Object.prototype.toString.call(data);
}

/**
 * 简单的克隆方法
 * @param {Array|Object} data 要克隆的数据
 * @param {boolean} isDeep 是否要深度克隆
 * @returns {Array|Object} newData 返回克隆后的数据
 */
const CloneSimpleData = (data, isDeep = false) => {
    let newData = ''
    if (!isDeep) {
        if (GetDataType(data) === '[object Object]') {
            newData = Object.assign({}, data);
        } else if (GetDataType(data) === '[object Array]') {
            newData = data.concat()
        }
    } else {
        newData = JSON.parse(JSON.stringify(data))
    }
    return newData;
}

/**
 * 深度拷贝对象
 * @param {Object} obj 拷贝的对象
 * @returns {Object} 返回一个拷贝后的Object对象
 */
const DeepCopy = (obj) => {
    let result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = DeepCopy(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

/**
 * 处理后端返回结果判断
 * @param {Boolean} state 成功状态
 * @param {String} message 信息
 * @returns {Promise} 返回一个 Promise对象
 */
const CodeError = (state, message) => {
    return new Promise((resolve, reject) => {
        if (state === "0000"){
            resolve(message);
        } else {
            if (message){
                Toast.clear();
                Toast(message);
                if (state == "000004") {
                    router.push('/');
                }
            }
            reject(message);
        }
    })
}


const DealNumber = (money) => {
    if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        right = right ? (right.length >= 2 ? '.' + right.substr(0,2) : '.' + right + '0') : '';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join(',').split('').reverse().join('') + right;
    } else if (money === 0) { //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0';
    } else {
        return "";
    }
}


export default {
    FormatDate,
    Localstorage,
    Sessionstorage,
    Cookie,
    Observer,
    ByteConversion,
    CloseWindow,
    GetDataType,
    CloneSimpleData,
    CodeError,
    watermark,
    DeepCopy,
    DealNumber
}