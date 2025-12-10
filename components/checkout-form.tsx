"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import axios from "axios"

export function CheckoutForm() {
  const { cartItems, clearCart, calculateTotal } = useCart();
  
  const { user } = useAuth()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("cash")

  const total = calculateTotal()
  const deliveryFee = 10
  const grandTotal = total + deliveryFee

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      router.push("/login?redirect=/cart")
      return
    }

    setIsProcessing(true)

    // Simulate processing
    setTimeout(async() => {
      await fetch("/api/order",{method:"POST",body:JSON.stringify(cartItems)})
      clearCart()
      router.push("/checkout/success")
      setIsProcessing(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>

        <div className="pt-4 border-t">
          <form onSubmit={handleCheckout}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea id="address" placeholder="Enter your full address" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" required />
              </div>

              <div>
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="cash" value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi">UPI</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {user ? (
              <Button type="submit" className="w-full mt-6" disabled={isProcessing || cartItems.length === 0}>
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
            ) : (
              <Link href="/login?redirect=/cart">
                <Button className="w-full mt-6">Login to Checkout</Button>
              </Link>
            )}
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
