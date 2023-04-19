<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  total: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  }
})

const progress = computed(() => (props.current / props.total) * 100)
</script>

<template>
  <div class="progress-bar">
    <div class="indicator" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  height: 11px;
  width: 100%;
  background-color: #f2f3f3aa;
  border-radius: 10.5px;
}

.indicator {
  height: 100%;
  background-color: #3bde7c;

  border-radius: 10.5px;
}
</style>
