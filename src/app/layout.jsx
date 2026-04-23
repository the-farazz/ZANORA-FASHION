import './globals.css';
import { HelmetProvider } from 'react-helmet-async'; // We'll keep this if needed, but generateMetadata is preferred
import StoreProvider from '../components/StoreProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

export const metadata = {
  title: {
    default: 'ZANORA | Premium Pakistani Fashion & Luxury Unstitched Collections',
    template: '%s | ZANORA'
  },
  description: "Discover ZANORA's luxury unstitched and ready-to-wear collections. Shop the finest Pakistani lawn, silk, and festive wear with effortless style and curated elegance.",
  keywords: ['ZANORA', 'Pakistani Fashion', 'Luxury Lawn', 'Unstitched Collection', 'Ready to Wear', 'Designer Suits'],
  authors: [{ name: 'ZANORA' }],
  metadataBase: new URL('https://www.zanorafashion.com'),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'lWD9CWvGm6ar6VfFFpVcdHI4nswx7vpjcefqIGxTe94',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zanorafashion.com/',
    title: 'ZANORA | Premium Pakistani Fashion',
    description: 'Effortless style for the modern woman. Shop our latest luxury collections.',
    siteName: 'ZANORA',
    images: [{ url: '/assets/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZANORA | Premium Pakistani Fashion',
    description: 'Effortless style for the modern woman. Shop our latest luxury collections.',
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/fav-icon.png" />
      </head>
      <body className="bg-zanora-cream selection:bg-zanora-beige selection:text-zanora-black">
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <StoreProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
