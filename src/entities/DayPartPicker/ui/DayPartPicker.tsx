import { dayParts } from '@/entities/DayPartPicker/model'
import { Button } from '@/shared/Button/Button'

// TODO добавить иконку и обработчик
export function DayPartPicker() {
  return (
    <div className="flex space-between gap-2.5">
      {dayParts.map(({ id, title }) => (
        <Button key={id}>
          <div>{title}</div>
        </Button>
      ))}
    </div>
  )
}
