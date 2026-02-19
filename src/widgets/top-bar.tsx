import { cn } from "@/lib/utils"
import { Categories } from "../shared/categories"
import { SortPopup } from "../features/sort-popup"
import { AppContainer } from "../layouts/container"

interface TopBarProps {
  className?: string
}

export const TopBar = ({ className }: TopBarProps) => {
  return (
    <div className={cn("sticky top-0 bg-white py-5   shadow-lg shadow-black/10 z-10", className)}>
      <AppContainer className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </AppContainer>
    </div>
  )
}