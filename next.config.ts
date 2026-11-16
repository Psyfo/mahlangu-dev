import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output keeps the production image small: `next build` traces
  // the files the server actually needs into .next/standalone with its own
  // server.js, and the Dockerfile ships only that, not the whole install.
  output: "standalone",
  // sharp (used by next/image) loads its native libvips through the dynamic
  // linker, which file tracing cannot follow, so include it explicitly. The
  // Dockerfile loads sharp during the image build, so a gap here fails the
  // deploy rather than every optimised image in production.
  outputFileTracingIncludes: {
    "/**": ["./node_modules/@img/sharp-libvips-linux*/lib/**/*"],
  },
};

export default nextConfig;
