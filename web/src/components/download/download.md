## Yi-download 下载组件 使用 api

*2019-1-11*

### Attributes 属性

* 参数          说明                    类型         可选值                 默认值

- src           文件路径下载src         String      -----                  ------
- hidden        隐藏内部打印按钮        Boolean     true\false              true
- icon          内部按钮icon图标        String      -------                 ----

### Methods 方法

* 事件名                说明                            参数说明                   其他说明

- pathDownload          文件路径下载方法可外部调用       需要配合 src 属性一起使用    ------
- streamDownload        流媒体下载方法可供外部调用       stream {Blob} 后端程序返回流
                                                       fileName {String} 文件名称  ------

### Event 事件

* 事件名                说明                    回调参数说明                其他说明

- downloadSuccess       下载成功后回调函数      -----------                 ------
- downloadError         下载失败后回调函数      ------------                ------
