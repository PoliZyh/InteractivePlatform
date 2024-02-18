<template>
    <div class="clock-in-page">
        <!-- 打卡 -->
        <div class="box">
            <video style="width: 600px; height: 500px;"  src="" ref="videoRef" autoplay muted @play="handlePlay"></video>
        </div>
        <button class="btn">点我打卡</button>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import * as faceapi from 'face-api.js';

const videoRef = ref(null);
const MODEL_PATH = '/models'
const LOGO_PATH = '/logo.png'
const MASK_PATH_1 = '/imgs/m-1.png'
const MASK_PATH_2 = '/imgs/m-2.png'

const getCamera = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            // audio: false
        });
        videoRef.value.srcObject = mediaStream;
    } catch (error) {
        console.log(error)
    }
}

const loadModels = async () => {
    await faceapi.loadTinyFaceDetectorModel(MODEL_PATH)
    await faceapi.loadFaceLandmarkTinyModel(MODEL_PATH)
    await faceapi.loadFaceExpressionModel(MODEL_PATH)
    await faceapi.loadAgeGenderModel(MODEL_PATH)
    getCamera();
}

// 人脸检测
const detectFace = async () => {
    const cn = faceapi.createCanvasFromMedia(videoRef.value);
    const ctx = cn.getContext('2d');
    // cn.style.width = '600px'
    // cn.style.height = '500px'
    cn.style.position = 'absolute'
    cn.style.top = '0'
    cn.style.left = '0'
    cn.style.zIndex = '1'
    const { width, height } = videoRef.value;
    document.getElementsByClassName('box')[0].append(cn);
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(videoRef.value, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions().withAgeAndGender();
        const resizedDetections = faceapi.resizeResults(detections, { width: 600, height: 500 });

        ctx.clearRect(0, 0, 1000, 1000);
        

        detections.forEach(detection => {
            // console.log(detection)
            const overlayImage = new Image();
            const leftX = detection.alignedRect.box.x;
            const targetWidth = detection.alignedRect.box.width * 1.2
            const targetHeight = detection.alignedRect.box.height * 0.3
            overlayImage.src = LOGO_PATH; 
            overlayImage.onload = () => {
                ctx.drawImage(overlayImage, leftX + targetWidth, detection.alignedRect.box.y, detection.alignedRect.box.width * 1.2, detection.alignedRect.box.height * 0.3);
            };
            // 贴面具
            if (detection.age > 17) {
                const maskImage1 = new Image();
                maskImage1.src = MASK_PATH_1;
                maskImage1.onload = () => {
                    ctx.drawImage(maskImage1, detection.alignedRect.box.x - 30, detection.alignedRect.box.y - 20, detection.alignedRect.box.width * 1.2, detection.alignedRect.box.height * 1.2)
                }
            } else {
                const maskImage2 = new Image();
                maskImage2.src = MASK_PATH_2;
                maskImage2.onload = () => {
                    ctx.drawImage(maskImage2, detection.alignedRect.box.x - 30, detection.alignedRect.box.y - 20, detection.alignedRect.box.width * 1.2, detection.alignedRect.box.height * 1.2)
                }
            }
        })

        faceapi.draw.drawDetections(cn, resizedDetections);
        faceapi.draw.drawFaceLandmarks(cn, resizedDetections);
        faceapi.draw.drawFaceExpressions(cn, resizedDetections);

        // resizedDetections.forEach(result => {
        //     const { age, gender, genderProbability } = result
        //     new faceapi.draw.DrawTextField([
        //         `${--age} years`,
        //         `${gender} {${genderProbability.toFixed(1)}}`
        //     ], result.detection.box.bottomLeft).draw(cn)
        // })
    }, 300)
}

const handlePlay = async () => {
    detectFace();
}

onMounted(async () => {
    await loadModels()
})

</script>


<style scoped lang="scss">
.clock-in-page {
    @include cover;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    background-image: url(https://www.gcsis.cn/img/live_bg.jpg);
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 9vh;
    .btn {
        position: absolute;
        background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
        color: white;
        border: none;
        padding: .1667rem .3333rem;
        border-radius: .1167rem;
        bottom: 20vh;
        left: 50%;
        cursor: pointer;
    }
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
    }
}
</style>