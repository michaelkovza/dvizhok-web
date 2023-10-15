import { ForwardedRef, forwardRef, HTMLProps } from 'react'
import React from 'react'
import { Input as MaterialInput } from '@material-tailwind/react'

type InputComponentProps = HTMLProps<HTMLInputElement>

type Props = InputComponentProps & {
  forwardedRef?: ForwardedRef<HTMLInputElement>
}

function InputComponent({ forwardedRef, ...props }: Props) {
  console.log(props.value)

  return (
    <MaterialInput
      color="white"
      containerProps={{
        className: 'min-w-[auto]',
      }}
      className="!border !border-border-input bg-transparent focus:!border-border-input focus:!border-t-border-input"
      labelProps={{
        className: 'hidden',
      }}
      {...props}
      ref={forwardedRef}
    />
  )
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputComponent {...props} forwardedRef={ref} />
))

Input.displayName = 'Input'
