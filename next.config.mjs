/** @type {import('next').NextConfig} */

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "bluetooth=()",
      "accelerometer=()",
      "gyroscope=()",
      "magnetometer=()",
      "midi=()",
      "display-capture=()",
      "hid=()",
      "serial=()",
      "xr-spatial-tracking=()",
      "browsing-topics=()",
    ].join(", "),
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
