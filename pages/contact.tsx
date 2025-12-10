import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our services or want to provide feedback? Fill out the form and we'll get back to you
            as soon as possible.
          </p>

          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>

          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">123 Food Street, Foodville, Delhi - 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@mycloudmess.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-64 bg-muted rounded-lg overflow-hidden">
            {/* This would be a real map in production */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Map Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
