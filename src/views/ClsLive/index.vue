<template>
    <div class="cls-live">
        <a-scene arjs embedded>
            <a-entity gltf-model="../../assets/models/md/witch_style_anime/scene.gltf"></a-entity>
            <!-- <a-entity gltf-model="../../assets/models/md1/scene.gltf"></a-entity> -->
            <a-marker-camera preset="hiro"></a-marker-camera>
        </a-scene>
    </div>

</template>

<script setup>

</script>



<style scoped>
.cls-live {
    height: 100vh;
    width: 100vw;
}
</style>