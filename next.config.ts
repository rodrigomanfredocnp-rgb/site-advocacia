import type { NextConfig } from "next";
import { IMAGE_WIDTHS } from "./src/lib/image-widths.mjs";

/**
 * Site 100% estático (`next build` gera a pasta `out/`), publicável em
 * qualquer hospedagem: Vercel, Netlify, Cloudflare Pages ou um servidor comum.
 * As fotos são pré-otimizadas por `npm run images` e servidas pelo loader próprio.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: IMAGE_WIDTHS.filter((w) => w >= 640),
    imageSizes: IMAGE_WIDTHS.filter((w) => w < 640),
    qualities: [76],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
