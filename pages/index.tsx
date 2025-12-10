import { FoodMenu } from "@/components/food-menu";
import { Hero } from "@/components/hero";
import Pricing  from "@/components/pricing";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <FoodMenu />
      <Pricing/>
    </div>
  );
}
