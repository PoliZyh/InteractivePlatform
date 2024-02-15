<template>
    <div class="progress-box">
        <div class="progress-item" v-for="item in props.data">
            <div class="progress-l">
                <div class="p-cir"></div>
                <div class="p-line"></div>
            </div>
            <div class="progress-r">
                <div class="p-t">{{ item.time }}</div>
                <div class="p-title">{{ item.title }}</div>
                <div class="p-c" v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>


<script setup>

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

</script>


<style scoped lang="scss">
.progress-box {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: white;
    .progress-item {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: .2333rem;
        .progress-l {
            width: 10%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .p-cir {
                width: .2333rem;
                height: .2333rem;
                background-color: white;
                border: 0.02rem solid $theme-color-green;
                border-radius: 50%;
            }
            .p-line {
                height: calc(100% - .2333rem);
                width: .0233rem;
                background-color: $theme-color-green;
            }
        }
        .progress-r {
            width: 90%;
            .p-t {
                font-size: 0.2rem;
                line-height: 1.5;
            }
            .p-title {
                font-size: 0.22rem;
                line-height: 1.8;
            }
            .p-c {
                font-size: 0.18rem;
                line-height: 1.6;
                color: grey;
            }
        }
    }
}
</style>