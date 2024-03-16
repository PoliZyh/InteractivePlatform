<template>
    <div class="ai-ball-box" @click="handleClickOnAiBall">
        <div class="chat-box" v-if="props.isShowChat">
            <div class="chat" ref="chatDiv">
                <div class="close-point" @click="handleCloseChat"></div>
                <div class="empty-list" v-if="chatList.length === 0">
                    <div class="empty-item" @click="handleUserMule('参会指南？')">
                        参会指南？
                    </div>
                    <div class="empty-item">
                        近期活动?
                    </div>
                    <div class="empty-item">
                        ...?
                    </div>
                </div>
                <div class="chat-list" v-else>
                    <component 
                    v-for="item in chatList"
                    :key="item.msg"
                    :is="item.type === 'r' ? RChatListItem : UChatListItem " :msg="item.msg"></component>
                </div>
            </div>
            <div class="chat-input">
                <el-input 
                type="textarea" 
                @click="handleInput" 
                ref="elInputRef"
                :autosize="{ minRows: 1, maxRows: 1}"
                style="width: 80%;"
                v-model="uMessage"
                ></el-input>
                <el-button icon="Position" class="btn" @click="handlePost" ></el-button>
            </div>
        </div>
        <div class="before-active" v-else>
            <svg t="1698154789193" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5438"><path d="M554.666667 251.733333V341.333333h341.333333v426.666667H170.666667V341.333333h341.333333V251.733333c-25.6-8.533333-42.666667-34.133333-42.666667-59.733333 0-34.133333 29.866667-64 64-64s64 29.866667 64 64c0 29.866667-17.066667 51.2-42.666666 59.733333zM512 384H213.333333v341.333333h640V384h-341.333333z m-384 85.333333v213.333334H85.333333v-213.333334h42.666667z m853.333333 0v213.333334h-42.666666v-213.333334h42.666666zM384 597.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666s17.066667-42.666667 42.666667-42.666667 42.666667 17.066667 42.666667 42.666667-17.066667 42.666667-42.666667 42.666666z m298.666667 0c-25.6 0-42.666667-17.066667-42.666667-42.666666s17.066667-42.666667 42.666667-42.666667 42.666667 17.066667 42.666666 42.666667-17.066667 42.666667-42.666666 42.666666z" fill="#409eff" p-id="5439"></path></svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RChatListItem from './RChatListItem.vue'
import UChatListItem from './UChatListItem.vue'

let chatTxt = ref('')
const elInputRef = ref()
const chatList = ref([])
const uMessage = ref('')
const chatDiv = ref()

const props = defineProps({
    isShowChat: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:isShowChat'])

const handleCloseChat = () => {
    emits('update:isShowChat', false)
}

const handleClickOnAiBall = () => [
    elInputRef.value.blur()
]

const handleInput = (e) => {
    e.stopPropagation()
    elInputRef.value.focus()
}

const handleUserMule = async (str) => {
    chatList.value.push({
        type: 'u',
        msg: str
    })
    handleRobotWait()
    await wait()
    // chatList.value[chatList.value.length - 1].msg = `
    // 1. 安装和配置： 确保正确安装和配置MRule引擎，可能需要设置一些参数和连接到相应的数据源。
    // 2. 规则定义： 定义决策规则，这可能涉及到规则的创建、编辑和管理。规则通常基于预定义的条件和操作，用于指导引擎在不同情境下做出决策。
    // 3. 数据输入： 提供引擎所需的输入数据。这可能包括从外部数据源中获取数据，确保数据的格式和质量符合引擎的要求。
    // 4. 运行和测试： 运行MRule引擎，并进行测试以确保它能够按照定义的规则做出正确的决策。这可能需要多次调整规则和数据以优化性能和准确性。
    // 5. 集成： 如果需要，将MRule引擎集成到您的应用程序或系统中，以便实际应用于特定的业务场景。
    // `
    chatList.value[chatList.value.length - 1].msg = `
    大会场馆位于杭州洲际酒店。从杭州萧山国际机场前往，乘坐地铁7号线（吴山广场方向）至市民中心站，M1出口出站后步行700米即可到达。如果选择乘坐出租车，大约需要50分钟，路程约25公里，费用大约为60元左右。从杭州东站出发，乘坐地铁4号线（浦沿方向）至市民中心站，M1出口出站后步行700米同样可以到达。选择出租车的话，路程约7公里，时长约20分钟，费用约为20元左右。
    `
    scrollToBottom()
}

const handleRobotWait = () => {
    chatList.value.push({
        type: 'r',
        msg: '机器人正在思考中...'
    })
    scrollToBottom()
}

const wait = () => {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            if (timer) clearTimeout(timer)
            resolve()
        }, 3000)
    })
}

const handlePost = async () => {
    chatList.value.push({
        type: 'u',
        msg: uMessage.value
    })
    uMessage.value = ''
    handleRobotWait()
    await wait()
    chatList.value[chatList.value.length - 1].msg = `
    最近日期的大会会议是《数字中国安全大会》，于五月七日举行。
    `
    scrollToBottom()
}

const scrollToBottom = () => {
    if (chatDiv.value) {
        chatDiv.value.scrollTop = chatDiv.value.scrollHeight;
    }
}
</script>

<style scoped lang="scss">
.ai-ball-box {
    height: 40px;
    width: 40px;
    position: relative;
    left: 0;
    .before-active {
        height: 100%;
        width: 100%;
        display: flex;
        border-radius: 50%;
        outline: 5px solid rgba(64, 158, 255, 0.1);
        background-color: white;
        transition: all 0.3s;
        cursor: pointer;
        .icon {
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            padding: 10%;
            color: yellow;
        }
    }
    .before-active:hover {
        background-color: rgba(64, 158, 255, 0.1) !important;
        outline-color: rgb(110, 185, 255);
    }
    .chat-box {
        width: 300px;
        height: 400px;
        // background-color: rgba(255, 255, 255, 0.763);
        background-color: white;
        border-radius: 20px;
        border: 10px solid rgb(239, 239, 239);
        padding: 10px;
        display: flex;
        flex-direction: column;
        position: relative;
        .chat {
            flex: 8;
            position: relative;
            padding-top: 25px;
            height: 400px;
            // padding-bottom: 40px;
            .close-point {
                position: absolute;
                left: 0;
                top: 0;
                width: 13px;
                height: 13px;
                background-color: red;
                border-radius: 50%;
                cursor: pointer;
            }
            .empty-list {
                height: 100%;
                width: 100%;
                padding-top: 60%;
                .empty-item {
                    width: 70%;
                    padding: 6px 15px;
                    background-color: white;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    font-size: 0.3rem;
                    border: 1px solid rgb(227, 227, 227);
                    box-shadow: 0 0 5px 0px rgba(234, 234, 234, 0.873);
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .empty-item:hover {
                    box-shadow: 0 0 10px 0px rgba(203, 203, 203, 0.873);
                }
            }
            .chat-list {
                width: 100%;
                display: flex;
                height: 340px;
                flex-direction: column;
                gap: 10px;
                overflow: scroll;
                padding-bottom: 48px;
            }
        }
        .chat-input {
            position: absolute;
            z-index: 40;
            height: 50px;
            width: 100%;
            left: 0;
            bottom: -0px;
            padding: 0px 10px;
            display: flex;
            align-items: center;
            background-color: white;
            .btn {
                flex: 1;
            }
        }
        
    }
}
</style>