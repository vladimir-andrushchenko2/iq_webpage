<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import ProgressBar from '@/components/ProgressBar.vue'
// import RadioQuestion from '@/components/RadioQuestion.vue'
import { useOverflowHiddenOnBody } from '@/composables/useOverflowHiddenOnBody'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

import { questions } from '@/data/questions'

useOverflowHiddenOnBody()

const router = useRouter()

type Answer = {
  id: number
  value: string
}

const answers: Answer[] = []

const currentAnswerValue: Ref<string | null> = ref(null)

function handleAnswerChange(value: string) {
  currentAnswerValue.value = value
}

const currentQuestionIndex = ref(0)

function handleNextQuestionBtnClick() {
  currentQuestionIndex.value++

  if (!currentAnswerValue.value) {
    throw new Error('Next question button must be blocked while question is not yet selected')
  }

  answers.push({
    id: currentQuestionIndex.value,
    value: currentAnswerValue.value
  })

  currentAnswerValue.value = null

  if (currentQuestionIndex.value === questions.length) {
    console.log(answers)
    // this is a placeholder
    router.push('/')
  }
}

// 13 questions
</script>

<template>
  <div class="page">
    <BaseHeader></BaseHeader>
    <main class="main">
      <div class="progress-bar-wrapper">
        <ProgressBar :total="questions.length" :current="currentQuestionIndex" />
      </div>

      <div v-if="currentQuestionIndex < questions.length" class="question" style="color: white">
        <component
          :is="questions[currentQuestionIndex].element"
          :props="questions[currentQuestionIndex].props"
          @change="handleAnswerChange"
        >
          <img
            class="question__img"
            v-if="questions[currentQuestionIndex].image"
            :src="questions[currentQuestionIndex].image"
            alt="Изображение для вопроса"
          />
        </component>
      </div>

      <button
        @click="handleNextQuestionBtnClick"
        class="continue-btn"
        :disabled="currentAnswerValue === null"
      >
        Далее
      </button>
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
  cursor: pointer;
}

.continue-btn:disabled {
  background-color: gray;
}

.question {
  width: 100%;
}

.question__img {
  margin: auto;
  display: block;
}
</style>
