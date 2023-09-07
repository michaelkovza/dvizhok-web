import Image from 'next/image'
import Back from '../../../public/back.svg'

type Props = {
  handleOnBack: VoidFunction
}

export function BackButton({ handleOnBack }: Props) {
  return (
    <button className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={handleOnBack}>
      <Image src={Back} alt="" />
    </button>
  )
}
