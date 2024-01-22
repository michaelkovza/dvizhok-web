'use client'

import { Controller, useForm } from 'react-hook-form'
import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import React, { useCallback } from 'react'
import { Typography } from '@/shared/Typography/Typography'
import { getSelectedTags } from '@/entities/Tags/lib/getSelectedTags'
import InputMask from 'react-input-mask'
// import DatePicker from 'react-date-picker'

import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { DayPartsIds } from '@/entities/DayPartPicker/model'
import { DayPartPicker } from '@/entities/DayPartPicker/ui/DayPartPicker'

type Form = {
  date: string
  title: string
  description: string
  address: string
  tags: string[]
  price?: number
  dayPart: keyof typeof DayPartsIds
}

function CreateEvent() {
  const { register, handleSubmit, control, getValues, setValue } = useForm<Form>({
    defaultValues: {
      dayPart: DayPartsIds.EVENING,
      date: new Date().toLocaleDateString('ru'),
      title: '',
      description: '',
      address: '',
      price: undefined,
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
        <Typography className="text-center font-semibold px-4 py-3 text-xl">Создать событие</Typography>

        <div className="py-2 px-4">
          <Input {...register('title')} type="text" label="Название мероприятия" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('description')} type="text" label="Краткое описание" maxLength={150} />
        </div>

        <div className="py-2 px-4">
          <Input {...register('address')} type="text" label="Адрес" />
        </div>

        {/* TODO сделать выбор адреса на карте */}
        {/*<div className="py-2 px-4">*/}
        {/*  <Input {...register('place')} type="text" placeholder="Адрес" />*/}
        {/*</div>*/}

        <div className="py-2 px-4">
          <Input {...register('price')} type="number" label="Стоимость" />
        </div>

        <div className="py-2 px-4">
          <Controller
            render={({ field: { value, onChange } }) => {
              return (
                <InputMask mask="99.99.9999" {...register('date')} value={value} onChange={onChange}>
                  <Input label="Дата (дд.мм.гггг)" />
                </InputMask>
              )
            }}
            name="date"
            control={control}
          />
        </div>
        <div className="py-2 px-4">
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

        {/*<div className="py-2 px-4">*/}
        {/*  <Controller*/}
        {/*    render={({ field: { value, onChange } }) => {*/}
        {/*      return (*/}
        {/*        <DatePicker*/}
        {/*          className="[&>*:first-child]:bg-red"*/}
        {/*          clearIcon={null}*/}
        {/*          value={value}*/}
        {/*          format="dd.MM.yyyy"*/}
        {/*          onChange={onChange}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    }}*/}
        {/*    name="date"*/}
        {/*    control={control}*/}
        {/*  />*/}
        {/*</div>*/}

        {/* TODO шторка с выбором всех тегов */}
        <div className="py-2">
          <div className="flex justify-between align-center px-4 pb-2">
            <p className="font-semibold">Выберите 3 тега</p>
            <Button type="link">Смотреть все</Button>
          </div>
          <Controller
            render={() => {
              return <TagsList onTagSelect={onTagSelect} />
            }}
            name="tags"
            control={control}
          />
        </div>
      </div>
      <div className="sticky bottom-0 p-4">
        <Button type="submit">Создать</Button>
      </div>
    </form>
  )
}

export default CreateEvent
