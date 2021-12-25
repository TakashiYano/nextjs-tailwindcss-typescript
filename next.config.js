// @ts-check

/**
 * @types {import('next').NextConfig}
 **/
const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/root" }];
  },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  swcMinify: false,
};

module.exports = nextConfig;
