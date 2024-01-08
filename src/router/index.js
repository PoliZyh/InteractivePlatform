import { createRouter, createWebHashHistory } from "vue-router";

import {
    constantRoutes
} from './routes'


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior: (to, from, savedPosition) => {
        return {
            top: 0
        }
    }
})



export default router
