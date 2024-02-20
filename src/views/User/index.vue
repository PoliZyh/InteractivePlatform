<template>
    <div class="user-info">
        <div class="bg">
            <h4>个人中心</h4>
        </div>
        <div class="content">
            <div class="user">
                <p class="name">oVO</p>
                <div class="status">线上观众</div>
                <div class="user-item" style="margin-top: 1rem;">
                    <div class="user-title">我的积分</div>
                    <div class="icons user-con">
                        <svg t="1708350411474" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2882" width="32" height="32">
                            <path
                                d="M1017.6 211.2C992 89.6 780.8 0 512 0S32 89.6 6.4 211.2C0 217.6 0 230.4 0 236.8L0 512l0 256c0 0 0 6.4 0 6.4 0 6.4 0 6.4 0 12.8C0 921.6 217.6 1024 512 1024s512-102.4 512-236.8c0-6.4 0-6.4 0-12.8 0 0 0-6.4 0-6.4L1024 512 1024 236.8C1024 230.4 1024 217.6 1017.6 211.2zM960 665.6l0 44.8 0 25.6 0 51.2c0 6.4 0 6.4 0 12.8-19.2 76.8-198.4 160-448 160s-428.8-83.2-448-160c0-6.4 0-6.4 0-12.8l0-51.2 0-25.6 0-44.8L64 627.2C70.4 640 76.8 640 89.6 646.4c12.8 6.4 19.2 12.8 32 19.2 12.8 6.4 25.6 12.8 32 19.2 51.2 25.6 115.2 38.4 179.2 51.2C390.4 742.4 448 748.8 512 748.8s121.6-6.4 179.2-12.8c70.4-12.8 128-25.6 179.2-51.2 12.8-6.4 25.6-12.8 32-19.2 12.8-6.4 19.2-12.8 32-19.2C947.2 640 953.6 640 960 627.2L960 665.6zM960 396.8l0 44.8L960 512c0 32-32 70.4-89.6 102.4-12.8 6.4-25.6 12.8-38.4 19.2-12.8 6.4-32 12.8-51.2 19.2-70.4 19.2-166.4 38.4-268.8 38.4s-198.4-12.8-268.8-38.4C224 646.4 211.2 640 192 633.6 179.2 627.2 166.4 620.8 153.6 614.4 96 582.4 64 544 64 512L64 441.6 64 396.8 64 358.4c6.4 6.4 12.8 12.8 25.6 19.2C96 384 108.8 390.4 121.6 396.8 128 396.8 140.8 403.2 153.6 409.6c89.6 38.4 217.6 64 358.4 64s268.8-25.6 358.4-64c12.8-6.4 25.6-12.8 32-19.2 12.8-6.4 19.2-12.8 32-19.2 6.4-6.4 19.2-12.8 25.6-19.2L960 396.8zM953.6 256c-6.4 32-38.4 57.6-89.6 83.2-12.8 6.4-25.6 12.8-38.4 19.2-12.8 6.4-32 12.8-51.2 19.2C710.4 396.8 614.4 409.6 512 409.6S313.6 396.8 243.2 377.6C224 371.2 211.2 364.8 192 358.4 179.2 352 166.4 345.6 153.6 339.2 108.8 313.6 76.8 288 70.4 256 64 249.6 64 243.2 64 236.8 64 224 70.4 204.8 83.2 192 134.4 128 294.4 64 512 64s377.6 64 428.8 128C953.6 204.8 960 224 960 236.8 960 243.2 960 249.6 953.6 256z"
                                p-id="2883"></path>
                        </svg>
                        <p>800</p>
                    </div>
                </div>
                <div class="user-item">
                    <div class="user-title">公司</div>
                    <div class="user-con">安恒科技</div>
                </div>
                <div class="user-item">
                    <div class="user-title">部门</div>
                    <div class="user-con">宣传部</div>
                </div>
                <div class="user-item">
                    <div class="user-title">职位</div>
                    <div class="user-con">开发工程师</div>
                </div>
                <div class="user-item">
                    <div class="user-title">联系电话</div>
                    <div class="user-con">15336521727</div>
                </div>
                <div class="user-item">
                    <div class="user-title">邮箱</div>
                    <div class="user-con">272798802@qq.com</div>
                </div>
                <button class="btn">修改资料</button>
            </div>
            <div class="more">
                <div class="nav">
                    <div class="nav-item" :class="activeClass(0)" @click="activeNav = 0">我的订阅</div>
                    <div class="nav-item" :class="activeClass(1)" @click="activeNav = 1">我的积分</div>
                </div>
                <div class="swichs">
                    <div class="s_1 s" v-if="activeNav === 0">
                        <div class="my-sub">活动订阅</div>
                        <div class="activitys">
                            <div class="ac-con" v-for="item in activities" :key="item.bgUrl">
                                <ActivityCard :info="item"></ActivityCard>
                            </div>
                        </div>
                    </div>

                    <div class="s_2 s" v-if="activeNav === 1">
                        <div class="db-nav">
                            <div class="db-item" :class="activeDbClass(0)"  @click="debActiveNav = 0">积分规则</div>
                            <div class="db-item" :class="activeDbClass(1)"  @click="debActiveNav = 1">积分消费</div>
                        </div>
                        <div class="db-swich">
                            <Rule v-if="debActiveNav === 0"></Rule>
                            <div v-if="debActiveNav === 1">
                                <div class="d-s-item">
                                    <p class="d-s-t">积分抽奖</p>
                                    <Turntable></Turntable>
                                </div>
                                <div class="d-s-item">
                                    <p class="d-s-t">积分兑换</p>
                                    <PointCard v-for="p in pointData"
                                    :data="p"
                                    :key="p.title"></PointCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import ActivityCard from './components/ActivityCard.vue'
import Rule from './components/Rule.vue'
import Turntable from './components/Turntable.vue';
import PointCard from './components/PointCard.vue';

const activeNav = ref(0)
const activities = ref([
    {
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/564f5dbf1157432b9ed70c338012642a.png',
        title: '格致论道@西湖论剑',
        time: '2023-05-05 18:30 - 21:45 '
    }
])
const debActiveNav = ref(0)
const pointData = ref([
    {
        title: '2021年成都大运会赛事门票',
        content: '2021年成都大运会赛事门票',
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg',
        point: 25000
    },
    {
        title: '2022年杭州第19届亚运会赛事门票',
        content: '2022年杭州第19届亚运会赛事门票',
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/014a39c8a5c440ccbb9549db8bb8c0af.jpg',
        point: 30000
    }
])

const activeClass = (index) => {
    if (index === activeNav.value) {
        return 'nav-active'
    }
}

const activeDbClass = (index) => {
    if (index === debActiveNav.value) {
        return 'nav-active'
    }
}

</script>



<style scoped lang="scss">
.user-info {
    width: 100%;
    background-color: #f7f9fc;
    padding-bottom: 1.6667rem;

    .bg {
        height: 28vh;
        width: 100%;
        background-image: url(https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/7a0f1a8a401a4672a02783624f245507.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        h4 {
            color: white;
            position: absolute;
            top: 20%;
            font-size: .55rem;
            left: 10%;
            font-weight: bold;
        }
    }

    .nav-active {
        @include linear-txt;
    }

    .s_2 {
        width: 100%;
        .db-swich {
            width: 100%;
            padding: .1667rem;
            .d-s-item {
                margin-top: .6667rem;
                .d-s-t {
                    font-size: .3rem;
                    font-weight: bold;
                }
            }
        }

        .db-nav {
            width: 100%;
            padding: .1667rem;
            display: flex;

            .db-item {
                font-size: .3rem;
                padding: 0 .2167rem;
                cursor: pointer;
            }
        }
    }

    .content {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.6667rem;
        display: flex;

        .user {
            padding: .8333rem;
            width: 30%;
            border: .0167rem solid rgb(228, 228, 228);
            box-shadow: 0 0 .1667rem rgba(236, 236, 236, 0.807);
            border-radius: .1667rem;
            transform: translateY(-2.667rem);
            background-color: white;

            .btn {
                background-color: white;
                margin-top: .6667rem;
                border: none;
                background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
                color: white;
                cursor: pointer;
                font-size: 0.23rem;
                padding: .0733rem .2rem;
                border-radius: .0833rem;
            }

            .name {
                font-size: 0.35rem;
                font-weight: bold;
            }

            .status {
                margin-top: .1333rem;
                font-size: 0.17rem;
                background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
                width: fit-content;
                padding: .1rem .1967rem;
                color: white;
                border-radius: 1rem;
            }

            .user-item {
                margin-top: .3333rem;

                .user-title {
                    color: grey;
                    font-size: 0.2rem;
                }

                .icons {
                    display: flex;
                    align-items: center;
                    font-size: 0.5rem !important;
                    font-weight: 500;
                    gap: .25rem;
                }

                .user-con {
                    margin-top: .25rem;
                    font-size: 0.3rem;
                }
            }
        }

        .more {
            width: 70%;
            margin-left: .5rem;

            .nav {
                width: 100%;
                background-color: white;
                padding: .3333rem;
                display: flex;

                .nav-item {
                    padding: .3333rem;
                    font-size: 0.35rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.5s;
                }

            }

            .swichs {
                width: 100%;
                margin-top: .3333rem;
                background-color: white;
                padding: .5rem;

                .s_1 {
                    .my-sub {
                        font-size: 0.3rem;
                        width: fit-content;
                        border-bottom: .0333rem solid rgb(92, 92, 92);
                        padding-bottom: .0833rem;
                    }

                    .activitys {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;

                        .ac-con {
                            padding: .6667rem;
                        }
                    }
                }
            }
        }
    }
}</style>