<template>
    <canvas class="canvas" :id="canvasId"></canvas>
</template>

<script>
import Particle from "./particle.js"
export default {
    name: "YiParticle",
    props: {
        canvasId: {// 用于标识 canvas元素 id
            type: String,
            default: 'particle'
        },
        amount: {// 粒子数量 不能超过100
            type: Number,
            default: 30,
            validator: (value) => {
                return value <= 100;
            }
        },
        circleColor: {// 圆点的颜色 16进制色
            type: String,
            default: '#579adc',
            validator: (value) => {
                let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                return reg.test(value);
            }
        },
        circleAlpha: {// 圆点透明色深度
            type: Number,
            default: 0.8,
            validator: (value) => {
                return value >= 0 && value <= 1;
            }
        },
        lineColor: {// 线的颜色 16进制色
            type: String,
            default: '#579adc',
            validator: (value) => {
                let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                return reg.test(value);
            }
        },
        position: {// 画布定位
            type: String,
            default: 'parent',
            validator: (value) => {
                return ['parent', 'body'].indexOf(value) !== -1;
            }
        },
        mode: {// 手动、非手动执行初始化函数
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            ctx: null,// 画布
            particleObject: null,//画布封装对象
            circleArr: [],// 圆存储对象
            canvasWidth: null,// 画布的宽
            canvasHeight: null,// 画布的高
            timer: null// 定时器
        }
    },
    methods: {
        // 粒子初始化函数
        particleInit(){
            let particle = document.getElementById(this.canvasId);
            this.ctx = particle.getContext('2d');
            // 画布定位
            if (this.position == 'parent'){
                this.canvasWidth = particle.parentNode.offsetWidth;
                this.canvasHeight = particle.parentNode.offsetHeight;
            } else if (this.position == 'body') {
                this.canvasWidth = document.body.offsetWidth;
                this.canvasHeight = document.body.offsetHeight;
            }
            particle.width = this.canvasWidth;
            particle.height = this.canvasHeight;
            this.particleObject = new Particle(this.ctx, this.amount, this.circleColor, this.circleAlpha, this.lineColor, this.canvasWidth, this.canvasHeight);
            for (let i = 0; i < this.amount; i++){
                this.circleArr.push(this.particleObject.drawCircle(
                    this.particleObject.random(0, this.canvasWidth),
                    this.particleObject.random(0, this.canvasHeight),
                    this.particleObject.random(2, 15),
                    this.particleObject.random(-10 ,10) / 40,
                    this.particleObject.random(-10, 10) / 40
                ));
            }
            this.animate();
        },
        // 定时器函数
        animate(){
            this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
            this.particleObject.moving(this.circleArr);
            this.timer = requestAnimationFrame(this.animate);
        },
        // 手动触发粒子背景组件
        modeClick(){
            if (this.mode){
                this.particleInit();
            } else {
                console.error("this.mode is 'false'");
            }
        },
        // 重新绘画
        refreshDrawing(){
            this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
            cancelAnimationFrame(this.timer);
            setTimeout(() => {
                this.particleInit();
            }, 0);
        }
    },
    mounted(){
        if (!this.mode){
            this.particleInit();
        }
    }
}
</script>

<style scoped>
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
</style>
