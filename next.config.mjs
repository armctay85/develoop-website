/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/platform", destination: "/tools/", permanent: true },
      { source: "/pricing", destination: "/services/", permanent: true },
      { source: "/data", destination: "/tools/", permanent: true },
      { source: "/community", destination: "/about/", permanent: true },
      { source: "/experience", destination: "/about/", permanent: true },
      { source: "/insights", destination: "/approach/", permanent: true },
    ];
  },
};

export default nextConfig;
