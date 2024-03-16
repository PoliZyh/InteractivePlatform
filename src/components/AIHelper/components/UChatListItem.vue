<template>
    <div class="u-chat-list-item">
        <div class="left">
            <p>{{ msg }}</p>
        </div>
        <div class="right">
            <div class="icon-box">
                <img src="../../../assets/images/user.jpeg" alt="">
            </div>
            
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    msg: {
        type: String,
        default: ''
    }
})
</script>


<style scoped lang="scss">
.u-chat-list-item {
    width: 100%;
    display: flex;
    .left {
        flex: 1;
        width: 100%;
        margin-left: 10px;
        display: flex;
        justify-content: flex-end;
        
        p {
            border-radius: 10px;
            padding: 5px 10px;
            background-color: #409eff;
            width: fit-content;
            max-width: 180px;
            color: white;
            overflow-wrap: break-word;
            word-wrap: break-word;
            font-size: 0.25rem;
            line-height: 1.4;
        }
    }
    .right {
        .icon-box {
            padding: 5px;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }
        }
    }
}
</style>