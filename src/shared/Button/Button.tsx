import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
type Props = {
  children: PropsWithChildren
  bgColor?: 'accent-purple' | 'accent-dark'
  className?: string
}

export function Button({ className, children, bgColor = 'accent-purple' }: Props) {
  return <button className={classNames(`bg-${bgColor} w-full rounded p-3`, className)}>{children}</button>
}
