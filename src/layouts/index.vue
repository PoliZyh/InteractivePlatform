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
}
</style>