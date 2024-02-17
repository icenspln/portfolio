/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                grayText: "#686868",
                gradient: {
                    purple: "linear-gradient(140.99deg, #D7A3FF 0%, #AC42FF 100%)",
                },
            },
            backgroundImage: {
                purple: "linear-gradient(140.99deg, #D7A3FF 0%, #AC42FF 100%)",
            },
        },
    },
    plugins: [],
}
