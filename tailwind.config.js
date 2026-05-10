/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#070b12",
        ink: "#0b1220",
        panel: "#111827",
        smoke: "#f5f7fb",
        muted: "#9aa7bd",
        electric: "#4f8cff",
        cyanSoft: "#74f4e7",
        violetTech: "#9b7cff",
        line: "rgba(148, 163, 184, 0.22)"
      },
      boxShadow: {
        glow: "0 0 38px rgba(79, 140, 255, 0.18)",
        panel: "0 20px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(79, 140, 255, 0.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(116, 244, 231, 0.12), transparent 24%), linear-gradient(135deg, #070b12 0%, #0b1220 52%, #101827 100%)"
      }
    }
  },
  plugins: []
};
