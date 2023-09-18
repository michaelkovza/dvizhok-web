import React, { useEffect } from 'react'

import { default as DrawerComponent } from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: VoidFunction
}

export function Drawer({ children, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }, [isOpen])

  return (
    <DrawerComponent
      style={{ background: '#1C1C1E' }}
      size="90%"
      className="h-screen bg-dark"
      open={isOpen}
      direction="bottom"
      onClose={onClose}
    >
      {children}
    </DrawerComponent>
  )
}
