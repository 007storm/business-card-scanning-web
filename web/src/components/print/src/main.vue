<template>
    <div class="yi-print">
        <slot></slot>
        <div v-if="hidden">
            <slot name="ButtonName"></slot>
        </div>
    </div>
</template>

<script>
import Print from './print.js';
export default {
    name: 'YiPrint',
    props: {
        title: {// 打印的标题
            type: String,
            default: ''
        },
        printHTML: {// 打印的HTML
            type: String,
            default: ''
        },
        hidden: {// 隐藏内部打印按钮
            type: Boolean,
            default: true
        },
        icon: {// icon 展示
            type: String,
            default: ''
        }
    },
    data () {
        return {
            printing: null
        }
    },
    methods: {
        print(data){
            this.printing = new Print(data);
            this.printing.print(this.title);
        }
    }
}
</script>

<style>
    .yi-print {
        display: inline-block;
    }
</style>
