const Timestamp = new Date().getTime();
module.exports = {
    // 基础配置
    publicPath: '',// 基本路径 [Type:String, Default: '/']
    outputDir: 'dist',// 输出文件目录 [Type:String, Default: 'dist']
    assetsDir: '',// 静态资源目录(js、css、img、fonts) [Type:String, Default: '']
    lintOnSave: true,// 是否开启eslint代码检查 [Type:Boolean, Default: true]
    productionSourceMap: false,// 是否开启 source map [Type:Boolean, Default: true]
    // 开发配置
    devServer: {
        open: false,// 是否启动开启浏览器 [Type:Boolean, Default: false]
        host: '',// 主机ip [Type:String, Default: ''] 说明: 默认为空 '' 域名是当前本机内网ip
        port: 8080,// 端口号 [Type:Number, Default: 8080]
        https: false,// 是否实用 https 协议 [Type:Boolean, Default: false]
        hotOnly: false,// 是否开启热更新 [Type:Boolean, Default: false] 说明: webpack 已经为 cli 实现热更新
        // proxy: {// 跨域配置
        //     '/api': {
        //         target: '',// 请求 ip 地址
        //         ws: true,// 是否开启跨域
        //         changeOrigin: true,// 跨域开启 说明: 改变请求 ip 地址 变成本地 ip
        //         pathRewrite: {// 请求路径重命名
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    // 入口配置
    pages: {
        index: {
            entry: 'src/main.js',// main.js 入口文件路径配置
            template: 'public/index.html',// 主 html 文件
            filename: 'index.html'// build 输出 主 html 文件名字
        }
    },
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
        }
    }
}