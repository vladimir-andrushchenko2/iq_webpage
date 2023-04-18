<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import RadioQuestion from '@/components/RadioQuestion.vue'
import { useOverflowHiddenOnBody } from '@/composables/useOverflowHiddenOnBody'
import { ref } from 'vue'

useOverflowHiddenOnBody()

const questions = [
  {
    element: RadioQuestion,
    props: [
      { title: 'Мужчина', value: 'man' },
      { title: 'Женщина', value: 'woman' }
    ]
  }
]

const currentQuestionIndex = ref(0)

// 13 questions
</script>

<template>
  <div class="page">
    <BaseHeader></BaseHeader>
    <main class="main">
      <div class="progress-bar-wrapper">
        <ProgressBar :total="13" :current="4" />
      </div>

      <div class="question" style="color: white">
        <component
          :is="questions[currentQuestionIndex].element"
          :props="questions[currentQuestionIndex].props"
        ></component>
      </div>

      <button class="continue-btn" to="/test">Далее</button>
    </main>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main {
  background-image: url('../assets/img/black-stars.png');
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

.progress-bar-wrapper {
  margin: 17px auto 0;
  width: 260px;
}

.continue-btn {
  display: block;
  padding: 14px 17px 11px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: black;
  min-width: 189px;
  background-color: #ffc700;
  margin-bottom: 25px;
}

.question {
  width: 100%;
}
</style>
