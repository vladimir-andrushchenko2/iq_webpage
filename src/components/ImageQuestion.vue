<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

type RadioItem = {
  value: string
  title: string
}

interface Props {
  props: {
    items: RadioItem[]
    title: string
  }
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const selected: Ref<string | null> = ref(null)

function handleSelect(value: string) {
  selected.value = value
  console.log(value)
  emit('change', selected.value)
}
</script>

<template>
  <h2 class="subtitle">{{ props.title }}</h2>
  <slot></slot>
  <ul class="radio-options">
    <li class="item" v-for="item in props.items" :key="item.value">
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

<style scoped>
.subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 41px;
}

.radio-options {
  display: flex;
  justify-content: space-evenly;
  margin-top: 23px;
}

.item__label {
  padding: 10px 14px;
  background-color: white;
  color: black;
  display: block;
}

.item input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.item__label:has(.radio:checked) {
  background-color: #ffc700;
}
</style>
