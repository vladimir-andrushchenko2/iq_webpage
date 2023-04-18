import TextQuestion from '@/components/TextQuestion.vue'
import NumberQuestion from '@/components/NumberQuestion.vue'

import humansImg from '@/assets/img/humans.png'
import pyramidImg from '@/assets/img/pyramid.png'

export const questions = [
  {
    element: TextQuestion,
    props: {
      title: 'Ваш пол:',
      items: [
        { title: 'Мужчина', value: 'man' },
        { title: 'Женщина', value: 'woman' }
      ]
    }
  },
  {
    element: TextQuestion,
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
    element: TextQuestion,
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
    element: TextQuestion,
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
  },
  {
    element: TextQuestion,
    props: {
      title: 'Какой из городов лишний?',
      items: [
        { title: 'Вашингтон', value: 'WST' },
        { title: 'Лондон', value: 'LND' },
        { title: 'Париж', value: 'PRS' },
        { title: 'Нью-Йорк', value: 'NY' },
        { title: 'Москва', value: 'MSK' },
        { title: 'Оттава', value: 'OTT' }
      ]
    }
  },
  {
    element: NumberQuestion,
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
    element: TextQuestion,
    props: {
      title: 'Вам привычнее и важнее:',
      items: [
        {
          title: 'Наслаждаться каждой минутой проведенного времени',
          value: 'enjoy'
        },
        { title: 'Быть устремленными мыслями в будущее', value: 'strive' },
        { title: 'Учитывать в ежедневной практике прошлый опыт', value: 'experience' }
      ]
    }
  },
  {
    element: TextQuestion,
    image: pyramidImg,
    props: {
      title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
      items: [
        {
          title: 'Оно остроконечное',
          value: 'sharp'
        },
        { title: 'оно устойчиво', value: 'stable' },
        { title: 'оно-находится в состоянии равновесия ', value: 'balanced' }
      ]
    }
  }
]
