<template>
    <div class="rule-box">
        <table>
            <tr v-for="(item, index) in tableData" :key="index">
                <td class="title">{{item.title}}</td>
                <td class="point">+{{item.point}}积分</td>
                <td class="details">{{item.details}}</td>
                <td class="btn" >
                    <div v-if="item.btn">{{item.btn}}</div>
                </td>
            </tr>
        </table>
    </div>
</template>


<script setup>
import { ref } from 'vue';


const tableData = ref([
    {
        title: '用户注册',
        point: '100',
        details: '注册账号即送100积分',
        btn: '已注册'
    },
    {
        title: '签到',
        point: '100',
        details: '签到即送100积分 （每日仅限一次）',
        btn: '去签到'
    },
    {
        title: '完善信息',
        point: '1500',
        details: '完善信息即送1500积分 （仅限一次）',
        btn: '去完善'
    },
    {
        title: '订阅',
        point: '200',
        details: '订阅即送200积分',
        btn: '去订阅'
    },
    {
        title: '分享',
        point: '200',
        details: '微信小程序参与分享即送200积分（每日仅限一次）',
        btn: ''
    },
    {
        title: '线下展商打卡',
        point: '200',
        details: '线下展商打卡即送200积分（每个展位打卡仅限一次）',
        btn: ''
    },
])

</script>


<style scoped lang="scss">
.rule-box {
    width: 100%;
    table {
        width: 100%;
        tr {
            td {
                padding: .35rem 0.1rem;
                border-bottom: 1px solid rgb(212, 212, 212);
            }
            .title {
                font-size: 0.22rem;
                width: 24%;
            }
            .point {
                font-size: 0.18rem;
                color: grey;
            }
            .details {
                font-size: 0.18rem;
                color: grey;
            }
            .btn {
                div {
                    font-size: 0.18rem;
                    border: 1px solid $theme-color-green;
                    width: fit-content;
                    padding: .0767rem .2667rem;
                    border-radius: 2rem;
                    color: $theme-color-green;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>