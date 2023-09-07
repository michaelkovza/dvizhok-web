'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { TagsList } from '@/entities/Tags/ui/TagsList/TagsList'
import React from 'react'

export default function CreateEvent() {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <div className="h-screen">
        <div className="py-2 px-4">
          <Input {...register('title')} type="text" placeholder="Название мероприятия" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('description')} type="text" placeholder="Краткое описание" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('location')} type="text" placeholder="Адрес" />
        </div>

        <div className="py-2 px-4">
          <Input {...register('location')} type="number" placeholder="Цена" />
        </div>

        <div className="flex justify-between gap-2.5 py-2 px-4">
          <Input {...register('date')} type="date" placeholder="Дата" min={Date.now()} />
          <Input {...register('time')} type="time" placeholder="Время" />
        </div>

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
