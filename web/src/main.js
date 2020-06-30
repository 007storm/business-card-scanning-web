import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import YIUI from "./components/index"; // YIUI（全局公共组件）
import "./styles/reset.css";
import "./styles/main.css";
import "./assets/icon/iconfont.css";
import router from './router/index';
import store from './store/index';
import $service from "./service/index";
import $directive from './directive/index';
import $filters from './filters/index';
import dictionaries from "./dictionary/index";
import $Fn from './utils/public';
// import AppMixin from "./mixins/index"; // 全局混入（非必须使用）

Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.use($service);// 使用 axios 封装服务
Vue.use(Vant); // 使用 Vant ui库
Vue.use(YIUI);// 自定义封装 name: YIUI
Vue.use($directive);// 使用全局自定义指令
Vue.use($filters);// 使用全局自定义管道(过滤器)
// Vue.mixin(AppMixin);// 使用全局 混入
Vue.prototype.$Fn = $Fn;// 全局公共函数
Vue.prototype.$dictionaries = dictionaries;// 全局字典表

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
