<template>
    <div class="activity-card">
        <div class="top">
            <img :src="info.bgUrl" alt="">
        </div>
        <div class="bot">
            <p class="title">{{ info.title }}</p>
            <p class="time">{{ info.time }}</p>
        </div>
    </div>
</template>


<script setup>


const props = defineProps({
    info: {
        type: Object,
        default: () => {}
    }
})

</script>


<style scoped lang="scss">
.activity-card {
    width: 4rem;
    height: 4rem;
    box-shadow: 0 0 .1667rem rgb(227, 227, 227);
    border-radius: .0833rem;
    cursor: pointer;
    .top {
        width: 100%;
        height: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            transition: all .3s;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .bot {
        width: 100%;
        height: 50%;
        padding: .1667rem;
        .title {
            font-size: 0.22rem;
            line-height: 1.5;
        }
        .time {
            font-size: 0.2rem;
            color: grey;
            margin-top: .1667rem;
        }
    }
}
</style>