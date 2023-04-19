<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import { onMounted, ref, type Ref } from 'vue'
import { useOverflowHiddenOnBody } from '@/composables/useOverflowHiddenOnBody'
import phoneSvg from '@/assets/ui/phone.svg'

useOverflowHiddenOnBody()

const time: Ref<string | null> = ref(null)

onMounted(() => {
  let seconds = 599 // 9:99 minutes in seconds

  const interval = setInterval(() => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    time.value = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`

    if (seconds === 0) {
      clearInterval(interval)
      console.log('Countdown finished!')
    } else {
      seconds--
    }
  }, 1000)
})
</script>

<template>
  <div class="page">
    <BaseHeader></BaseHeader>
    <main class="main">
      <h1 class="title">Ваш результат рассчитан:</h1>
      <p class="paragraph">
        Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается
        от среднего в большую или меньшую сторону!
      </p>
      <h2 class="subtitle">Скорее получите свой результат!</h2>
      <p class="paragraph-disclaimer">
        В целях защиты персональных данных результат теста, их подробная интерпретация и
        рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
      </p>
      <p class="prompt">Звоните скорее, запись доступна всего</p>
      <p class="time">{{ time ? time + ' минут' : '10:00 минут' }}</p>
      <a class="telephone-link" href="tel:+99999999999">
        <img :src="phoneSvg" alt="иконка телефона" />
        <span class="link-text">позвонить и прослушать результат</span>
      </a>
    </main>
  </div>
</template>

<style scoped>
.telephone-link {
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: red;
  border-radius: 6px;
  margin-top: 10px;
}

.link-text {
  max-width: 200px;
}
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url('../assets/img/black-stars.png');
}

.title,
.paragraph,
.subtitle,
.paragraph-disclaimer,
.prompt {
  text-align: center;
}

.title {
  color: white;
}

.paragraph {
  color: white;
  margin-top: 10px;
}

.subtitle {
  color: #3bde7c;
  text-transform: uppercase;
  margin-top: 22px;
}

.paragraph-disclaimer {
  padding: 12px;
  color: white;
  text-transform: uppercase;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 2px;
  background-color: #1c2741;
  border-radius: 6px;
  margin-top: 10px;
}

.prompt {
  color: #3bde7c;
  margin-top: 10px;
}

.time {
  color: #3bde7c;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.1em;
}

.main {
  padding: 22px;
}
</style>
