<template>
    <teleport to="#app">
        <div class="login-box" v-if="userStore.onLogining">
            <div class="l-mask" @click="handleClose"></div>
            <div class="container-login">
                <div class="l-l l-item">
                    <div class="title">手机短信登录</div>
                    <div class="input">
                        <input type="text" placeholder="请输入手机号码">
                        <div class="code">
                            <input type="text" placeholder="请输入验证码">
                            <p class="send" @click="sendCode">{{ codeStr }}</p>
                        </div>
                    </div>
                    <button class="btn" @click="handleLogin">注册登录</button>
                    <p class="agr">注册即代表阅读并同意<span>服务条款、隐私政策</span></p>
                </div>
                <div class="l-r l-item">
                    <div class="title">扫码登录</div>
                    <p class="itr">使用 <span>QQ</span> 快速扫码登录</p>
                    <div class="qr">
                        <img src="../assets/images/code.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>


<script setup>
import useUserStore from '@/store/modules/useUserStore'
import { computed, ref } from 'vue';

const userStore = useUserStore()
const hasSend = ref(false)
const timer = ref(60)


const handleClose = () => {
    userStore.closeLoginBox()
}

const handleLogin = () => {
    userStore.login()
    handleClose()
}

const codeStr = computed(() => {
    if (hasSend.value) {
        return `${timer.value}s后重发`
    } else {
        return '发送验证码'
    }
})

const sendCode = () => {
    if (!hasSend.value) {
        timer.value = 60
        let t = setInterval(() => {
            timer.value--
            if (timer.value === 0) {
                clearInterval(t)
                hasSend.value = false
            }
        }, 1000)
        hasSend.value = true
    }
}

</script>


<style scoped lang="scss">
.login-box {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 50000;
    background-color: rgb(0, 0, 0, 0.15);

    .l-mask {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: rgb(0, 0, 0, 0.15);
    }

    .container-login {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 13rem;
        height: 7.5rem;
        background-color: #fff;
        border-radius: .1667rem;
        padding: 3% 5%;
        display: flex;

        .l-l {
            flex: 5;
            height: 100%;
            border-right: .0167rem solid rgb(226, 226, 226);

            .input {
                margin-top: .6667rem;
                font-size: 0.2rem;
                display: flex;
                flex-direction: column;
                gap: .3667rem;
                position: relative;

                input {
                    padding: .1733rem .2rem;
                    width: 3.6667rem;
                    outline: transparent;
                    border: .0167rem solid rgb(205, 205, 205);
                    border-radius: .0433rem;
                }

                input::placeholder {
                    color: rgb(185, 185, 185);
                }

                .code {
                    position: relative;
                    width: fit-content;
                }

                .send {
                    position: absolute;
                    top: 50%;
                    right: .1667rem;
                    transform: translateY(-50%);
                    color: grey;
                    cursor: pointer;
                }
            }

            .btn {
                width: 80%;
                margin-top: .6667rem;
                font-size: 0.2rem;
                padding: .1367rem 0;
                border: none;
                background: linear-gradient(to right, $theme-color-blue, $theme-color-green);
                color: white;
                cursor: pointer;
                border-radius: .0433rem;
            }

            .agr {
                font-size: 0.18rem;
                margin-top: .3rem;
                color: grey;

                span {
                    @include linear-txt;
                    cursor: pointer;
                    font-size: 0.2rem;
                }
            }
        }

        .l-r {
            flex: 4;
            height: 100%;
            padding-left: .7rem;

            .itr {
                margin-top: .5rem;
                font-size: .2rem;
                color: rgb(82, 82, 82);

                span {
                    font-size: .22rem;
                    color: black;
                    font-weight: bold;
                }
            }

            .qr {
                position: relative;
                left: 20%;
                top: 10%;
                width: 3.3333rem;
                padding: .1667rem;
                border: .0167rem solid rgb(226, 226, 226);

                img {
                    width: 100%;
                }
            }
        }

        .l-item {
            .title {
                font-size: .2967rem;
                border-left: 3px solid $theme-color-blue;
                padding-left: .1333rem;
                line-height: 1.3;
            }
        }
    }
}</style>