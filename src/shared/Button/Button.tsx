import React, { ReactNode } from 'react'
import classNames from 'classnames'
type Props = {
  children: ReactNode
  bgColor?: 'accent-purple' | 'accent-dark'
  className?: string
  type?: 'primary' | 'link' | 'submit'
}

export function Button({ className, children, bgColor = 'accent-purple', type = 'primary' }: Props) {
  switch (type) {
    case 'submit':

    case 'primary': {
      return <button className={classNames(`bg-${bgColor} w-full rounded p-3`, className)}>{children}</button>
    }

    case 'link': {
      return <button className={classNames('text-accent-purple', className)}>{children}</button>
    }

    default: {
      console.error(`Unexpected type: ${type}`)
    }
  }
}
