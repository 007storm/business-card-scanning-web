## Yi-Print 打印组件 使用 api

*2019-1-11*

### Attributes 属性

* 参数          说明                    类型         可选值                 默认值

- title         打印页面的title展示     String        ----                  -----
- printHTML     打印的数据内容          String       -----                  -----
- hidden        隐藏内部打印按钮        Boolean     true\false              true
- icon          内部按钮icon图标        String      -------                 ----

### Methods 方法

* 事件名                说明                    回调参数说明                其他说明

- print                 打印执行方法            ----------                  ------

### 注意事项

1. 内部实现样式获取方法是需要在 <style></style>元素内部添加 @media print{} 在媒体内部写样式只针对与打印样式 （打印样式需要单独一个 style元素 或者单独的 css 文件）

2. 打印组件支持 slot 内部dom打印 如果传入 printHTML 属性 内部 slot元素失效

3. 不支持多条打印（后期可迭代扩展此方法,不影响其他方法代码）
