import server from "./server";// 主 server
// 合并所有serverApi
const serverApi = { ...server };

const install = Vue => {
    if (install.installed) {
        return
    };
    install.installed = true;

    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return serverApi
            }
        }
    })
}

export default install;