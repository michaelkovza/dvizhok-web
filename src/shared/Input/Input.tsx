import { ForwardedRef, forwardRef, HTMLProps } from 'react'
import React from 'react'

type InputComponentProps = HTMLProps<HTMLInputElement>

type Props = InputComponentProps & {
  ref: ForwardedRef<HTMLInputElement>
}

function InputComponent({ forwardedRef, ...props }: Props) {
  return (
    <input
      className="w-full bg-accent-dark rounded p-3 outline-0 border border-border-input"
      ref={forwardedRef}
      {...props}
    />
  )
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <InputComponent forwardedRef={ref} {...props} />
))

Input.displayName = 'Input'
