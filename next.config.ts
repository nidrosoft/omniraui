import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/docs/base/language-selector",
        destination: "/docs/application-ui/language-selector",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
