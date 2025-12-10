"use client";

import { useState } from "react";
import { FoodCard } from "@/components/food-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { foodItems } from "@/data/food-items";
import Link from "next/link";
import { useEffect } from "react";

export function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [bookData, setBookData] = useState<any>();
  const categories = [
    { id: "maths", name: "Maths" },
    { id: "science", name: "Science" },
    { id: "shysics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "bio", name: "Bio" },
  ];
  const getBookData = async () => {
    const data = await fetch(
      `https://openlibrary.org/search.json?q=${activeCategory}&fields=key,title,author_name,cover_i`
    );

    return data.json();
  };
  useEffect(() => {
    const fetchData = async () => {
      const bookdata = await getBookData();
      console.log("bookdata", bookdata);
      if(bookdata.docs.length>0){
        setBookData(bookdata.docs)
      }else{
        console.log("API is failed")
      }
      //
    };
    fetchData();
  }, [activeCategory]);
 
  return (
    <div id="books" className="py-8">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        <span className="text-brand-green text-center">RentMyBook</span>
        <span className="text-brand-orange text-center"></span> - Our Book
        Collection
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
        We provide service of rental book for more than 12000 books.
      </p>

      <Tabs
        defaultValue="all"
        onValueChange={setActiveCategory}
        className="mb-8"
      >
        <TabsList className="grid w-full grid-cols-5 md:grid-cols-5 bg-green-500">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="font-bold text-black"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bookData?.map((item:any) => (
                <FoodCard key={item.cover_i} book={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-6">Want to see our full book list?</p>
        <Link href="/#books">
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
            View Book List
          </button>
        </Link>
      </div>
    </div>
  );
}
