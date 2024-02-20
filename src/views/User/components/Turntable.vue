<template>
    <div class="turntable">
        <div class="t-item" v-for="item in prizes.slice(0, 4)" :key="item">{{ item }}</div>
        <div class="t-item c" style="font-size: 0.35rem;" @click="handleTurn">抽奖</div>
        <div class="t-item" v-for="item in prizes.slice(4, 8)" :key="item">{{ item }}</div>
    </div>
</template>



<script setup>

import { getRandomNumber } from '@/utils/random'

const prizes = [
    '积分+100', '数潜影公仔*1', '自选线下门票*1', '50元优惠券',
    '积分+50', '再来一次', '数潜影连载漫画*1', '积分+200'
]

const handleTurn = () => {
    const cir = getRandomNumber(1, 8)
    luckydraw(cir)
}


function luckydraw(index) {
    let time = 100;
    let initCircle = 0;
    const circle = getRandomNumber(3, 6); //旋转多少圈

    let timerHandle = null;
    let count = 0;
    timerHandle = setInterval(function () {
        const luckydraw = [0, 1, 2, 5, 8, 7, 6, 3];
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active")
        }
        document.querySelectorAll(".t-item")[luckydraw[count]].classList.add("active");
        count++;
        initCircle++;
        if (count >= 8) {
            count = 0;
        }
        if (initCircle >= circle * 8 + index) {
            clearInterval(timerHandle)
        }
    }, time)
}



</script>


<style scoped lang="scss">
.turntable {
    width: 7.6667rem;
    height: 7.6667rem;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: .8333rem;
    border: .0167rem solid $theme-color-green;

    .t-item {
        width: calc(100% / 3);
        height: calc(100% / 3);
        display: flex;
        justify-content: center;
        align-items: center;
        border: .0167rem solid $theme-color-green;
    }

    .c {
        background-color: $theme-color-green;
        color: white;
        cursor: pointer;
    }

    .active {
        background-color: $theme-color-green;
        color: white;
        border: .0167rem solid white;
    }
}
</style>