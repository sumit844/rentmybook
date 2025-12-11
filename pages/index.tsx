import { BookList } from "@/components/booklist";
import { Hero } from "@/components/hero";
import Pricing  from "@/components/pricing";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <BookList />
      <Pricing/>
    </div>
  );
}
