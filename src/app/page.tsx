import Home from '@/app/(withNavigation)/(withModal)/home/page'
import WithNavigationLayout from '@/app/(withNavigation)/layout'

export default function Main() {
  return (
    <WithNavigationLayout>
      <Home />
    </WithNavigationLayout>
  )
}
