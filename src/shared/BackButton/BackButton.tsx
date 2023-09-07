import Image from 'next/image'
import Back from '../../../public/back.svg'

type Props = {
  handleOnBack: VoidFunction
}

export function BackButton({ handleOnBack }: Props) {
  return (
    <button className="mr-a" onClick={handleOnBack}>
      <Image src={Back} alt="" />
    </button>
  )
}
