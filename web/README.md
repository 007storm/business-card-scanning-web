# Vue-Cli

## 项目拉取相关node包
```
npm install / cnpm install

```

### 项目运行
```
npm run serve

```

### 项目打包
```
npm run build

```
### 相关插件/框架的版本

- vue-cli           3.1.3
- vue               2.6.10
- vue-router        3.0.3
- vuex              3.0.1 
- axios             0.19.0
- element           2.9.1
- echarts           4.2.1

### git 版本

- master            0.0.0.0   主分支

### src 项目相关文件介绍

- assets        --- 静态文件(包括 icon、公共部分images: logo.png)
- components    --- 公共组件库(全局组件)
- dictionary    --- 字典表
- directive     --- 全局指令库
- filters       --- 全局管道(过滤器)
- router        --- 路由
- service       --- axios 服务请求封装
- store         --- Vuex (包括命名空间)
- styles        --- 公共样式、主体样式、打印样式
- utils         --- 工具库(包括公共函数库等...)
- views         --- 视图层

### 视图层 - 组件拆分详情介绍

- 公共视图 --- Layout
    \_ components -- 视图层封装组件（包括：导航、菜单、内容区）
    \_ Layout.vue -- 公共视图组件
    \_ Layout.css -- 公共视图组件相关所有样式

- 公共功能组件 --- components （注意：公共功能组件不涉及业务相关代码）
    \_ echartsComponent -- echarts库的组件封装