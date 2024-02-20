import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
    state: () => ({
        isLogin: false, // 是否登录
        onLogining: false, // 正在登录
    }),

    actions: {
        openLoginBox() {
            this.onLogining = true
        },
        closeLoginBox() {
            this.onLogining = false
        },
        login() {
            this.isLogin = true
        }
    }
})




export default useUserStore