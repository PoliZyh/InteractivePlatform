<template>
    <div class="live">
        <div class="live-l">
            <div class="vedio">
                <video width="100%" height="100%" controls playsinline="true"
                    poster="https://cnstatic01.e.vhall.com/upload/interacts/screen-imgs/202304/c7/1f/c71f1ec5c9b9812c8283acb8aeb51fb3.jpg?mode=1&have-wap-image=750"
                    src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/f7fab25da1ff48199d669add828005af.mp4"></video>
            </div>
            <div class="info">
                <h4>格致论道@西湖论剑</h4>
                <div class="watch">
                    <svg t="1707210335786" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4255" width="16" height="16">
                        <path
                            d="M512 280.901818c171.752727 0 328.145455 167.098182 387.956364 238.545455C839.68 591.127273 683.287273 757.992727 512 757.992727S183.389091 591.127273 123.578182 519.447273C183.389091 448 339.781818 280.901818 512 280.901818zM512 209.454545C298.356364 209.454545 117.76 412.858182 56.785455 490.123636a46.545455 46.545455 0 0 0 0 58.647273C117.76 626.036364 298.356364 829.44 512 829.44s393.309091-203.403636 454.283636-280.669091a46.545455 46.545455 0 0 0 0-58.647273C905.309091 412.858182 724.712727 209.454545 512 209.454545z m0 238.545455a71.68 71.68 0 1 1-69.818182 71.447273 69.818182 69.818182 0 0 1 69.818182-71.447273z m0-71.68A139.636364 139.636364 0 0 0 382.603636 465.454545a146.385455 146.385455 0 0 0 30.254546 155.927273 137.076364 137.076364 0 0 0 151.970909 30.254546A143.127273 143.127273 0 0 0 651.636364 519.447273a141.265455 141.265455 0 0 0-139.636364-143.127273z"
                            p-id="4256"></path>
                    </svg>
                    <p>2437</p>
                </div>
                <div class="like">
                    <svg t="1707210477889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6150" width="16" height="16"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="6151"></path></svg>
                    <p>58</p>
                </div>
                <div class="btns">
                    <button>订阅</button>
                    <button>PPT下载</button>
                </div>
            </div>
        </div>
        <div class="live-r">
            <div class="title">
                <span>会议议程</span>
            </div>
            <div class="content">
                <Progress :data="progressData"></Progress>
            </div>
        </div>
    </div>
</template>


<script setup>
import Progress from '@/components/Progress.vue'
import { ref } from 'vue';

const progressData = ref([
    {
        time: '13:30 - 13:35',
        title: '致辞',
        content: '邬韶杭&nbsp;&nbsp;&nbsp;浙江省经济和信息化厅软件与集成电路产业处 处长'
    },
    {
        time: '13:35 - 13:40',
        title: '主题介绍',
    },
    {
        time: '13:40 - 14:00',
        title: '主题演讲：《软件供应链安全挑战及治理探索》',
        content: '赵相楠&nbsp;&nbsp;&nbsp;中国信息通信研究院安全研究所网络安全检测评估中心主任'
    },
    {
        time: '14:00 - 14:20',
        title: '主题演讲：《金融业开源软件供应链安全管控与实践》',
        content: '孙钢&nbsp;&nbsp;&nbsp;浙江省网络空间安全协会软件供应链安全专家委员会 浙商银行安全研究专家'
    },
    {
        time: '14:20 - 14:40',
        title: '主题演讲：《软件供应链安全的现状分析及对策治理》',
        content: '温智超&nbsp;&nbsp;&nbsp;财通证券股份有限公司 金融科技研发部副总经理'
    },
    {
        time: '14:40 - 15:00',
        title: '主题演讲：《构建安全可信的软件供应链体系，打造全栈技术自主可控的国产数智云底座》',
        content: '宋国欢&nbsp;&nbsp;&nbsp;曙光信息产业股份有限公司云计算产品事业部 副总经理'
    }
])
</script>


<style scoped lang="scss">
.live {
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6667rem;

    .live-l {
        width: 13rem;
        height: 70%;
        display: flex;
        flex-direction: column;

        .vedio {
            flex: 9;
        }

        .info {
            flex: 1.4;
            background-color: white;
            padding: .1667rem .4rem;
            display: flex;
            align-items: center;
            .watch {
                margin-left: 2.6667rem;
                display: flex;
                gap: .1033rem;
                font-size: 0.2rem;
                align-items: center;
            }
            .like {
                margin-left: .6667rem;
                display: flex;
                gap: .1033rem;
                font-size: 0.2rem;
                align-items: center;
            }
            .btns {
                margin-left: .8333rem;
                display: flex;
                gap: .3333rem;
                button {
                    background-color: white;
                    border: none;
                    font-size: .22rem;
                    cursor: pointer;
                    border: .0167rem solid grey;
                    padding: 0.08rem .4rem;
                    border-radius: .0867rem;
                }
                button:first-child {
                    background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
                    color: white;
                    border-color: white;
                }
                button:last-child {
                    color: grey;
                    border-color: rgb(190, 190, 190);
                }
            }

            h4 {
                font-size: 0.3rem;
                font-weight: bold;
            }
        }
    }

    .live-r {
        width: 4rem;
        height: 70%;
        display: flex;
        flex-direction: column;
        gap: .6667rem;

        .title {
            flex: 0.9;
            background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
            color: white;
            font-size: 0.35rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content {
            padding: .3333rem;
            flex: 8;
            background-color: white;
            overflow: scroll;
        }
    }
}</style>