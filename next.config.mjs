await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  images: {
    domains: ['oystatic.ignimgs.com'],
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

export default config
