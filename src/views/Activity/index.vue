<template>
    <div class="activity-page">
        <h1>精彩活动</h1>
        <el-button @click="router.push({name: 'clock-in'})">打卡</el-button>
        <el-button @click="router.push({name: 'clock-in-hand'})">打卡</el-button>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();


</script>


<style scoped lang="scss">
.activity-page {
    
}
</style>