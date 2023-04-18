<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <div class="page">
    <BaseHeader></BaseHeader>
    <main class="main">
      <p class="hi">hi</p>
      <p class="lol">lol</p>
      <p class="uwu">uwu</p>
    </main>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main {
  background-image: url('../assets/img/black-stars.png');
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
