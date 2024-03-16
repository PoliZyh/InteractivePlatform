<template>
    <Teleport to="body">
        <div class="hot-box"
        :style="{
            'transform': isShow ? '' : 'translateX(87%)',
            'transition': 'all 0.5s'
        }">
            <div class="title" @click="isShow = !isShow">贡献热榜</div>
            <div class="peos">
                <div class="peos-item">
                    <img src="../../assets/images/user.jpeg" alt="">
                    <p>用户272798802</p>
                </div>
                <div class="peos-item">
                    <img src="../../assets/images/user.jpeg" alt="">
                    <p>用户272798802</p>
                </div>
                <div class="peos-item">
                    <img src="../../assets/images/user.jpeg" alt="">
                    <p>用户272798802</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>


<script setup>
import { ref } from 'vue'

const isShow = ref(false)




</script>



<style scoped lang="scss">
.hot-box {
    position: fixed;
    top: 0;
    z-index: 10000;
    right: 0;
    top: 20%;
    height: 350px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 15px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.469);
    display: flex;
    .title {
        writing-mode: vertical-rl;
        /* 设置文字竖向排列 */
        text-orientation: mixed;
        /* 可以保证在不同浏览器中效果一致 */
        white-space: nowrap;
        font-size: 0.3rem;
        padding: 10px;
        cursor: pointer;
        height: 100%;
        text-align: center;
        @include linear-txt ;
    }
    .peos {
        height: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px 10px;
        .peos-item {
            width: 100%;
            padding: 10px;
            height: 60px;
            border-bottom: 1px solid rgba(3, 3, 3, 0.201);
            display: flex;
            gap: 15px;
            align-items: center;
            img {
                height: 40px;
                width: 40px;
                border-radius: 50%;
            }
            p {
                font-size: 0.25rem;
            }
        }
    }
}
</style>