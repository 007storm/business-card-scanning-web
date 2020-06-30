import YiDownload from "./src/main.vue";

YiDownload.install = (Vue) => {
    Vue.component(YiDownload.name, YiDownload);
}

export default YiDownload;