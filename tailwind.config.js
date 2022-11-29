/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    mode: "jit",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./public/**/*.html",
    ],
    plugins: [require("flowbite/plugin")],
    theme: {
        extend: {
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            colors: {
                primary: "#03CC5E",
                secondary: "#023430",
                darkblue: "#011F2B",
                lightpurple: "#F9EBFF",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
        },
    },
};
