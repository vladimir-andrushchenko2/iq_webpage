import RadioQuestion from '@/components/RadioQuestion.vue'
import ImageQuestion from '@/components/ImageQuestion.vue'
import humansImg from '@/assets/img/humans.png'

export const questions = [
  {
    element: ImageQuestion,
    image: humansImg,
    props: {
      title: 'Выберите правильную фигуру из четырёх пронумерованных.',
      items: [
        { title: '1', value: '1' },
        { title: '2', value: '2' },
        { title: '3', value: '3' },
        { title: '4', value: '4' }
      ]
    }
  },
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
  },
  {
    element: RadioQuestion,
    props: {
      title: 'Продолжите числовой ряд: 18 20 24 32',
      items: [
        { title: '62', value: '62' },
        { title: '48', value: '48' },
        { title: '74', value: '74' },
        { title: '57', value: '57' },
        { title: '60', value: '60' },
        { title: '70', value: '70' }
      ]
    }
  }
]
