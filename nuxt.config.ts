import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    head: {
      title: "Armadigital360 Production",
      script: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Barlow:wght@900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Goldman:wght@700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Armadigital360 solves your all website problems",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileColor",
          content: "images/meta/ms-icon-144x144.png",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          property: "og:url",
          content: "https://wkfc.bixos.io/",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Kong Warriors Fight Club",
        },
        {
          property: "og:description",
          content:
            "Kong WFC is an nft collection of 9,977 kongs, each a unique 3d character, built with a plethora of distinctive kong warrior features and characteristics.",
        },
        {
          property: "og:image",
          content: "/images/meta/og-image.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:domain",
          content: "wkfc.bixos.io",
        },
        {
          property: "twitter:url",
          content: "https://wkfc.bixos.io/",
        },
        {
          name: "twitter:title",
          content: "Kong Warriors Fight Club",
        },
        {
          name: "twitter:description",
          content:
            "Kong WFC is an nft collection of 9,977 kongs, each a unique 3d character, built with a plethora of distinctive kong warrior features and characteristics.",
        },
        {
          name: "twitter:image",
          content: "/images/meta/og-image.jpg",
        },
      ],
    },
  },

  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/tailwind.css",
    "~/assets/styles/responsive.css",
  ],

  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["vue"],
    },
  },
});
