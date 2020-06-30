## Yi-Particle 粒子背景组件 使用 api

*2019-1-6*

### Attributes 属性

* 参数          说明                    类型         可选值                 默认值
- canvasId      用于标识 canvas元素id   String       ------                 particle
- amount        粒子数量(不能超过100)   Number       ------                 30
- circleColor   圆点的颜色(16进制)      String       ------                 #579adc
- circleAlpha   圆点透明色深度          Number       ------                 0.8
- lineColor     线的颜色(16进制)        String       ------                 #579adc
- position      画布定位                String      'parent'||'body'        parent
- mode          标识粒子背景组件自触发   Boolean      true || false          false
                还是手动触发

### Methods 方法

* 事件名                说明                    回调参数说明                其他说明
- modeClick         只有参数 mode 为true时      ----------                 --------
                    才会触发本事件
- refreshDrawing    重新绘画(刷新画布)          -----------                 --------



