import { cn } from "@/lib/utils"

interface CategoriesProps {
  className?: string
}
const categories = ["Pizza", "Combo", "Appetizers", "Cocktails", "Coffee", "Drinks", "Desserts"]
// const categories2 = ["Пицца", "Комбо", "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты"]
const activeIndex = 0

export const Categories = ({ className }: CategoriesProps) => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>

      {categories.map((c, i) => (
        <a
          href="#"
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i && "bg-white shadow-md shadow-gray-200 text-primary"
          )} key={i}>
          <button>{`${c}`}</button>
        </a>
      ))}
    </div>
  )
}