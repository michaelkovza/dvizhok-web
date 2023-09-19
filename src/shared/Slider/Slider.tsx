import { Slider as SliderMaterial, SliderProps } from '@material-tailwind/react'
import { ForwardedRef, forwardRef } from 'react'

type Props = SliderProps & {
  ref: ForwardedRef<HTMLDivElement>
}

function SliderComponent({ forwardedRef, ...props }: Props) {
  return (
    <SliderMaterial
      ref={forwardedRef}
      {...props}
      step={1}
      min={1}
      max={100}
      size="lg"
      className="text-accent-purple"
      barClassName="rounded bg-[#CCD3FF]"
      thumbClassName="[&::-moz-range-thumb]:rounded[&::-webkit-slider-thumb]:rounded"
      trackClassName="[&::-webkit-slider-runnable-track]:bg-[#272728] [&::-moz-range-track]:bg-[#272728] rounded"
    />
  )
}

export const Slider = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <SliderComponent forwardedRef={ref} {...props} />
))

Slider.displayName = 'Slider'
