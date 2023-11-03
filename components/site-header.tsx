import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-primary">      
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-start justify-start space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
                src="/images/logo.png"
                alt="demo"
                height={40}
                width={40}
                className="h-6 w-6"
            />
            <span className="inline-block font-bold text-white">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
         <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex items-center justify-end space-x-4 md:flex-1">
          <nav className="hidden items-center space-x-1 md:flex">
             <Button className="btn-primary bg_primary px-4"> Get The App </Button>           
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
