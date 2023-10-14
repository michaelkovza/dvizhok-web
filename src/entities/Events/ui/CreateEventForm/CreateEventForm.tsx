'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import React from 'react'
import { Typography } from '@/shared/Typography/Typography'

type Form = {
  date: Date
  title: string
  description: string
  place: string
  tags: string[]
  price?: number
}

export function CreateEventForm() {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      date: new Date(),
      title: '',
      description: '',
      place: '',
      price: undefined,
      tags: [],
    },
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <div className="h-screen">
        <Typography className="text-center font-semibold pb-4 pt-2 text-xl">Создать событие</Typography>

        <div className="py-2 px-4">
          <Input {...register('title')} type="text" placeholder="Название мероприятия" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('description')} type="text" placeholder="Краткое описание" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('place')} type="text" placeholder="Адрес" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('price')} type="number" placeholder="Цена" />
        </div>

        {/* TODO доделать инпуты для ввода даты и времени */}
        {/*<div className="flex justify-between gap-2.5 py-2 px-4">*/}
        {/*  <InputMask mask="99/99/9999" {...register('date')}>*/}
        {/*    <Input type="text" placeholder="Дата" disableUnderline />*/}
        {/*  </InputMask>*/}
        {/*  <Input {...register('time')} type="time" placeholder="Время" step={900} />*/}
        {/*</div>*/}

        <div className="py-2">
          <div className="flex justify-between align-center px-4 pb-2">
            <p className="font-semibold">Выберите 3 тега</p>
            <Button type="link">Смотреть все</Button>
          </div>
          <TagsList />
        </div>
      </div>
      <div className="sticky bottom-0 p-4">
        <Button type="submit">Создать</Button>
      </div>
    </form>
  )
}
