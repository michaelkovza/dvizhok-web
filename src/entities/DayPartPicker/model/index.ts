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
  },
  {
    id: DayPartsIds.DAY,
    title: 'День',
  },
  {
    id: DayPartsIds.EVENING,
    title: 'Вечер',
  },
  {
    id: DayPartsIds.NIGHT,
    title: 'Ночь',
  },
] as const
