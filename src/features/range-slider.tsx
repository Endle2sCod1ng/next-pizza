import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface RangeSliderProps {
  className?: string
}

export const RangeSlider = ({ className }: RangeSliderProps) => {
  return (
    <div className={cn("", className)}>
      <Slider />
    </div>
  )
}