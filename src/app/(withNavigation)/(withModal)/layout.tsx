'use client'

import NiceModal from '@ebay/nice-modal-react'

export default function withModal({ children }: { children: React.ReactNode }) {
  return (
    <NiceModal.Provider>
      <div>{children}</div>
    </NiceModal.Provider>
  )
}
