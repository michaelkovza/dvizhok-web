'use client'

import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { useForm, Controller } from 'react-hook-form'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import { DayPartPicker } from '@/entities/DayPartPicker/ui/DayPartPicker'
import React, { useCallback } from 'react'
import { Typography } from '@/shared/Typography/Typography'
import { DayPartsIds } from '@/entities/DayPartPicker/model'
import { Slider } from '@/shared/Slider/Slider'
import { getSelectedTags } from '@/entities/Tags/lib/getSelectedTags'

type Form = {
  tags: string[]
  from?: string
  to?: string
  dayPart: keyof typeof DayPartsIds
  distance: string
  date: Date
}

export function FiltersForm() {
  const { control, handleSubmit, setValue, watch, register, getValues } = useForm<Form>({
    defaultValues: {
      from: undefined,
      to: undefined,
      distance: '10',
      dayPart: DayPartsIds.DAY,
      date: new Date(),
      tags: [],
    },
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  const onTagSelect = useCallback(
    (tag: string) => {
      const tagsInState = getValues('tags')

      setValue('tags', getSelectedTags(tagsInState, tag))
    },
    [getValues, setValue],
  )

  return (
    <form onSubmit={onSubmit}>
      <div className="h-screen">
        <Typography className="text-center font-semibold pb-4 pt-2 text-xl">Фильтры</Typography>

        <div className="px-4">
          <p className="font-semibold pb-4">Выбрать теги</p>
        </div>
        <div className="pb-6">
          <Controller
            render={() => {
              return <TagsList onTagSelect={onTagSelect} />
            }}
            name="tags"
            control={control}
          />
        </div>

        <div className="px-4">
          <p className="font-semibold pb-4">Выберите дату</p>
          <div className="flex justify-between gap-2.5 pb-6">
            <Input {...register('date')} type="date" placeholder="Дата" />
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
            <Input {...register('from')} type="number" placeholder="От" />
            <Input {...register('to')} type="number" placeholder="До" />
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-semibold">Расстояние</p>
            <p className="font-semibold">{watch('distance')} км</p>
          </div>

          <Controller
            name="distance"
            control={control}
            render={({ field }) => {
              return (
                <Slider
                  {...field}
                  onChange={({ target }) => {
                    setValue('distance', target.value)
                  }}
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
