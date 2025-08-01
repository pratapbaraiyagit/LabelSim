
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, ShoppingBag, Wand2 } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

export default function Home() {
  const featuredProducts = products.filter(p => p.category === 'stitched').slice(0, 6);
  const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in your collection.")}`;

  const heroSlides = [
    {
      src: "https://placehold.co/1920x1080.png",
      alt: "Model in a red and white apple-print shirt holding a pink lollipop",
      "data-ai-hint": "fashion model"
    },
    {
      src: "https://placehold.co/1920x1080.png",
      alt: "Model showcasing a custom-tailored outfit",
      "data-ai-hint": "tailored fashion"
    },
    {
      src: "https://placehold.co/1920x1080.png",
      alt: "Close-up of intricate fabric and stitching",
      "data-ai-hint": "intricate fabric"
    }
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <Carousel
            className="w-full h-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[60vh] md:h-[80vh] relative">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
                      data-ai-hint={slide['data-ai-hint']}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="relative z-10 p-4 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-4 drop-shadow-lg animate-hero-title">Label Sim</h1>
                    <p className="text-lg md:text-2xl font-body drop-shadow-md animate-hero-subtitle">Elegance in Every Thread</p>
                </div>
            </div>
          </Carousel>
        </section>

        {/* Category Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/stitched" className="group">
                <Card className="overflow-hidden h-full transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-96">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Stitched Collection"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint="stitched dress"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-8 text-white">
                      <ShoppingBag className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:rotate-[-10deg]" />
                      <h2 className="text-4xl">Stitched Collection</h2>
                      <p className="flex items-center mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        Explore Ready-to-Wear
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/unstitched" className="group">
                <Card className="overflow-hidden h-full transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-96">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Unstitched Collection"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint="fabric textiles"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 p-8 text-white">
                       <Wand2 className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:rotate-[10deg]" />
                       <h2 className="text-4xl">Unstitched Collection</h2>
                       <p className="flex items-center mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
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
                Label Sim was born from a passion for timeless Indian craftsmanship, reimagined for the modern woman. We believe in creating pieces that are not just clothes, but heirlooms of elegance.
              </p>
              <div className="flex justify-center gap-4">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                    <Link href="/about">Read More</Link>
                 </Button>
                 <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Contact Us</a>
                 </Button>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
