import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        window: "readonly",
        console: "readonly",
        Swiper: "readonly",
      },
    },
    rules: {},
  },
];
