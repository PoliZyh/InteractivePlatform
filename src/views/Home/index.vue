
<template>
    <div class="home-page">
        <div class="bg-screen">
            <BigScreen></BigScreen>
        </div>
        <div class="sc-screen">
            <ScrollScreen></ScrollScreen>
        </div>
    </div>
</template>

<script setup>
import BigScreen from './components/BigScreen.vue';
import ScrollScreen from './components/ScrollScreen.vue';

</script>

<style scoped lang="scss">
.home-page {
    @include cover;
    .bg-screen {
        height: calc(100vh - $layout-header-height);
        width: 100%;
    }
    .sc-screen {
        width: 100%;
    }
}
</style>
