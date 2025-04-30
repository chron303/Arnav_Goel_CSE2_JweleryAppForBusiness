import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Please feel free to reach out with any questions, concerns, or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Our Store</h3>
                  <p className="text-muted-foreground">
                    123 Jewelry Lane, Diamond District
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">Monday to Saturday, 10am to 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground font-medium">jewellersharsiddhi@gmail.com</p>
                  <p className="text-muted-foreground">We'll respond as soon as possible</p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="font-medium mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
