
<template>
  <router-view></router-view>
  <AIHelper v-if="useStore.isLogin"></AIHelper>
  <Hot></Hot>
</template>

<script setup>
import AIHelper from './components/AIHelper/index.vue'
import useUserStore from './store/modules/useUserStore';
import Hot from './components/Hot/index.vue'

const useStore = useUserStore()
</script>

<style scoped>

</style>
