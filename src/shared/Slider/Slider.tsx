import { Slider as SliderMaterial, SliderProps } from '@material-tailwind/react'
import { ForwardedRef, forwardRef } from 'react'

type Props = SliderProps & {
  forwardedRef?: ForwardedRef<HTMLDivElement>
}

function SliderComponent({ forwardedRef, ...props }: Props) {
  return (
    <SliderMaterial
      {...props}
      ref={forwardedRef}
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
  <SliderComponent {...props} forwardedRef={ref} />
))

Slider.displayName = 'Slider'
