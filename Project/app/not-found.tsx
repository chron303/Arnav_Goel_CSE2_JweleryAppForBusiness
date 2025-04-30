import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Image
        src="/placeholder.svg?height=150&width=150"
        alt="Harsiddhi Jewellers Logo"
        width={150}
        height={150}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Sorry, the page you're looking for has been archived. Please return to the homepage or contact us for
        assistance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-amber-600 hover:bg-amber-700">
          <Link href="/">Return to Homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
