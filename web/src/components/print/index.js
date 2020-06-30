import YiPrint from './src/main.vue';

YiPrint.install = (Vue) => {
    Vue.component(YiPrint.name, YiPrint);
}

export default YiPrint;