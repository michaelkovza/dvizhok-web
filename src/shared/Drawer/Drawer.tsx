'use client'

import React, { ReactNode, useEffect } from 'react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

import { default as DrawerComponent } from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type Props = {
  children: ReactNode
}

export const Drawer = NiceModal.create(({ children }: Props) => {
  const { hide, visible } = useModal()

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }, [visible])

  return (
    <DrawerComponent
      style={{ background: '#1C1C1E' }}
      size="90%"
      className="h-screen bg-dark"
      open={visible}
      direction="bottom"
      onClose={hide}
    >
      {children}
    </DrawerComponent>
  )
})
