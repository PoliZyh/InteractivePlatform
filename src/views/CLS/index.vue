<template>
    <div class="cls">
        <div class="cls-l">
            <h2 class="wow fadeInUp">Try Me?</h2>
            <h2 class="wow fadeInUp" style="font-weight: 0.8rem; margin: .3333rem 2rem;">Here!</h2>
        </div>
        <div class="cls-r wow fadeInRight" >
            <h4 class="wow fadeInUp" data-wow-delay="1s">Why not 数潜影?</h4>
            <Man></Man>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import Man from './components/Man.vue'
import WOW from 'wow.js'

const initWOW = () => {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
    })
    wow.init();
}

onMounted(() => {
    initWOW();
})
</script>


<style scoped lang="scss">
.cls {
    height: calc(100vh - $layout-header-height);
    display: flex;
    .cls-l {
        width: 30%;
        height: 100%;
        padding: 12% 5%;
        font-weight: bold;
        color: #306EF2;
        font-weight: 700;
        font-size: 1rem;
    }
    @keyframes show {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .cls-r {
        width: 70%;
        height: 100%;
        background-color: #EBF1FF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // 裁剪
        clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        h4 {
            font-size: 30px;
            font-weight: bold;
        }
    }
}
</style>