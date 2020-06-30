import YiPrint from './print/index.js';// 打印组件
import YiParticle from "./particle/index.js";// 粒子组件
import YiDownload from "./download/index.js";// 下载（导出）组件
const components = [
    YiPrint,
    YiParticle,
    YiDownload
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    YiPrint,
    YiParticle,
    YiDownload
}