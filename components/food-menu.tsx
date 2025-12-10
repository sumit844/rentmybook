"use client"

import { useState } from "react"
import { FoodCard } from "@/components/food-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { foodItems } from "@/data/food-items"
import Link from "next/link"

export function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "Veg thali", name: "Veg thali" },
    { id: "Non-veg thali", name: "Non-veg thali" },
    { id: "Break fast", name: "Break fast" },
    
  ]

  const filteredItems =
    activeCategory === "all" ? foodItems : foodItems.filter((item) => item.category === activeCategory)

  return (
    <div id="menu" className="py-8">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            <span className="text-brand-green text-center">MyCloud</span>
            <span className="text-brand-orange text-center">Mess</span> - Our Delicious Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
            We offer a variety of delicious and nutritious meals at affordable prices. Our menu changes daily to keep your taste buds excited.
          </p>

      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="grid w-full grid-cols-4 md:grid-cols-4 bg-green-500">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="font-bold text-black">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} food={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="text-center mt-10">
          <p className="text-gray-600 mb-6">Want to see our full weekly menu?</p>
          <Link href="/#menu">
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
            View Full Weekly Menu
          </button>
          </Link>
        </div>
    </div>
  )
}
