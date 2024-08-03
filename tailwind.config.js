// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#eeeeee",
                foreground: "#eeeeee",
            },
            focus: "#eeeeee",
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
