"use client";

import { useState } from "react";
import { FoodCard } from "@/components/food-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { foodItems } from "@/data/food-items";
import Link from "next/link";
import { useEffect } from "react";

export function BookList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [bookData, setBookData] = useState<any>();
  const [bookSearchQuery,setBookSearchQuery]=useState<string>();
  const categories = [
    { id: "maths", name: "Maths" },
    { id: "science", name: "Science" },
    { id: "shysics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "bio", name: "Bio" },
  ];

  const bookDataAPI = "https://openlibrary.org/search.json";

  const getBookData = async (bookName: string) => {
    const data = await fetch(
      `${bookDataAPI}?q=${bookName}&fields=key,title,author_name,cover_i`
    );

    return data.json();
  };
  const fetchData = async (bookQuery:string) => {
    const bookdata = await getBookData(bookQuery);
    console.log("bookdata", bookdata);
    if (bookdata?.docs?.length > 0) {
      setBookData(bookdata.docs);
    } else {
      console.log("API is failed");
    }
    //
  };
  useEffect(() => {
    fetchData(activeCategory);
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
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="mb-[5px] md:mb-0 md:w-[20%]">
          <input
            className="text-white relative focus:bg-orange-600 bg-green-500 placeholder:text-white placeholder:italic ...  p-[8px] w-full rounded-lg"
            placeholder="Search any book..."
            type="text"
            name="search"
            value={bookSearchQuery}
            onBlur={(e) => setBookSearchQuery('')}
            onChange={(e:any)=>{
              setBookSearchQuery(e.target.value);
              fetchData(e.target.value);}}
          />
        </div>
       
        <div className="mb-[30px] pt-[10px] pb-[40px] md:p-0 bg-green-500 md:w-[75%] cursor-pointer">
          <Tabs
            defaultValue="all"
            onValueChange={setActiveCategory}
            className="mb-8 rounded-lg md:mb-0"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-green-500">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="font-bold text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="container">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {bookData?.map((item: any) => (
                <FoodCard key={item.cover_i} book={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
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
