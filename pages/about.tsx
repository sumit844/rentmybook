import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">About MyCloudMess</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            MyCloudMess was founded in 2022 with a simple mission: to provide delicious, homemade meals at affordable
            prices. We understand the challenges of finding quality food within a budget, especially for students and
            working professionals.
          </p>
          <p className="text-gray-600 mb-4">
            What started as a small kitchen serving a handful of customers has now grown into a beloved food service
            trusted by hundreds of people daily. Our commitment to quality, taste, and affordability remains unchanged.
          </p>
          <p className="text-gray-600">
            We take pride in our traditional recipes, fresh ingredients, and the smile we bring to our customers' faces
            with every meal we serve.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image src="/about-kitchen.svg?height=400&width=600" alt="Our Kitchen" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">
                  All our meals are priced under ₹60, making quality food accessible to everyone.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">We use only the freshest ingredients sourced from local markets daily.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Homemade Taste</h3>
                <p className="text-gray-600">
                  Our recipes are traditional and prepared with love, just like home-cooked meals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Rahul Sharma", role: "Founder & Chef", image: "/team-member1.svg?height=200&width=200" },
            { name: "Priya Patel", role: "Operations Manager", image: "/team-member2.svg?height=200&width=200" },
            { name: "Amit Singh", role: "Head Chef", image: "/team-member3.svg?height=200&width=200" },
            { name: "Neha Gupta", role: "Customer Relations", image: "/team-member4.svg?height=200&width=200" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
