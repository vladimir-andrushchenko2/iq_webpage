import TextQuestion from '@/components/questions/TextQuestion.vue'
import NumberQuestion from '@/components/questions/NumberQuestion.vue'
import ColorQuestion from '@/components/questions/ColorQuestion.vue'

import humansImg from '@/assets/img/humans.png'
import pyramidImg from '@/assets/img/pyramid.png'
import starImg from '@/assets/img/star-with-numbers.png'

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
    element: ColorQuestion,
    props: {
      title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
      items: [
        { title: 'Gray', value: '#A8A8A8' },
        { title: 'Blue', value: '#0000A9' },
        { title: 'Green', value: '#00A701' },
        { title: 'Red', value: '#F60100' },
        { title: 'Yellow', value: '#FDFF19' },
        { title: 'Brown', value: '#A95403' },
        { title: 'Black', value: '#000000' },
        { title: 'Maroon', value: '#850068' },
        { title: 'Cyan', value: '#46B3AC' }
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
    element: ColorQuestion,
    props: {
      title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
      items: [
        { title: 'Blue', value: '#0000A9' },
        { title: 'Gray', value: '#A8A8A8' },
        { title: 'Maroon', value: '#850068' },
        { title: 'Green', value: '#00A701' },
        { title: 'Black', value: '#000000' },
        { title: 'Cyan', value: '#46B3AC' },
        { title: 'Yellow', value: '#FDFF19' },
        { title: 'Brown', value: '#A95403' },
        { title: 'Red', value: '#F60100' }
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
  },
  {
    element: NumberQuestion,
    image: starImg,
    props: {
      title: 'Вставьте подходящее число',
      items: [
        { title: '34', value: '34' },
        { title: '36', value: '36' },
        { title: '53', value: '53' },
        { title: '44', value: '44' },
        { title: '66', value: '66' },
        { title: '42', value: '42' }
      ]
    }
  }
]
