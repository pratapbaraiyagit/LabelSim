import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, ShoppingBag, Wand2 } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in your collection.")}`;

  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Elegant ethnic wear model"
            fill
            className="object-cover object-top"
            priority
            data-ai-hint="ethnic model"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-4 drop-shadow-lg animate-fade-in-up">SimSashay</h1>
            <p className="text-lg md:text-2xl font-body drop-shadow-md animate-fade-in-up [animation-delay:0.5s]">Elegance in Every Thread</p>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/stitched" className="group">
                <Card className="overflow-hidden h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="relative h-96">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Stitched Collection"
                      fill
                      className="object-cover"
                      data-ai-hint="stitched dress"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-8 text-white">
                      <ShoppingBag className="w-12 h-12 mb-4" />
                      <h2 className="text-4xl">Stitched Collection</h2>
                      <p className="flex items-center mt-2 group-hover:underline">
                        Explore Ready-to-Wear
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/unstitched" className="group">
                <Card className="overflow-hidden h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="relative h-96">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Unstitched Collection"
                      fill
                      className="object-cover"
                      data-ai-hint="fabric textiles"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-8 text-white">
                       <Wand2 className="w-12 h-12 mb-4" />
                       <h2 className="text-4xl">Unstitched Collection</h2>
                       <p className="flex items-center mt-2 group-hover:underline">
                        Create Your Own Style
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-primary/10">
           <div className="container max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl mb-4">Featured Pieces</h2>
              <p className="max-w-2xl mx-auto text-foreground/80 mb-12">
                Discover our handpicked selection of signature styles that embody grace and sophistication.
              </p>
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {featuredProducts.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <ProductCard product={product} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
           </div>
        </section>

        {/* Mini About & CTA */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl mb-4">Our Story</h2>
              <p className="max-w-3xl mx-auto text-foreground/80 mb-8 font-body text-lg">
                SimSashay was born from a passion for timeless Indian craftsmanship, reimagined for the modern woman. We believe in creating pieces that are not just clothes, but heirlooms of elegance.
              </p>
              <div className="flex justify-center gap-4">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/about">Read More</Link>
                 </Button>
                 <Button asChild size="lg" variant="outline">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contact Us</a>
                 </Button>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
