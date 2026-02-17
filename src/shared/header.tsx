import { cn } from "@/lib/utils"
import { Container } from "../layouts/container"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8">

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
        </div>
      </Container>
    </header>
  )
}