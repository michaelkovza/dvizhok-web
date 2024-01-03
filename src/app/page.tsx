import Home from '@/app/(withNavigation)/(withModal)/home/page'
import WithNavigationLayout from '@/app/(withNavigation)/layout'
// import NiceModal from '@ebay/nice-modal-react'

export default function Main() {
  return (
    <WithNavigationLayout>
      <Home />
    </WithNavigationLayout>
  )
}
