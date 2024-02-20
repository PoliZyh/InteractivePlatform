<template>
    <div class="point-card">
        <div class="card-l">
            <div class="ct">
                <div class="img" :style="{ backgroundImage: `url(${data.bgUrl})` }"></div>
            </div>
        </div>
        <div class="card-r">
            <p class="title">{{ data.title }}</p>
            <p class="content">{{ data.content }}</p>
            <div class="point">
                <span>{{ data.point }}</span>积分
            </div>
        </div>
    </div>
</template>


<script setup>


const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    }
})

</script>


<style scoped lang="scss">
.point-card {
    width: 100%;
    height: 2.6667rem;
    margin-top: .3667rem;
    display: flex;
    flex-wrap: nowrap;
    box-shadow: 0 0 .267rem .0667rem rgba(211, 211, 211, 0.628);
    border-radius: .1667rem;

    .card-l {
        flex: 4.5;
        height: 100%;
        overflow: hidden;
        padding: .25rem;

        .ct {
            overflow: hidden;
            width: 100%;
            height: 100%;
        }

        .img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            transition: all .3s;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .card-r {
        flex: 7;
        height: 100%;
        padding: .3333rem;
        position: relative;

        .title {
            font-size: .2733rem;
            line-height: 1.5;
        }

        .content {
            font-size: 0.2rem;
            line-height: 1.5;
        }

        .point {
            position: absolute;
            bottom: .2667rem;
            span {
                font-size: .2733rem;
                @include linear-txt;
                margin-right: .0833rem;
            }
            font-size: 0.2rem;
        }
    }
}</style>