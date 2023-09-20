'use client'

import { Button } from '@material-tailwind/react'
import { useCallback } from 'react'
import NiceModal from '@ebay/nice-modal-react'
import { Drawer } from '@/shared/Drawer/Drawer'
import { CreateEventForm } from '@/entities/Events/ui/CreateEventForm/CreateEventForm'

export function CreateEventButton() {
  const showCreateEventForm = useCallback(() => {
    NiceModal.show(Drawer, { children: <CreateEventForm /> })
  }, [])

  return (
    <Button variant="text" onClick={showCreateEventForm}>
      Создать
    </Button>
  )
}
