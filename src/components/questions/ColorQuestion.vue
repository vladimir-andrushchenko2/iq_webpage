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
  <slot></slot>
  <ul class="radio-options">
    <li class="item" v-for="item in props.items" :key="item.value">
      <label :style="{ backgroundColor: item.value }" class="item__label">
        <input
          class="radio"
          name="radio-select"
          type="radio"
          :value="item.value"
          @change="() => handleSelect(item.value)"
          :checked="selected === item.value"
        />
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

.radio-options {
  padding: 0 26px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 21px;
  place-items: center;
}
.item__label {
  width: 75px;
  height: 75px;
  display: block;
}

.item__label:has(.radio:checked) {
  border: 5px solid #ffc700;
}
</style>
