import $axios from "./service.util";
import qs from "Qs";

const cardOcr = (data) => {
    return $axios({
        baseURL: window.VUE_CONFIG.api,
        url: "/upload",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000000,
        data: qs.stringify(data)
    })
}
const getExcle = (data) => {
    return $axios({
        baseURL: window.VUE_CONFIG.api,
        url: "/getExcel",
        method: "post",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000000,
        data: qs.stringify(data)
    })
}
export default {
    cardOcr,
    getExcle
}