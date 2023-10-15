import { dayParts, DayPartsIds } from '@/entities/DayPartPicker/model'
import { ButtonWithIcon } from '@/shared/ButtonWithIcon/ButtonWithIcon'

type Props = {
  activeDayPart: keyof typeof DayPartsIds
  handleOnClick: (value: keyof typeof DayPartsIds) => void
}

export function DayPartPicker({ handleOnClick, activeDayPart }: Props) {
  return (
    <div className="flex justify-between gap-2.5 w-full">
      {dayParts.map(({ id, title, icon }) => {
        return (
          <ButtonWithIcon
            isActive={activeDayPart === id}
            key={id}
            handleOnClick={() => handleOnClick(id)}
            icon={icon}
            text={title}
          />
        )
      })}
    </div>
  )
}
