<template>
    <div class="ppt-box">
        <div class="pp-t">
            <h2>PPT阅览</h2>
            <div class="ppt" id="my-pdf">

            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted } from 'vue';
import PPT from '@/assets/ppts/Yang.pdf';
const initPPT = () => {
    PDFObject.embed(PPT, "#my-pdf")
}

onMounted(() => {
    initPPT()
})
</script>


<style scoped lang="scss">
.ppt-box {
    width: 90%;
    margin: auto;
    padding: 0.7rem;
    height: 14rem;
    .pp-t {
        h2 {
            text-align: center;
            @include linear-txt;
            font-size: .5rem;
        }
        .ppt {
            height: 11rem;
            margin-top: 1rem;
        }
    }
}
</style>