'use client'

import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { useForm, Controller } from 'react-hook-form'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import { DayPartPicker } from '@/entities/DayPartPicker/ui/DayPartPicker'
import React from 'react'
import { Typography } from '@/shared/Typography/Typography'
import { DayPartsIds } from '@/entities/DayPartPicker/model'
import { Slider } from '@/shared/Slider/Slider'

export function FiltersForm() {
  const { control, handleSubmit, setValue, watch } = useForm<{
    distance: string
    dayPart: keyof typeof DayPartsIds
  }>({
    defaultValues: {
      from: '',
      to: '',
      distance: '10',
      dayPart: DayPartsIds.MORNING,
      date: new Date().toLocaleDateString(),
    },
  })

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
            <Controller
              name="date"
              control={control}
              render={({ field: { value } }) => (
                <>
                  <Input
                    onChange={(e) => {
                      setValue('date', e.target.value)
                    }}
                    value={value}
                    type="date"
                    placeholder="Дата"
                  />
                </>
              )}
            />
          </div>

          <p className="font-semibold pb-4">Предпочтительное время</p>
          <div className="pb-6">
            <Controller
              control={control}
              render={({ field: { value } }) => (
                <DayPartPicker
                  activeDayPart={value}
                  handleOnClick={(value) => {
                    setValue('dayPart', value)
                  }}
                />
              )}
              name="dayPart"
            />
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-semibold">Цена</p>
            <p className="font-semibold">₽</p>
          </div>
          <div className="flex justify-between gap-2.5 pb-6">
            <Controller
              name="from"
              control={control}
              render={({ field: { value } }) => (
                <Input
                  onChange={(e) => {
                    setValue('from', e.target.value)
                  }}
                  value={value}
                  type="number"
                  placeholder="От"
                />
              )}
            />
            <Controller
              name="to"
              control={control}
              render={({ field: { value } }) => (
                <Input
                  onChange={(e) => {
                    setValue('to', e.target.value)
                  }}
                  value={value}
                  type="number"
                  placeholder="До"
                />
              )}
            />
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-semibold">Расстояние</p>
            <p className="font-semibold">{watch('distance')} км</p>
          </div>

          <Controller
            name="distance"
            control={control}
            render={({ field: { value } }) => {
              return (
                <Slider
                  onChange={(e) => {
                    setValue('distance', e.target.value)
                  }}
                  value={value}
                />
              )
            }}
          />
        </div>
      </div>
      <div className="sticky bottom-0 p-4">
        <Button type="submit">Найти</Button>
      </div>
    </form>
  )
}
