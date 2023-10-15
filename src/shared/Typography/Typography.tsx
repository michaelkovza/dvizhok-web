'use client'

import { Typography as MaterialTypography, TypographyProps } from '@material-tailwind/react'

export function Typography(props: Omit<TypographyProps, 'ref'>) {
  const { children } = props

  return <MaterialTypography {...props}>{children}</MaterialTypography>
}
