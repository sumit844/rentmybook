"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import type { BookItem } from "@/types/food"
import { Plus } from "lucide-react"
import { useToast } from "../hooks/use-toast"

interface FoodCardProps {
  food: BookItem
}

export function FoodCard({ book }: any) {
  const { addToCart } = useCart()
  const {toast} = useToast()

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={`https://covers.openlibrary.org/a/id/${book?.cover_i}-L.jpg` || `/placeholder.svg?height=200&width=400`}

          alt={book?.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {/* {food?.isVeg ? (
          <Badge className="absolute top-2 right-2 bg-green-500">Veg</Badge>
        ) : (
          <Badge className="absolute top-2 right-2 bg-red-500">Non-Veg</Badge>
        )} */}
      </div>
      <CardHeader className="pt-8">
        <CardTitle className="flex justify-between items-center">
          <span>{book?.title}</span>
          {/* <span className="text-primary">₹{food.price}</span> */}
        </CardTitle>
      </CardHeader>
      {/* <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-500">{food.title}</p>
      </CardContent> */}
      <CardFooter className="p-4 mb-0">
        <Button onClick={() => {
          toast({
            title: "Book added to cart",
            description: `${book.title} has been added to your cart.`,
          });
          addToCart(book)}} className="w-full bg-green-500 hover:bg-green-600">
          <Plus className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
