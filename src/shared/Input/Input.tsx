import { ForwardedRef, forwardRef, HTMLProps } from 'react'
import React from 'react'
import { Input as MaterialInput } from '@material-tailwind/react'

type InputComponentProps = HTMLProps<HTMLInputElement>

type Props = InputComponentProps & {
  ref: ForwardedRef<HTMLInputElement>
}

function InputComponent({ forwardedRef, ...props }: Props) {
  return (
    <MaterialInput
      color="white"
      containerProps={{
        className: 'min-w-[auto]',
      }}
      className="!border !border-border-input bg-transparent focus:!border-border-input focus:!border-t-border-input"
      ref={forwardedRef}
      {...props}
      labelProps={{
        className: 'hidden',
      }}
    />
  )
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputComponent forwardedRef={ref} {...props} />
))

Input.displayName = 'Input'
