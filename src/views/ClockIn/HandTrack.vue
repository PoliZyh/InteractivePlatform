<template>
    <div class="hand-track-box">
        <div class="box">
            <video style="width: 600px; height: 500px;"  ref="videoRef" autoplay muted @play="handlePlay"></video>
            <canvas ref="cn"></canvas>
            <img :src="LOGO_PATH" alt="" 
            v-if="handPosition"
            :style="{
                left: handPosition[0] - handPosition[2] / 3 + 'px',
                top: handPosition[1] + handPosition[3] / 2 + 'px',
            }">
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
// import * as handTrack from 'handtrackjs';

const videoRef = ref(null);
const cn = ref(null);
const LOGO_PATH = '/logo.png'
let handPosition = ref(null);

let model;
let ctx

navigator.mediaDevices.getUserMedia = 
    navigator.mediaDevices.getUserMedia ||
    navigator.getUserMedia ||
    navigator.mediaDevices.webkitGetUserMedia ||
    navigator.mediaDevices.mozGetUserMedia;


const handleDetection = () => {
    model.detect(videoRef.value).then(predictions => {
        console.log(predictions)
        ctx.clearRect(0, 0, cn.value.width, cn.value.height);
        let res = []
        // model.renderPredictions(predictions, cn.value, ctx, videoRef.value);

        predictions.forEach(item => {
            console.log(item.label)
            if (item.label != 'face') {
                res.push(item)
                
            }
        })
        // model.renderPredictions(res, cn.value, ctx, videoRef.value);
        if (res.length > 0) {
            handPosition.value = res[0].bbox;
        } else {
            handPosition.value = null;
        }

    })
    requestAnimationFrame(handleDetection);
}

const drawHandImage = (bbox, handImage) => {
  // 在手的位置绘制图片
  ctx.drawImage(handImage, bbox[0], bbox[1], bbox[2], bbox[3]);
  console.log(handImage)
};

const startVideo = () => {
    handTrack.startVideo(videoRef.value).then((status = {}) => {
        if (status.status) {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then( stream => {
                videoRef.value.srcObject = stream;
                handleDetection()
            })
        }
    })
}

onMounted(async () => {
    console.log(handTrack)
    ctx = cn.value.getContext('2d');
    model = await handTrack.load();
    startVideo()
})

</script>


<style scoped lang="scss">
.hand-track-box {
    @include cover;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    .box {
        width: 600px;
        height: 500px;
        position: relative;
        // overflow: hidden;
        video {
            width: 100%;
            height: 100%;
        }
        canvas {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
        }
        img {
            position: absolute;
            z-index: 1000;
        }
    }
}

</style>