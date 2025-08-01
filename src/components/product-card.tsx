import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

function getLink(product: Product) {
    if (product.category === 'stitched') {
        return `/stitched/${product.id}`;
    }
    return `/unstitched/${product.id}`;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <Link href={getLink(product)} className="block overflow-hidden">
          <div className="aspect-[3/4] relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={product.category === 'stitched' ? 'ethnic fashion' : 'fabric textile'}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4 flex flex-col">
        <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">{product.name}</CardTitle>
        <p className="text-foreground/80 font-body text-sm line-clamp-2 flex-grow">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {product.price && <p className="text-lg font-semibold text-accent">{product.price}</p>}
        <Button asChild variant="link" className="text-accent hover:text-accent-foreground/80">
          <Link href={getLink(product)}>
            View
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
