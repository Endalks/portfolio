import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: Next.js chunks + EmailJS
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com",
      // Styles: self + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + GitHub avatars
      "img-src 'self' data: blob: https://avatars.githubusercontent.com https://github.com",
      // Connections: EmailJS API + GitHub API
      "connect-src 'self' https://api.emailjs.com https://api.github.com",
      // YouTube iframes for project demos
      "frame-src https://www.youtube.com https://youtube.com",
      // Media
      "media-src 'self'",
      // Object
      "object-src 'none'",
      // Base URI
      "base-uri 'self'",
      // Form action
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Optimize images 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
