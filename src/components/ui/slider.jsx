"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sliderVariants = cva(
  "relative flex touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
  {
    variants: {
      width: {
        xs: "w-16",
        sm: "w-24", 
        md: "w-32",
        lg: "w-48",
        xl: "w-64",
        "2xl": "w-80",
        full: "w-full",
        auto: "w-auto",
      },
    },
    defaultVariants: {
      width: "full",
    },
  }
)

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  width = "full",
  ...props
}) {
  const _values = React.useMemo(() =>
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max], [value, defaultValue, min, max])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(sliderVariants({ width }), className)}
      {...props}>
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider }