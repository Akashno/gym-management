import { defineStore } from 'pinia'

export const useInterlockStore = defineStore('interlock', () => {
  const products = ref([
    { model: '301', title: 'Matt Paver block', description: 'Pavement Blocks', img: '/images/decors/decor-1.jpeg' },
    { model: '302', title: 'Flag Stones', description: 'Glossy Pavement Blocks', img: '/images/decors/decor-2.jpeg' },
    { model: '304', title: 'Plain Flag', description: 'Chips and bebbles', img: '/images/decors/decor-3.jpeg' },
    { model: '800', title: 'Stonecrete', description: 'Terraso', img: '/images/decors/decor-4.jpeg' },
    { model: '801', title: 'Kerbstone', description: 'Stamp Concrete', img: '/images/decors/decor-5.jpeg' },
    { model: '808', title: 'Pebbles', description: 'Stone Chip', img: '/images/decors/decor-6.jpeg' },
  ])
  return { products }
})
