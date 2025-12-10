"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import type { FoodItem } from "@/types/food"
import { Plus } from "lucide-react"
import { useToast } from "../hooks/use-toast"

interface FoodCardProps {
  food: FoodItem
}

export function FoodCard({ food }: FoodCardProps) {
  const { addToCart } = useCart()
  const {toast} = useToast()

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={food.image || `/placeholder.svg?height=200&width=400`}
          alt={food.name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {food.isVeg ? (
          <Badge className="absolute top-2 right-2 bg-green-500">Veg</Badge>
        ) : (
          <Badge className="absolute top-2 right-2 bg-red-500">Non-Veg</Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="flex justify-between items-center">
          <span>{food.name}</span>
          <span className="text-primary">₹{food.price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-500">{food.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => {
          toast({
            title: "Item added to cart",
            description: `${food.name} has been added to your cart.`,
          });
          addToCart(food)}} className="w-full bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
