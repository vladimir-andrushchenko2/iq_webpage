<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
</script>

<template>
  <BaseHeader></BaseHeader>
  <main>
    <section class="hero">
      <p class="subtitle">Пройдите точный и быстрый</p>
      <h1 class="title">тест на определение IQ</h1>
      <RouterLink class="link link_primary" to="/">Пройти тест</RouterLink>
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

    <section class="quote">
      <p class="quote__text">
        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и
        выработать список рекомендаций для повышения этого показателя.
      </p>
    </section>

    <section class="info">
      <p class="info__text">
        Также по результатам теста <span class="info__accent">вы получите</span> подробные
        <span class="info__accent">советы</span> по определению наиболее перспективной
        <span class="info__accent">для вашего типа интеллекта сферы деятельности</span>, которая
        принесет вам скорейший финансовый результат.
      </p>
      <img class="brain-img" src="../assets/img/brain-scheme.png" alt="" />
      <RouterLink class="link link_primary" to="/">Пройти тест</RouterLink>
    </section>
  </main>
</template>

<style scoped>
/* Info */
.info {
  padding: 40px 11px;
}

.info .link {
  margin: auto;
}

.info__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
}

.info__accent {
  text-transform: uppercase;
  font-weight: 700;
}

.brain-img {
  margin: auto;
  display: block;
  margin-top: 38px;
}

/* Info end */

/* Hero */
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
  color: black;
}

.link_primary {
  background-color: #ffc700;
}

.hero .link {
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

/* Hero end */

/* Quote */

.quote {
  position: relative;
  background: radial-gradient(
      84.34% 50.29% at 48.75% 49.71%,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.62%,
      rgba(39, 98, 187, 0) 85.42%
    ),
    url(../assets/img/quote-background.png);
  padding: 82px 0 28px;
}

.quote::before {
  content: '';
  display: block;
  position: absolute;
  top: 43px;
  left: 25px;
  background-image: url('../assets/img/quote.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
}

.quote::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 11px;
  right: 29px;
  background-image: url('../assets/img/quote.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
}

.quote__text {
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;

  max-width: 248px;
  margin: auto;
}

/* Quote end */
</style>
