import YiParticle from "./src/main.vue";

YiParticle.install = (Vue) => {
    Vue.component(YiParticle.name, YiParticle);
}

export default YiParticle;