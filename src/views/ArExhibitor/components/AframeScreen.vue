<template>
    <div class="aframe-screen">
        <div class="demo">
            <a-scene>
                <a-sky src="https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/adams_place_bridge.jpg"
                    radius="20">
                </a-sky>
                <a-entity camera position="0 1.6 0" look-controls wasd-controls></a-entity>
                <a-text value="Welcome to AR Exhibition" position="-0.9 1.2 -3" scale="1.5 1.5 1.5" color="#ffffff">
                </a-text>
            </a-scene>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped lang="scss">
.aframe-screen {
    width: 100%;
    height: calc(100vh - $layout-header-height);
}
</style>