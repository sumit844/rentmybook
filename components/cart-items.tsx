"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { useEffect } from "react"

export function CartItems() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // if (cartItems.length === 0) {
    //   router.push("/")
    // }
  }, [cartItems.length, router])

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some delicious items to your cart</p>
        <Button onClick={() => router.push("/#menu")}>Browse Food Menu</Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center p-4">
              <div className="w-20 h-20 relative rounded overflow-hidden mr-4">
                <img
                  src={item.image || `/placeholder.svg?height=80&width=80`}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium text-primary">₹{item.price}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => decreaseQuantity(item.id)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => increaseQuantity(item.id)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
