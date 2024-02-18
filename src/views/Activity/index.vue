<template>
    <div class="activity-page">
        <div class="a-bg">
            <h2>精彩活动 & 大会打卡</h2>
        </div>
        <div class="lists">
            <List :list="lists"></List>
        </div>
        <div class="clock-in">
            <div class="ci-title">活动打卡</div>
            <div class="cin">
                <div class="in-l" @click="router.push({name: 'clock-in'})">面部贴图打卡区</div>
                <div class="in-r" @click="router.push({name: 'clock-in-hand'})">手部贴图打卡区</div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import List from './components/List.vue'
import { ref } from 'vue';

const router = useRouter();
const lists = ref([
    {
        title: '格致论道@西湖论剑',
        content: '“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
        time: '2023-05-05 18:30 - 21:45',
        peo: '1280',
        picUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/564f5dbf1157432b9ed70c338012642a.png'
    },
    {
        title: '西湖论剑安全特训营·网络攻防蓝队实战技法进阶班',
        content: ' 本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌握基本的漏洞分析、利用和防御技能，能够进行简单的应急响应和取证分析。',
        time: '2023-05-04 09:00 - 18:00',
        picUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/26e81e6767bf4af18b84638091fedc3e.jpg'
    },
    {
        title: '西湖论剑安全特训营·数字安全官高级研修班',
        content: ' 作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度。本次培训以塑造数字化转型思维为出发点，结合数字经济发展与数据要素价值，协助数字安全官找准数字化转型的痛点与具体对策；从对抗、运营、管理多维度入手建立完善的数据安全管理体系，确保数据要素在数据生命周期各阶段的安全；进一步深化数字化产业人才能力，培养其看待风险的宏观视野，提升企业安全管理者的数字化素养。 ',
        time: '2023-05-04 09:00 - 18:00',
        picUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/d7e559c06b034f18a18b078fd8629c98.jpg'
    },
    {
        title: '新·见未来 实·现梦想',
        content: ' 今年是习近平总书记提出“八八战略”实施的20周年，是杭州亚运会举办之年，是数字浙江建设20周年,同时也是西湖论剑网络安全大会迈向第二个十年的起始之年。作为西湖论剑系列预热活动之一，此次新品发布会将突出西湖论剑新十年的目标——“聚焦科技，强化成果输出”，重点呈现三大亮点。  ■  亮点一：西湖论剑预热活动之一，擦亮西湖论剑新十年“金名片”；  ■ 亮点二：首次大规模集中发布新品，行业罕见；  ■ 亮点三：围绕“新”字讲透，新方向、新进展、新产品、新技术、新模式，奏响前沿之声',
        time: '2023-04-19 13:30 - 17:00',
        peo: '478',
        picUrl: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/eb12f1934c2c4f70b86939e00ddc171f.png'
    }
])


</script>


<style scoped lang="scss">
.activity-page {
    width: 100%;

    .a-bg {
        height: 5.3333rem;
        background-image: url(https://www.gcsis.cn/img/activity_banner.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        h2 {
            color: white;
            position: absolute;
            top: 20%;
            font-size: 0.5rem;
            left: 5%;
        }
    }
    .lists {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        transform: translateY(-2.3333rem);
    }
    .clock-in {
        width: 100%;
        margin-bottom: 1.6667rem;
        .ci-title {
            width: 100%;
            font-size: 0.4rem;
            @include linear-txt;
            text-align: center;
        }
        .cin {
            margin-top: .8333rem;
            display: flex;
            flex-direction: column;
            gap: .6667rem;
            width: 100%;
            position: relative;
            div {
                padding: .5rem 1rem;
                font-size: 0.34rem;
                width: 30%;
                border-radius: .2333rem 0;
                cursor: pointer;
            }
            .in-l {
                background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
                color: white;
                position: relative;
                left: 10%;
            }
            .in-r {
                border: .0333rem solid $theme-color-green;
                @include linear-txt;
                position: absolute;
                right: 10%;
            }
        }
       
    }
}
</style>