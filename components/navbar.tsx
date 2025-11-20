import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">ESYN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#programs" className="hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/#volunteer" className="hover:text-primary transition-colors">
            Volunteer
          </Link>
          <Link href="/#mentorship" className="hover:text-primary transition-colors">
            Mentorship
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/#contact">Get Involved</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/#programs" className="text-lg font-medium hover:text-primary">
                Programs
              </Link>
              <Link href="/gallery" className="text-lg font-medium hover:text-primary">
                Gallery
              </Link>
              <Link href="/#volunteer" className="text-lg font-medium hover:text-primary">
                Volunteer
              </Link>
              <Link href="/#mentorship" className="text-lg font-medium hover:text-primary">
                Mentorship
              </Link>
              <Link href="/#contact" className="text-lg font-medium hover:text-primary">
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="/#contact">Get Involved</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
