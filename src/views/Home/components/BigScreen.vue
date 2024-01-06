<template>
    <div class="bg-screen-box">
        <img v-for="(img, index) in imgs" :key="img" :src="img" alt=""
        :style="{
            'opacity': index == activeIndex ? 1 : 0
        }">
        <div class="logo-box"
        :style="{
            'opacity': activeIndex == 0 ? 1 : 0
        }">
            <img :src="logoUrl" alt="">
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

const logoUrl = 'https://img2023.gcsis.cn/2023/4/5665a82c0b4248d4acb461b93b4ffced.png'

const imgs = ref([
    'https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg',
    'https://img2023.gcsis.cn/2023/7/cf17e6301f9d4035ab0a3066333d5727.jpg',
    'https://img2023.gcsis.cn/2023/5/7422a25f996e4e17aa0e695c241de036.jpeg',
])

const activeIndex = ref(0)


onMounted(() => {
    setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % imgs.value.length
    }, 3000)
})

</script>


<style scoped lang="scss">
.bg-screen-box {
    @include cover;
    position: relative;
    img {
        @include cover;
        transition: opacity 1s ease-in-out;
        position: absolute;
        left: 0;
        top: 0;
    }
    .logo-box {
        width: 30%;
        transition: opacity 0.8s ease-in-out;
        img {
            width: 50%;
            height: 25%;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    }
}
</style>