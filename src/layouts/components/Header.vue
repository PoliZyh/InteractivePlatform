<template>
    <div class="header-box">
        <div class="header__row">
            <img src="../../assets/images/logo.png" alt="">
            <div class="navs">
                <nav>
                    <div class="nav-item" 
                    v-for="route in constantRoutes[0].children"
                    :key="route.path"
                    @click="handleRouter(route.name)">
                    {{ route.meta.title }}
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>



<script setup>
import { onMounted } from 'vue';
import { constantRoutes } from '../../router/routes';
import { useRouter } from 'vue-router';

const router = useRouter()


const handleRouter = (name) => {
    router.push({name})
}


onMounted(() => {
    // console.log(constantRoutes)
})

</script>


<style scoped lang="scss">
.header-box {
    width: 100%;
    height: $layout-header-height;
    border-bottom: .0167rem solid $layout-border-color;
    font-size: .25rem;
    position: fixed;
    z-index: 1000;
    background-color: white;
    .header__row {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        padding: .0833rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            height: 80%;
        }
        .navs {
            height: 100%;
            display: flex;
            align-items: center;
            nav {
                display: flex;
                font-size: 0.2rem;
                height: 100%;
                .nav-item {
                    padding: 0 .167rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
}
</style>