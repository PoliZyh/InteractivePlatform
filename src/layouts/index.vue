<template>
    <div class="layout-box">
        <div class="header">
            <Header></Header>
        </div>
        <div class="main">
            <Main></Main>
        </div>
    </div>
</template>



<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
</script>


<style scoped lang="scss">
.layout-box {
    @include cover;
    .main {
        width: 100%;
        height: calc(100vh - $layout-header-height);
        min-height: calc(100vh - $layout-header-height);
    }
}
</style>