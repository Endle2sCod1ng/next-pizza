import { cn } from "@/lib/utils"
import { AppContainer } from "../layouts/container"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("", className)}>
      <AppContainer className="flex items-center justify-between py-8">

        <div className="flex items-center gap-4">
          <Image src={"next.svg"} alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">{"This is incredibly delicious!"}</p>
            {/* <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p> */}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="cursor-pointer flex items-center gap-3" variant={"outline"}><User size={35} />{"Login"}</Button>

          <div>
            <Button className="cursor-pointer group relative">
              <b>520 Р</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>

      </AppContainer>
    </header>
  )
}