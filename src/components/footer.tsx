import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';

export function Footer() {
  const WHATSAPP_NUMBER = "911234567890"; // Replace with actual number
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in your collection.")}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 border-t border-border/40">
      <div className="container max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-headline">Label Sim</h2>
            <p className="text-foreground/80 text-sm">Elegance in Every Thread.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link></li>
              <li><Link href="/stitched" className="text-foreground/80 hover:text-foreground">Stitched Collection</Link></li>
              <li><Link href="/unstitched" className="text-foreground/80 hover:text-foreground">Unstitched Collection</Link></li>
              <li><Link href="/about" className="text-foreground/80 hover:text-foreground">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:buildwithpratap@gmail.com`} className="flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Mail className="w-4 h-4" />
                  <span>buildwithpratap@gmail.com</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/labelsim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Instagram className="w-4 h-4" />
                  <span>@labelsim</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          <p>&copy; {year} Label Sim. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
