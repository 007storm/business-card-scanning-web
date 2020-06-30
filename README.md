

#                                                                      																	名片扫描v1.0

​	

# 简介

名片扫描app是一款：OCR文字识别工具，由图像输入、预处理、文本检测、文本识别、结果输出等环节组成，以该技术为基础可对纸质名片、名片图像进行扫描，获取数据化的文字信息，并进行分类和录入。

## 功能

```bash
拍照识别、相册导入识别、保存通讯录、生成exl文件，下载到手机目录。
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和vsual studio code。
本项目技术栈基于ES6、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)、vantUI、[cordova](http://cordova.axuer.com/) 

## 开发

```
# 克隆项目
git https://github.com/007storm/business-card-scanning-web.git

# 进入到项目
cd web

# 安装依赖包
npm/cnpm install

#安装cordova

参考官网安装方式 http://cordova.axuer.com/docs/zh-cn/latest/guide/cli/index.html
```

## 创建web app
```
#前端打包

npm run build

将dist文件夹放到cordova的www里

#cordova打包

   先创建安卓/ios包

   cordova platform add android或ios  --save

```

## 构建app
```
#打包成app

安卓 cordova build android

ios cordova build ios

**这里注意config在ios 端名称必须为英文

```

## 其他
```
#安卓依赖

安卓依赖环境变量可以看一下

目前开发sdk使用 Android Studio 

#ios依赖

xcode 和appid
```

