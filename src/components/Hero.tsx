import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import heroImage from "@/assets/products/hero-pills.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-primary font-medium">Welcome to</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Anjani Lifecure Sciences
              </h1>
              <blockquote className="text-xl text-muted-foreground italic border-l-4 border-primary pl-4">
                Improving health, one pill at a time.
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-medical transition-all duration-300">
                <a href="#products">Shop <ShoppingBag className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-medical">
            <img
              src={heroImage}
              alt="Anjani Lifecure Sciences pharmaceutical products"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
