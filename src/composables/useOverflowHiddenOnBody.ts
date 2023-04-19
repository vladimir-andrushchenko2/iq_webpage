import { onMounted, onUnmounted } from 'vue'

export function useOverflowHiddenOnBody() {
  onMounted(() => {
    document.body.style.overflow = 'hidden'
    window.scrollTo({ top: 0 })
  })

  onUnmounted(() => {
    document.body.style.overflow = 'auto'
  })
}
