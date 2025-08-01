import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

const values = [
    { name: 'Timeless Quality', description: 'We use only the finest fabrics and materials, ensuring every piece is a lasting treasure.' },
    { name: 'Handmade with Love', description: 'Our collections are brought to life by skilled artisans who pour their heart into every stitch.' },
    { name: 'Modern Elegance', description: 'We blend traditional aesthetics with contemporary designs for the modern, graceful woman.' }
]

export default function AboutPage() {
    const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I have a question about your brand.")}`;

  return (
    <div className="bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary/20">
        <div className="text-center p-4">
          <h1 className="text-5xl md:text-7xl">Our Story</h1>
          <p className="mt-4 text-xl font-body text-foreground/80">Crafting elegance, one thread at a time.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
                <Image src="https://placehold.co/600x600.png" alt="Founder of Label Sim" fill className="object-cover rounded-lg shadow-lg" data-ai-hint="fashion designer portrait" />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl">Who We Are</h2>
                <p className="text-lg font-body text-foreground/80 leading-relaxed">
                    Label Sim started as a dream in a small studio, fueled by a love for India's rich textile heritage. Our founder, a visionary with a passion for fashion, wanted to create a brand that celebrates femininity and grace through clothing.
                </p>
                <p className="font-body text-foreground/80 leading-relaxed">
                    Our journey is one of dedication to craftsmanship and a commitment to creating pieces that make women feel confident and beautiful. Each design tells a story of tradition, artistry, and modern sophistication.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 md:py-24 bg-primary/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12">Behind The Seams</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"><Image src="https://placehold.co/400x400.png" alt="Behind the scenes 1" fill className="object-cover" data-ai-hint="sewing machine" /></div>
                <div className="relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"><Image src="https://placehold.co/400x400.png" alt="Behind the scenes 2" fill className="object-cover" data-ai-hint="fabric swatches" /></div>
                <div className="relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"><Image src="https://placehold.co/400x400.png" alt="Behind the scenes 3" fill className="object-cover" data-ai-hint="fashion sketch" /></div>
                <div className="relative aspect-square rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"><Image src="https://placehold.co/400x400.png" alt="Behind the scenes 4" fill className="object-cover" data-ai-hint="thread spools" /></div>
            </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {values.map((value) => (
                <div key={value.name} className="p-6 border border-border/50 rounded-lg">
                    <h3 className="text-xl mb-4">{value.name}</h3>
                    <p className="text-foreground/80 font-body">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Plug */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/80 mb-8">
            We'd love to hear from you. Follow our journey or send us a message.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Button asChild variant="ghost">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 h-5 w-5" /> WhatsApp Us
                </a>
            </Button>
            <Button asChild variant="ghost">
                <a href="mailto:buildwithpratap@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> Email
                </a>
            </Button>
            <Button asChild variant="ghost">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" /> Instagram
                </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
