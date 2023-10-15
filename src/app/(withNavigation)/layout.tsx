import { Navigation } from '@/widgets/Navigation/Navigation'

export default function WithNavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
