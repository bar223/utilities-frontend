import type { Utility } from './model'

// Единственный источник карточек в ЛР-5: локальная типизированная коллекция.
// У капитального ремонта специально пустые ссылки для показа обоих fallback.
export const UTILITIES_MOCK: readonly Utility[] = [
  { id: 1, name: 'Электроэнергия', description: 'Освещение, бытовая техника и другие потребители электрической энергии в квартире.', imageUrl: '/media/electricity.webp', videoUrl: '/media/electricity.mp4', tariffRate: 6.1, consumptionNorm: 95.5, measurementUnit: 'кВт·ч', likesCount: 2 },
  { id: 2, name: 'Отопление', description: 'Тепловая энергия на отопление жилого помещения в отопительный период.', imageUrl: '/media/heating.webp', videoUrl: '/media/heating.mp4', tariffRate: 2450, consumptionNorm: 0.016, measurementUnit: 'Гкал', likesCount: 1 },
  { id: 3, name: 'Холодное водоснабжение', description: 'Подача холодной питьевой воды в квартиру по показаниям индивидуального прибора учёта.', imageUrl: '/media/cold-water.avif', videoUrl: '/media/cold-water.mp4', tariffRate: 47.24, consumptionNorm: 4.9, measurementUnit: 'м³', likesCount: 1 },
  { id: 4, name: 'Газоснабжение', description: 'Природный газ для приготовления пищи и подогрева воды.', imageUrl: '/media/gas-supply.avif', videoUrl: '/media/gas-supply.mp4', tariffRate: 8.2, consumptionNorm: 10, measurementUnit: 'м³', likesCount: 1 },
  { id: 5, name: 'Вывоз ТКО', description: 'Вывоз и утилизация твёрдых коммунальных отходов из многоквартирного дома.', imageUrl: '/media/waste-removal.jpg', videoUrl: '/media/waste-removal.mp4', tariffRate: 12.4, consumptionNorm: 0.18, measurementUnit: 'м³', likesCount: 0 },
  { id: 6, name: 'Капитальный ремонт', description: 'Взнос на капитальный ремонт общего имущества многоквартирного дома.', imageUrl: '', videoUrl: '', tariffRate: 24.2, consumptionNorm: 1, measurementUnit: 'м²', likesCount: 2 },
]
