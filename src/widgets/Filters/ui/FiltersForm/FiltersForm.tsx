'use client'

import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { useForm } from 'react-hook-form'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import { DayPartPicker } from '@/entities/DayPartPicker/ui/DayPartPicker'
import React from 'react'
import { Typography } from '@/shared/Typography/Typography'
import { Slider } from '@/shared/Slider/Slider'

type Filters = {
  tags: string[]
  date: string
  time: string
  from: number
  to: number
  direction: number
}

export function FiltersForm() {
  const { register, handleSubmit } = useForm<Filters>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <div className="h-screen">
        <Typography className="text-center font-semibold pb-4">Фильтры</Typography>

        <div className="px-4">
          <p className="font-semibold pb-4">Выбрать теги</p>
        </div>
        <div className="pb-6">
          <TagsList />
        </div>

        <div className="px-4">
          <p className="font-semibold pb-4">Выберите дату</p>
          <div className="flex justify-between gap-2.5 pb-6">
            <Input {...register('date')} type="date" placeholder="Дата" />
            <Input {...register('time')} type="time" placeholder="Время" />
          </div>

          <p className="font-semibold pb-4">Предпочтительное время</p>
          <div className="pb-6">
            <DayPartPicker />
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-semibold">Цена</p>
            <p className="font-semibold">₽</p>
          </div>
          <div className="flex justify-between gap-2.5 pb-6">
            <Input type="number" placeholder="От" {...register('from')} />
            <Input type="number" placeholder="До" {...register('to')} />
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-semibold">Расстояние</p>
            <p className="font-semibold">15км</p>
          </div>

          <Slider />

        </div>
      </div>
      <div className="sticky bottom-0 p-4">
        <Button type="submit">Найти</Button>
      </div>
    </form>
  )
}
