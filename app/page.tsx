import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeartHandshake, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f1eb]">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white">
        <Link className="flex items-center justify-center" href="#">
          <div className="w-12 h-12 bg-[#0a3a3a] rounded-full flex items-center justify-center mr-3">
            <HeartHandshake className="h-6 w-6 text-[#c9a55c]" />
          </div>
          <span className="text-xl font-semibold text-[#0a3a3a]">FelEsia Rodriguez Therapy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-[#0a3a3a] hover:text-[#c9a55c] transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium text-[#0a3a3a] hover:text-[#c9a55c] transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium text-[#0a3a3a] hover:text-[#c9a55c] transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#0a3a3a] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to FelEsia Rodriguez Therapy
                </h1>
                <p className="mx-auto max-w-[700px] text-[#c9a55c] md:text-xl">
                  Empowering you to overcome challenges and live your best life through compassionate therapy.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#c9a55c] text-[#0a3a3a] hover:bg-[#b08d3f]">Book a Session</Button>
                <Button variant="outline" className="text-white border-white hover:bg-[#0a3a3a]/50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0a3a3a]">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Individual Therapy", "Couples Counseling", "Anxiety Management"].map((service, index) => (
                <div key={index} className="bg-[#f5f1eb] p-6 rounded-lg border border-[#c9a55c]">
                  <h3 className="text-xl font-semibold mb-2 text-[#0a3a3a]">{service}</h3>
                  <p className="text-[#0a3a3a]/80">Tailored sessions to help you achieve personal growth and well-being.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3a3a] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#c9a55c]">About FelEsia Rodriguez</h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FelEsia Rodriguez is a licensed therapist with over 10 years of experience. She specializes in
                  helping individuals and couples overcome challenges and build stronger, healthier relationships.
                  Her compassionate approach and evidence-based techniques have helped countless clients achieve
                  personal growth and emotional well-being.
                </p>
              </div>
              <div className="w-full h-full min-h-[300px] bg-[#c9a55c]/20 rounded-lg"></div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f1eb]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0a3a3a]">Contact Us</h2>
            <div className="mx-auto max-w-[600px] bg-[#0a3a3a] p-8 rounded-lg">
              <form className="space-y-4">
                <Input placeholder="First Name" className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]" />
                <Input placeholder="Last Name" className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]" />
                <Input type="email" placeholder="Your Email Address" className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]" />
                <Textarea placeholder="Your Message" className="bg-white border-[#c9a55c] text-[#0a3a3a] placeholder-[#0a3a3a]/50 focus:border-[#c9a55c]" />
                <Button type="submit" className="w-full bg-[#c9a55c] text-[#0a3a3a] hover:bg-[#b08d3f]">Sign Up</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#f5f1eb] text-[#0a3a3a]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="#" className="text-[#c9a55c] hover:text-[#b08d3f]">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#c9a55c] hover:text-[#b08d3f]">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                HIPAA
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                RIGHTS
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                TERMS
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                PRIVACY
              </Link>
            </nav>
            <div className="text-center">
              <p className="text-sm text-[#0a3a3a]/60">info@felesiarodrigue.com</p>
              <p className="text-sm">© FelEsia Rodriguez Therapy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}