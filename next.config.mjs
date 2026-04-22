/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/product/1',
        destination: '/products/unstitched-luxe-chiffon-set-pakistan',
        permanent: true,
      },
      {
        source: '/product/2',
        destination: '/products/minimalist-crepe-collection-pakistan',
        permanent: true,
      },
      {
        source: '/product/3',
        destination: '/products/classic-silk-evening-wear-pakistan',
        permanent: true,
      },
      {
        source: '/product/4',
        destination: '/products/evening-drape-linen-pakistan',
        permanent: true,
      },
      {
        source: '/product/5',
        destination: '/products/spring-lawn-collection-pakistan',
        permanent: true,
      },
      {
        source: '/product/6',
        destination: '/products/summer-breeze-voile-pakistan',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
