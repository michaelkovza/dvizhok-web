export enum DayPartsIds {
  MORNING = 'MORNING',
  DAY = 'DAY',
  EVENING = 'EVENING',
  NIGHT = 'NIGHT',
}

export const dayParts = [
  {
    id: DayPartsIds.MORNING,
    title: 'Утро',
    icon: 'morning',
  },
  {
    id: DayPartsIds.DAY,
    title: 'День',
    icon: 'day',
  },
  {
    id: DayPartsIds.EVENING,
    title: 'Вечер',
    icon: 'evening',
  },
  {
    id: DayPartsIds.NIGHT,
    title: 'Ночь',
    icon: 'night',
  },
] as const
