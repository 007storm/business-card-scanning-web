class Particle {
    constructor(ctx, amount, circleColor, circleAlpha, lineColor, width, height){
        this.ctx = ctx;
        this.amount = amount;// 数量
        this.circleColor = circleColor;// 圆的颜色
        this.circleAlpha = circleAlpha;// 圆的透明色度
        this.lineColor = lineColor;// 线条颜色
        this.width = width;// 画布宽
        this.height = height;// 画布高
    }
    // 制作圆
    drawCircle(x, y, r, moveX, moveY){
        let circle = {
            x, y, r, moveX, moveY
        }
        let circleColor = this.colorRgb(this.circleColor);
        this.ctx.fillStyle = `rgba(${circleColor},${this.circleAlpha})`;
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
        this.ctx.closePath();
        this.ctx.fill();
        return circle;
    }
    // 制作线
    drawLine(beginX, beginY, closeX, closeY, opacity){
        this.ctx.beginPath();
        let lineColor = this.colorRgb(this.lineColor);
        this.ctx.strokeStyle = `rgba(${lineColor},${opacity})`;
        this.ctx.moveTo(beginX, beginY);
        this.ctx.lineTo(closeX, closeY);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    // 绘画函数
    moving(circleArr){
        for (let i = 0; i < this.amount; i++){
            circleArr[i].x += circleArr[i].moveX;
            circleArr[i].y += circleArr[i].moveY;
            if (circleArr[i].x > this.width){
                circleArr[i].x = 0;
            } else if (circleArr[i].x < 0) {
                circleArr[i].x = this.width;
            }
            if (circleArr[i].y > this.height){
                circleArr[i].y = 0;
            } else if (circleArr[i].y < 0) {
                circleArr[i].y = this.height;
            }
            this.drawCircle(circleArr[i].x, circleArr[i].y, circleArr[i].r);
        }
        for (let i = 0; i < this.amount; i++){
            for (let j = 0; j < this.amount; j++){
                if (i + j < this.amount){
                    let A = Math.abs(circleArr[i + j].x - circleArr[i].x);
                    let B = Math.abs(circleArr[i + j].y - circleArr[i].y);
                    let lineLength = Math.sqrt(A * A ,B * B);
                    let C = 1 / lineLength * 7 - 0.009;
                    let lineOpacity = C > 0.03 ? 0.03 : C;
                    this.drawLine(circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
                }
            }
        }
    }
    // 随机数函数
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // 16进制颜色转换 rgba
    colorRgb(color){
        let sColor = color.toLowerCase();
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = "#";
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            let sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return `${sColorChange.join(",")}`;
        }
        return sColor;
    }
}

export default Particle;
