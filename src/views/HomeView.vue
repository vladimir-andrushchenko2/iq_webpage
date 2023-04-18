<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
</script>

<template>
  <BaseHeader></BaseHeader>
  <main>
    <section class="hero">
      <p class="subtitle">Пройдите точный и быстрый</p>
      <h1 class="title">тест на определение IQ</h1>
      <RouterLink class="link" to="/">Пройти тест</RouterLink>
      <p class="hero__paragraph">
        <span class="accent">
          И получите рекомендации<br />
          по развитию своего интеллекта
        </span>
        <br />
        и улучшению финансового благосостояния и личной жизни
      </p>
      <button class="scroll-down-btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.45453 11.6364L8.45453 6.10454L10.9954 8.64545L11.6364 8L7.99999 4.36363L4.36362 8L5.00453 8.6409L7.54544 6.10454L7.54544 11.6364L8.45453 11.6364Z"
            fill="#0C0B10"
          />
        </svg>
        Подробнее
      </button>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background-image: url('../assets/img/hero-background.png');
  background-size: cover;
  padding: 27px 0 11px;
}
.subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: white;
}

.title {
  text-transform: uppercase;
  color: #ffc700;
  margin: 30px auto 0;
  text-align: center;
  max-width: 252px;
}

.link {
  display: block;
  padding: 14px 17px 11px;
  max-width: max-content;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero .link {
  background-color: #ffc700;
  margin: 170px auto 0;
}

.hero__paragraph {
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  max-width: 286px;
  color: white;
  margin: 22px auto 0;
  text-align: center;
}

.accent {
  color: #ffc700;
}

.scroll-down-btn {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 11px auto 0;
  font-size: 8px;
  line-height: 11px;
}

.scroll-down-btn svg {
  margin-bottom: 3px;
}
</style>
