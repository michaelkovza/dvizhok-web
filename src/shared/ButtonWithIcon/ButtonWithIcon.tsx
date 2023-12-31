import { Typography } from '@/shared/Typography/Typography'
import { Icon, IconName } from '@/shared/Icon/Icon'

type Props = {
  handleOnClick: VoidFunction
  icon: IconName
  text: string
  isActive?: boolean
}

export function ButtonWithIcon({ handleOnClick, icon, text, isActive }: Props) {
  return (
    <button
      className={`${isActive ? 'bg-accent-purple' : 'bg-accent-dark'}  flex items-center gap-2 rounded py-2 px-2.5`}
      onClick={handleOnClick}
    >
      <Icon name={icon} />
      <Typography className="text-white">{text}</Typography>
    </button>
  )
}
