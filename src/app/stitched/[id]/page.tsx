import { products } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product-card';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number
  const message = `Hello! I'm interested in the "${product.name}" (ID: ${product.id}). Can you please provide more details?`;
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8">
            <Button asChild variant="ghost">
                <Link href="/stitched" className="flex items-center text-foreground/80 hover:text-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Collection
                </Link>
            </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              data-ai-hint="ethnic dress detail"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="w-fit mb-4 capitalize">{product.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
            {product.price && <p className="text-3xl text-accent mb-6">{product.price}</p>}
            <p className="text-lg text-foreground/80 mb-8 font-body leading-relaxed">
              {product.description}
            </p>
            <div className="space-y-4 border-t pt-6">
                 <h3 className="font-semibold">Details</h3>
                 <p className="text-sm text-foreground/60"><strong>Fabric:</strong> Premium Silk Blend, Organza</p>
                 <p className="text-sm text-foreground/60"><strong>Sizes Available:</strong> S, M, L, XL (Made to order available)</p>
                 <p className="text-sm text-foreground/60"><strong>Care:</strong> Dry Clean Only</p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-24 pt-16 border-t">
            <h2 className="text-3xl text-center mb-12">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map(p => <ProductCard key={p.id} product={p}/>)}
            </div>
        </div>

      </div>
    </div>
  );
}
