<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import { useOverflowHiddenOnBody } from '@/composables/useOverflowHiddenOnBody'

useOverflowHiddenOnBody()

// 13 questions
</script>

<template>
  <div class="page">
    <BaseHeader></BaseHeader>
    <main class="main">
      <div class="progress-bar"></div>
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
