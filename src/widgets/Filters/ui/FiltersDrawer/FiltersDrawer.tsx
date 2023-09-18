'use client'

import React, { useCallback } from 'react'
import { Button } from '@material-tailwind/react'
import { Drawer } from '@/shared/Drawer/Drawer';

import 'react-modern-drawer/dist/index.css'
import { FiltersForm } from '@/widgets/Filters/ui/FiltersForm/FiltersForm'

export function FiltersDrawer() {
  const [open, setOpen] = React.useState(false)

  const openDrawer = useCallback(() => setOpen(true), [setOpen])
  const closeDrawer = useCallback(() => setOpen(false), [setOpen])

  return (
    <>
      <Button
        className="p-0 ml-auto text-accent-purple text-lg normal-case font-normal"
        color="white"
        variant="text"
        onClick={openDrawer}
      >
        Фильтры
      </Button>
      <Drawer isOpen={open} onClose={closeDrawer}>
        <FiltersForm />
      </Drawer>
    </>
  )
}
