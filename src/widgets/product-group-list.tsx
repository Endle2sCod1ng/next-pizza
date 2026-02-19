import { cn } from "@/lib/utils"

interface ProductGroupListProps {
  className?: string
}

export const ProductGroupList = ({ className }: ProductGroupListProps) => {
  return (
    <div className={cn("", className)}>
      ProductGroupList
    </div>
  )
}