import { onMounted, onUnmounted } from 'vue'

export function useOverflowHiddenOnBody() {
  onMounted(() => {
    document.body.style.overflow = 'hidden'
  })

  onUnmounted(() => {
    document.body.style.overflow = 'auto'
  })
}
