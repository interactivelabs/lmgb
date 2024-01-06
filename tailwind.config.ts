import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noisy-v2": "url('/bg/noisyV2.png')",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
