import { products } from '../data/products';

export default async function sitemap() {
  const baseUrl = 'https://www.zanorafashion.com';

  // Core Pages
  const routes = [
    '',
    '/collections',
    '/new-arrivals',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  // Category Pages
  const categories = ['3-piece', '2-piece', '1-piece'];
  const categoryRoutes = categories.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Product Pages
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  return [...routes, ...categoryRoutes, ...productRoutes];
}
