'use client'

import React, { ReactNode, useEffect } from 'react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

import dynamic from 'next/dynamic'

const DrawerComponent = dynamic(() => import('react-modern-drawer'), { ssr: false })

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
