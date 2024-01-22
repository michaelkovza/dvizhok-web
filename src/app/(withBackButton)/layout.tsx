import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Back from '../../../public/back.svg'

type Props = {
  children: ReactNode
}

function WithBackButtonLayout({ children }: Props) {
  // FIXME поправить позицию top у Link
  return (
    <div>
      <Link className="absolute left-4 top-5" href="/">
        <Image src={Back} alt="На главную" />
      </Link>

      {children}
    </div>
  )
}

export default WithBackButtonLayout
