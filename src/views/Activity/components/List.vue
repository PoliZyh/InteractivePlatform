<template>
    <div class="list-box">
        <div class="list-card wow fadeInUp" v-for="(item, index) in list" :style="{
            flexDirection: index % 2 == 0 ? 'row' : 'row-reverse'
        }">
            <div class="card-left">
                <div class="titles">
                    <span>{{ item.title }}</span>
                    <div class="dy" v-if="item.peo">订阅</div>
                </div>
                <div class="c-c">
                    {{ item.content }}
                </div>
                <div class="c-t">
                    <span>{{ item.time }}</span>
                    <span v-if="item.peo">{{ item.peo }}人预约</span>
                </div>
            </div>
            <div class="card-right" :style="{
                backgroundImage: `url(${item.picUrl})`
            }"></div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import WOW from 'wow.js'

const initWOW = () => {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
    })
    wow.init();
}

const props = defineProps({
    list: {
        typeof: Array,
        default: () => []
    }
})

onMounted(() => {
    initWOW()
})

</script>


<style scoped lang="scss">
.list-box {
    width: 100%;
    background-color: white;
    border-radius: .3rem;
    box-shadow: 0 0 10px 0px rgb(228, 228, 228);
    padding: .8667rem .8333rem;

    .list-card {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        border: 1px solid rgba(206, 206, 206, 0.678);
        height: 3.9667rem;
        margin-bottom: .8333rem;
        box-shadow: 0 0 10px rgba(219, 219, 219, 0.903);
        transition: all .3s;
        &:hover {
            scale: 1.1;
        }

        .card-left {
            flex: 5;
            padding: .4333rem;
            height: 100%;
            padding-left: .6rem;
            background-image: url(https://www.gcsis.cn/img/activity_bg1.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            .titles {
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    font-size: .3333rem;
                    font-weight: bold;
                }

                .dy {
                    font-size: .2rem;
                    padding: .093rem .4667rem;
                    background-color: #e6f6f7;
                    color: #00b4bc;
                    border-radius: .1667rem;
                }
            }

            .c-c {
                padding-left: .3333rem;
                margin-top: .5rem;
                font-size: .2rem;
                line-height: 1.7;
                width: 70%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .c-t {
                color: #00b4bc;
                font-size: .2rem;
                margin-top: .6667rem;

                span {
                    font-weight: 500;
                    margin-right: .2667rem;
                }
            }
        }

        .card-right {
            flex: 4;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}</style>