import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

export default function StitchedCollectionPage() {
  const stitchedProducts = products.filter(p => p.category === 'stitched');

  return (
    <div className="bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-foreground">Stitched Collection</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our curated collection of ready-to-wear ethnic ensembles, crafted with precision and love.
          </p>
        </header>
        
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stitchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Optional: Pagination or Load More button can be added here */}
        </main>
      </div>
    </div>
  );
}
