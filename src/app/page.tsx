'use client'

import Home from '@/app/(withNavigation)/home/page'
import WithNavigationLayout from '@/app/(withNavigation)/layout'
import NiceModal from '@ebay/nice-modal-react'

export default function Main() {
  return (
    <NiceModal.Provider>
      <WithNavigationLayout>
        <Home />
      </WithNavigationLayout>
    </NiceModal.Provider>
  )
}
