<template>
    <div class="exhibitions-box">
        <div class="container">
            <div class="box-item box-l">
                <h1 class="wow fadeInLeft">AR展厅</h1>
            </div>
            <div class="box-item box-r">
                <h1 class="wow fadeInRight">虚拟数字展厅</h1>
            </div>
        </div>
        <!-- 核心 -->
        <img src="../../../assets/images/logo.png" class="logo">
        <!-- 装饰 -->
        <div class="outline"></div>
        <div class="inline"></div>
        <div class="decoration-cir cir-r"></div>
        <div class="decoration-cir cir-l"></div>
    </div>
</template>



<script setup>
import WOW from 'wow.js'
import { onMounted } from 'vue';

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
    initWOW()
})

</script>


<style scoped lang="scss">
.exhibitions-box {
    width: 100%;
    min-height: calc(100vh - $layout-header-height);
    height: calc(100vh - $layout-header-height);
    position: relative;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
    }
    .logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all .3s;
        width: 260px;
        height: 58px;
    }
    .logo:hover {
        width: 290px;
        height: 68px;
    }
    
    .outline {
        position: absolute;
        width: 15rem;
        height: 15rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border: .0333rem solid $theme-color-green;
        border-radius: 50%;
    }
    .inline {
        position: absolute;
        width: 8rem;
        height: 8rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        border: .0333rem solid rgb(177, 192, 202);
        border-radius: 50%;
    }
    .box-item {
        flex: 1;
        height: 100%;
        display: flex;
        padding: 5%;
        h1 {
            font-size: 0.8rem;
            @include linear-txt;
        }
    }
    .line {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: $theme-color-green;
        left: 0;
        top: 0;
        clip-path: polygon(calc(100% - .5rem) 0%, 0% calc(100% - .5rem), .5rem 100%, 100% .5rem);
        .line-top {
            width: 50%;
            height: 100%;
            background-color: $theme-color-green;
        }
    }
    .box-l {
        flex-direction: column;
    }
    .box-r {
        flex-direction: column-reverse;
        h1 {
            text-align: end;
        }
    }

    .decoration-cir {
        position: absolute;
        width: 3.3333rem;
        height: 3.3333rem;
        z-index: 100;
    }

    .cir-r {
        top: 0;
        right: 0;
        background: radial-gradient($theme-color-green .2667rem, $theme-color-blue );
        border-radius: 0 0 0 3.3333rem;
    }

    .cir-l {
        bottom: 0;
        left: 0;
        background: radial-gradient($theme-color-blue .4667rem, $theme-color-green);
        border-radius: 0 3.3333rem 0 0;
    }
}</style>