<template>
    <div class="yi-download">
        <van-button plain size="small" @click.stop="download(data)">
            <i :class="icon"></i>
            <slot name="ButtonName">
                <span>下载</span>
            </slot>
        </van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'YiDownload',
    props: {
        src: {
            type: String,
            default: ""
        },
        icon: {// icon 展示
            type: String,
            default: ''
        },
        data: Object
    },
    methods: {
        download(data) {
            this.$api.downloadFile(data.appendixUrl).then((res) => {
                this.streamDownload(res, data.appendixName);
            })
        },
        // a 标签路径下载
        pathDownload(){
            if (this.src.length == 0){
                console.error('src is null 路径不能为空');
            } else {
                let a = document.createElement('a');
                a.style.display = 'none';
                a.href  = this.src;
                a.click();
                this.$emit('downloadSuccess');
            }
        },
        // 流媒体下载
        streamDownload(stream, fileName){
            if (stream && stream.byteLength != 0){
                if (window.navigator.msSaveOrOpenBlob){
                    navigator.msSaveOrOpenBlob(new Blob([stream]), `${fileName}`);
                } else {
                    let blob = new Blob([stream]);
                    let a = document.createElement('a');
                    a.href = window.URL.createObjectURL(blob);
                    a.download = `${fileName}`;
                    a.click();
                }
                this.$emit('downloadSuccess');
            } else {
                Toast.fail('下载失败，请稍后重试');
                this.$emit('downloadError');
            }
        }
    }
}
</script>

<style>
    .yi-download {
        display: inline-block;
    }
    .yi-download .van-button {
        border: none;
        color: #3f5cea;
    }
    .yi-download .van-button::after {
        content: ";";
    }
</style>

