import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md shadow-primary/40 hover:shadow-lg hover:shadow-primary/50 hover:scale-105",
        secondary:
          "border-transparent bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-md shadow-secondary/40 hover:shadow-lg hover:shadow-secondary/50 hover:scale-105",
        destructive:
          "border-transparent bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-400/50 hover:shadow-lg hover:shadow-red-500/60 hover:scale-105 focus-visible:ring-red-500",
        outline:
          "text-foreground border border-input shadow-sm shadow-black/10 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-accent/40 hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
