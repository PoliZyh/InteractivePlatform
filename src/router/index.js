import { createRouter, createWebHistory } from "vue-router";

import {
    constantRoutes
} from './routes'


const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: (to, from, savedPosition) => {
        return {
            top: 0
        }
    }
})



export default router
