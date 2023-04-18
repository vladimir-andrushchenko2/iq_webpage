<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

type RadioItem = {
  value: string
  title: string
}

interface Props {
  props: RadioItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const selected: Ref<string | null> = ref(null)

function handleSelect(value: string) {
  selected.value = value
  emit('change', selected.value)
}
</script>

<template>
  <ul class="radio-options">
    <li class="item" v-for="item in props" :key="item.value">
      <label class="item__label">
        <input
          class="radio"
          name="radio-select"
          type="radio"
          :value="item.value"
          @change="() => handleSelect(item.value)"
          :checked="selected === item.value"
        />
        <span class="item__label-text">{{ item.title }}</span>
      </label>
    </li>
  </ul>
</template>
