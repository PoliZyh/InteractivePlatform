<template>
    <div class="agenda-live">
        <div class="l-bg">
            <Live></Live>
        </div>
    </div>
</template>


<script setup>
import Live from './components/Live.vue';


</script>


<style scoped lang="scss">
.agenda-live {
    width: 100%;
    .l-bg {
        background: url(https://www.gcsis.cn/img/live_bg.jpg);
        background-size: cover;
    }
}
</style>