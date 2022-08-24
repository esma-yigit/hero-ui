import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
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
