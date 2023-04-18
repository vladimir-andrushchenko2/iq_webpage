import RadioQuestion from '@/components/RadioQuestion.vue'

export const questions = [
  {
    element: RadioQuestion,
    props: {
      title: 'Ваш пол:',
      items: [
        { title: 'Мужчина', value: 'man' },
        { title: 'Женщина', value: 'woman' }
      ]
    }
  },
  {
    element: RadioQuestion,
    props: {
      title: 'Укажите ваш возраст:',
      items: [
        { title: 'До 18', value: '-18' },
        { title: 'От 18 до 28', value: '18-28' },
        { title: 'От 29 до 35', value: '29-35' },
        { title: 'От 36', value: '36+' }
      ]
    }
  },
  {
    element: RadioQuestion,
    props: {
      title: 'Выберите лишнее:',
      items: [
        { title: 'Дом', value: 'House' },
        { title: 'Шалаш', value: 'Tent' },
        { title: 'Бунгало', value: 'Bungaloo' },
        { title: 'Скамейка', value: 'Bench' },
        { title: 'Хижина', value: 'Hut' }
      ]
    }
  }
]
