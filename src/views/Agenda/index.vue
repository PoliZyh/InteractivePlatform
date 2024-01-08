<template>
    <div class="agenda-page">
        <Screen></Screen>
        <div class="agenda-list">
            <h2 class="title">全部会议</h2>
        </div>
    </div>
</template>


<script setup>
import Screen from './components/Screen.vue';


</script>


<style scoped lang="scss">
.agenda-page {
    width: 100%;
    .agenda-list {
        width: 100%;
        padding: 1rem;
        .title {
            width: 100%;
            text-align: center;
            font-size: 0.5rem;
            @include linear-txt;
        }
    }
}
</style>