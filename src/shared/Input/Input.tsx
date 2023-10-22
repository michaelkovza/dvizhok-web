import { ForwardedRef, forwardRef } from 'react'
import React from 'react'
import { Input as MaterialInput, InputProps } from '@material-tailwind/react'

type InputComponentProps = InputProps

type Props = InputComponentProps & {
  forwardedRef?: ForwardedRef<HTMLInputElement>
}

function InputComponent({ forwardedRef, ...props }: Props) {
  return <MaterialInput {...props} ref={forwardedRef} color="white" crossOrigin="false" size="lg" />
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputComponent {...props} forwardedRef={ref} />
))

Input.displayName = 'Input'
