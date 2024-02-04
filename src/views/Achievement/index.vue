<template>
    <div class="achievement-page">
        <div class="screen">
            <h1 class="wow fadeInLeft">成果发布</h1>
            <div class="ranks">
                <div class="rank wow fadeInLeft" data-wow-delay="0s">
                    <p>1</p>
                    <p>白皮书</p>
                </div>
                <div class="rank wow fadeInLeft" data-wow-delay="0.2s">
                    <p>2</p>
                    <p>新品发布</p>
                </div>
                <div class="rank wow fadeInLeft" data-wow-delay="0.4s">
                    <p>3</p>
                    <p>书籍</p>
                </div>
            </div>
        </div>
        <div class="white-paper a-p-item">
            <div class="title wow fadeInUp">
                <p>白皮书</p>
                <p>White Paper</p>
            </div>
            <div class="card">
                <CardItem
                class="ci wow fadeInUp"
                v-for="(item, index) in data" 
                :key="item.bgUrl"
                :reverse="index % 2 == 1"
                :card-data="item"
                ></CardItem>
            </div>
        </div>
        <div class="new-product a-p-item">
            <div class="title wow fadeInUp">
                <p>新品发布</p>
                <p>New Product Launch</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import WOW from 'wow.js'
import CardItem from './components/CardItem.vue';

const data = ref([
    {
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/7/70fe3218d7ae4f58ae91a838ed4d64dd.jpg',
        enTitle: '2023 West Lake Debate - essence Special Issue of the 11th Anniversary',
        chTitle: '2023西湖论剑-11周年精华特刊',
        content: '建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。'
    },
    {
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8cc23042ae8f4a6e80f25997132d13c0.png',
        enTitle: '2023 Digital Security Capability Insight Report',
        chTitle: '2023数字安全能力洞察报告',
        content: '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。'
    },
    {
        bgUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0bfbde79d1774b43bab8f03d1c75e44c.png',
        enTitle: 'Anheng Information 2023 Industry Solution Blue Book (6 books in total)',
        chTitle: '安恒信息2023年行业解决方案蓝皮书（全6本）',
        content: '数字安全是未来数字化发展的重要组成部分，立足数字安全建设。备预不虞，为国常道，安恒信息结合多年网络安全、数据安全经验以及对行业发展趋势的理解和把握，安恒信息首次发布六大行业解决方案蓝皮书，全面介绍网信、公安、运营商、金融、教育、交通六大行业中的解决方案最佳实践，为产业数字化发展指明了方向，全面加速推动经济社会全面发展。'
    }
])

const initWOW = () => {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
    })
    wow.init();
}

onMounted(() => {
    initWOW()
})

</script>


<style scoped lang="scss">
.achievement-page {
    width: 100%;
    .ci {
        padding: .5333rem 0;
        border-bottom: 1px solid rgb(229, 229, 229);
        box-shadow: 0 .0rem .3333rem 0 rgb(230, 230, 230);
    }

    .a-p-item {
        padding: 1rem .5rem;
        .card {
            width: 100%;
            margin-top: .6667rem;
            display: flex;
            flex-direction: column;
            gap: .8333rem;
        }

        .title {
            width: 100%;
            @include linear-txt;
            text-align: center;

            p:first-child {
                font-size: .4667rem;
            }

            p:last-child {
                margin-top: .2333rem;
                font-size: .2rem;
            }
        }
    }

    .screen {
        width: 100%;
        height: 8rem;
        background-size: cover;
        background-image: url(https://www.gcsis.cn/uploadfile/547ca0d0c56746a5925e36c09b6fc872.jpg);
        padding: 3%;

        h1 {
            color: white;
            font-size: .5rem;
        }
    }

    .ranks {
        display: flex;
        flex-direction: column;
        padding: .1667rem .3333rem;
        gap: .6667rem;
        margin-top: .5333rem;
        margin-left: .5rem;

        .rank {
            display: flex;
            width: 3.6667rem;
            align-items: center;
            background-color: white;
            cursor: pointer;
            transition: all .3s;
            border-radius: .0833rem;

            &:hover {
                transform: scale(1.1);
            }

            p:first-child {
                color: white;
                background: linear-gradient(to right, $theme-color-green, $theme-color-blue);
                padding: .2167rem .4333rem;
                scale: 1.3;
                border-radius: .0833rem;
            }

            p:last-child {
                flex: 1;
                text-align: center;
                background-color: white;
                @include linear-txt;
                font-size: 0.3rem;
            }
        }

    }
}
</style>