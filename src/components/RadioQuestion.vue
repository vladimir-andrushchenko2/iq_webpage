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
  emit('change', selected.value)
}
</script>

<template>
  <h2 class="subtitle">{{ props.title }}</h2>
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

        <svg
          class="indicator"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9.5" stroke="white" />
        </svg>

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
.item {
  font-weight: 400;
  font-size: 18px;
  padding: 15px 35px;
  background-color: #f2f3f321;
}

.item__label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item:not(:first-child) {
  margin-top: 8px;
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

.radio:checked ~ .indicator circle {
  fill: #2950c2;
}

.item:has(.radio:checked) {
  background-color: #ffc700;
  color: black;
}

.item__label-text {
  margin-left: 40px;
}
</style>
