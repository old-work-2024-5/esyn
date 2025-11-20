import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">ESYN</h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Empowering youth in Scarborough and West Hill through sports, education, and mentorship.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="#programs" className="hover:text-white transition-colors">
                  After-School Program
                </Link>
              </li>
              <li>
                <Link href="#mentorship" className="hover:text-white transition-colors">
                  Youth Mentorship
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="hover:text-white transition-colors">
                  Volunteer Opportunities
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                Email:{" "}
                <a
                  href="mailto:esynttoronto@gmail.com"
                  className="hover:text-white underline decoration-primary-foreground/30"
                >
                  esynttoronto@gmail.com
                </a>
              </li>
              <li>Location: Scarborough & West Hill, Toronto</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Join Us</h4>
            <p className="text-sm text-primary-foreground/80">
              Ready to make a difference? Reach out today to join our programs or become a volunteer.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ESYN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
