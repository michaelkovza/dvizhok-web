import MorningIcon from '../../../../public/morning.svg'
import DayIcon from '../../../../public/day.svg'
import EveningIcon from '../../../../public/evening.svg'
import NightIcon from '../../../../public/night.svg'

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
    icon: MorningIcon,
  },
  {
    id: DayPartsIds.DAY,
    title: 'День',
    icon: DayIcon,
  },
  {
    id: DayPartsIds.EVENING,
    title: 'Вечер',
    icon: EveningIcon,
  },
  {
    id: DayPartsIds.NIGHT,
    title: 'Ночь',
    icon: NightIcon,
  },
] as const
