<template>
    <div class="clock-in-page">
        <!-- 打卡 -->
        <video src="" ref="videoRef" autoplay muted></video>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

const videoRef = ref(null);

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

onMounted(() => {
    getCamera();
})

</script>


<style scoped lang="scss">
.clock-in-page {
    @include cover;
}
</style>