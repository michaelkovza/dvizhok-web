'use client'

import React, { useCallback } from 'react'
import { Button } from '@material-tailwind/react'
import { Drawer } from '@/shared/Drawer/Drawer'

import { FiltersForm } from '@/entities/Filters/ui/FiltersForm/FiltersForm'
import NiceModal from '@ebay/nice-modal-react'
import { Icon } from '@/shared/Icon/Icon'

export function FiltersButton() {
  const showFiltersForm = useCallback(() => {
    NiceModal.show(Drawer, { children: <FiltersForm /> })
  }, [])

  return (
    <Button
      className="p-0 ml-auto text-accent-purple text-lg normal-case font-normal"
      color="white"
      variant="text"
      onClick={showFiltersForm}
    >
      <Icon name="filters" />
    </Button>
  )
}
