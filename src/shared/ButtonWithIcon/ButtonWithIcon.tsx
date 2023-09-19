import Image, { StaticImageData } from 'next/image'
import { Typography } from '@/shared/Typography/Typography'

type Props = {
  handleOnClick: VoidFunction
  icon: StaticImageData
  text: string
  isActive?: boolean
}

export function ButtonWithIcon({ handleOnClick, icon, text, isActive }: Props) {
  return (
    <button
      className={`${isActive ? 'bg-accent-purple' : 'bg-accent-dark'}  flex items-center gap-2 rounded py-2 px-2.5`}
      onClick={handleOnClick}
    >
      <Image src={icon} alt="" />
      <Typography className="text-white">{text}</Typography>
    </button>
  )
}
