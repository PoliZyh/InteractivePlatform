<template>
    <Teleport to="body">
        <div class="ai-helper-box" @mousedown="handleMouseDown" draggable="true"
            :style="{ left: pos.left + 'px', top: pos.top + 'px' }">
            <AIBall v-model:isShowChat="isShowChat"></AIBall>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import AIBall from './components/AIBall.vue';

const isShowChat = ref(false)

const pos = ref({
    left: 1100,
    top: 10
});

const handleShowChat = () => {
    isShowChat.value = true
}

const isClickBox = (curPos, mousePos) => {
    return curPos.left === mousePos.left && curPos.top === mousePos.top
}

const handleMouseDown = (e) => {
    e.preventDefault();
    const oldX = e.clientX;
    const oldY = e.clientY;
    const { left, top } = pos.value;
    const move = (moveEvent) => {
        const curX = moveEvent.clientX;
        const curY = moveEvent.clientY;
        pos.value.left = curX - oldX + left;
        pos.value.top = curY - oldY + top;
    };
    const up = () => {
        isClickBox({
            left,
            top
        }, pos.value) && handleShowChat()
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
};
</script>

<style scoped lang="scss">
.ai-helper-box {
    position: fixed;
    z-index: 100000;
    font-size: 0.2rem;
}
</style>
