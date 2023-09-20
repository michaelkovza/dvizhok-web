'use client'

import { Button } from '@material-tailwind/react'
import { useCallback } from 'react'
import NiceModal from '@ebay/nice-modal-react'
import { Drawer } from '@/shared/Drawer/Drawer'
import { CreateEventForm } from '@/entities/Events/ui/CreateEventForm/CreateEventForm'
import { Icon } from '@/shared/Icon/Icon'

export function CreateEventButton() {
  const showCreateEventForm = useCallback(() => {
    NiceModal.show(Drawer, { children: <CreateEventForm /> })
  }, [])

  return (
    <Button className="p-0" variant="text" onClick={showCreateEventForm}>
      <Icon name="plus" />
    </Button>
  )
}
