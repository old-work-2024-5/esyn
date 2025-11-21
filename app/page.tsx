import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GallerySlideshow } from "@/components/gallery-slideshow";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section - Inspired by Casa Portufornia & Typeform split */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Empowering Scarborough Youth
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                  Build Skills. <br />
                  <span className="text-primary">Stay Active.</span> <br />
                  Make an Impact.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] leading-relaxed">
                  Join our free programs in West Hill and Scarborough. From
                  sports and reading to mentorship and volunteering, we're here
                  to help youth thrive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="text-base h-12 px-8">
                    <Link href="mailto:esynttoronto@gmail.com">
                      Join a Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base h-12 px-8 bg-transparent border-primary text-primary hover:bg-primary/5"
                  >
                    <Link href="#volunteer">Volunteer With Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/avvenue/img3 (5).jpg"
                  alt="Gallery image 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement - Inspired by Closet Creations typography */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Dedicated to Creativity, Culture & Growth in Scarborough.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              ESYN connects youth with local organizations, mentors, and
              opportunities. We believe that when life and learning move in
              sync, the best growth happens. That's why we created spaces to
              pause, reset, and spark the thinking that fuels not just school,
              but whole ways of being.
            </p>
            {/* Added Gallery Slideshow to the main page */}
            <div className="mt-12">
              <GallerySlideshow />
              <div className="mt-8">
                <Button
                  asChild
                  variant="link"
                  className="text-primary font-semibold"
                >
                  <Link href="/gallery">View Full Gallery &rarr;</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid - Inspired by Avencio & Casa Portufornia */}
        <section id="programs" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Our Programs
                </h2>
                <p className="text-muted-foreground mt-2">
                  Free opportunities for youth to grow and connect.
                </p>
              </div>
              <Button
                asChild
                variant="link"
                className="text-primary p-0 h-auto font-semibold"
              >
                <Link href="mailto:esynttoronto@gmail.com">
                  Register for all programs &rarr;
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Program 1: After School */}
              <div className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="aspect-[3/2] relative bg-muted">
                  <Image
                    src="/avvenue/img3 (2).jpg"
                    alt="Gallery image 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-primary">
                    Weekly
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    After-School Sports & Reading
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Youth can build skills, stay active, and get academic
                    support in a safe, welcoming environment.
                  </p>
                  <div className="space-y-3 text-sm mb-6 border-t border-border pt-4">
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Every Monday</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>3:15 PM – 5:15 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Willow Park Public School</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="mailto:esynttoronto@gmail.com?subject=Register for After-School Program">
                      Register Now
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Program 2: Mentorship */}
              <div
                id="mentorship"
                className="group relative bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[3/2] relative bg-muted">
                  <Image
                    src="/avvenue/img3 (3).jpg"
                    alt="Gallery image 3"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                    Upcoming
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Youth Mentorship Session
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    Connect with mentors, build confidence, and gain guidance
                    for school, leadership, and life.
                  </p>
                  <div className="space-y-3 text-sm mb-6 border-t border-border pt-4">
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>December 10</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>4:00 PM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Danzig Youth Hub</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="mailto:esynttoronto@gmail.com?subject=Register for Mentorship Session">
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Program 3: Volunteer */}
              <div
                id="volunteer"
                className="group relative bg-primary text-primary-foreground rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex flex-col h-full justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 p-32 bg-black/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-lg mb-6">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Need Volunteer Hours?
                    </h3>
                    <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                      ESYN connects youth with local organizations in West Hill
                      and Scarborough. Sign up to gain experience, build skills,
                      and make a community impact.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        <span>Gain valuable experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        <span>Build leadership skills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                        <span>Support your community</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    asChild
                    variant="secondary"
                    className="w-full relative z-10 font-semibold"
                  >
                    <Link href="mailto:ESYNtoronto@gmail.com?subject=Volunteer Inquiry">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Inspired by Typeform minimal CTA */}
        <section
          id="contact"
          className="py-20 md:py-32 container mx-auto px-4 md:px-6"
        >
          <div className="bg-muted rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to get involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a student looking for programs, a parent seeking
              support, or a community member wanting to help, we'd love to hear
              from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="mailto:esynttoronto@gmail.com">Email Us Today</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Serving Scarborough & West Hill •{" "}
              <a
                href="mailto:esynttoronto@gmail.com"
                className="underline hover:text-primary"
              >
                esynttoronto@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
