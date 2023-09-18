'use client'

import { Typography as MaterialTypography, TypographyProps } from '@material-tailwind/react'

export function Typography(props: TypographyProps) {
  const { children, ...restProps } = props

  return <MaterialTypography {...restProps}>{children}</MaterialTypography>
}
