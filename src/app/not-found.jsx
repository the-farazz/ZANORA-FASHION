import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zanora-cream px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-extralight tracking-tighter text-zanora-black/10">404</h1>
          <h2 className="text-2xl font-light tracking-widest uppercase">Page Not Found</h2>
          <p className="text-[14px] font-light opacity-60 leading-relaxed">
            The collection you are looking for has been moved or is currently unavailable. 
            Discover our latest luxury unstitched and ready-to-wear pieces instead.
          </p>
        </div>
        
        <div className="pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-zanora-black text-white px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-zanora-brown transition-all shadow-xl group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="pt-20 grid grid-cols-3 gap-4 border-t border-black/5 opacity-40">
           <Link href="/category/3-piece" className="text-[9px] uppercase tracking-widest hover:text-zanora-brown">3 Piece</Link>
           <Link href="/category/2-piece" className="text-[9px] uppercase tracking-widest hover:text-zanora-brown">2 Piece</Link>
           <Link href="/blog" className="text-[9px] uppercase tracking-widest hover:text-zanora-brown">Journal</Link>
        </div>
      </div>
    </div>
  );
}
