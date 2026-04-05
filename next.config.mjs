/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      const ignored = config.watchOptions?.ignored;
      const ignoredList = (Array.isArray(ignored) ? ignored : ignored ? [ignored] : [])
        .filter((p) => typeof p === 'string' && p.length > 0);

      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          ...ignoredList,
          "**/public/trudkrut/**",
          "**/фото структура/**",
        ],
      };
    }

    return config;
  },
};

export default nextConfig;
