import { Slider as SliderMaterial } from '@material-tailwind/react'

type Props = {
  min?: number
  max?: number
}

export function Slider({ min = 0, max = 15 }: Props) {
  return (
    <SliderMaterial
      step={1}
      size="lg"
      defaultValue={5}
      className="text-accent-purple"
      barClassName="rounded bg-[#CCD3FF]"
      thumbClassName="[&::-moz-range-thumb]:rounded[&::-webkit-slider-thumb]:rounded"
      trackClassName="[&::-webkit-slider-runnable-track]:bg-[#272728] [&::-moz-range-track]:bg-[#272728] rounded"
    />
  )
}
