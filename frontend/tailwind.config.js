/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#00C2A8',       // Primary accent color
                'brand-light': '#82DCDC',         // Lighter variant for hover/accents
                'brand-dark': '#008B7A',          // Darker variant for active/pressed

                'brand-secondary': '#6F42C1',     // Secondary accent color
                'brand-secondary-light': '#B296E0', // Lighter variant

                'neutral-900': '#212529',         // Darkest gray for text
                'neutral-700': '#495057',         // Medium dark gray for secondary text
                'neutral-500': '#ADB5BD',         // Medium gray for borders, disabled
                'neutral-200': '#DEE2E6',         // Light gray for subtle borders
                'neutral-100': '#F8F9FA',         // Very light gray for backgrounds

                'success': '#28A745',
                'danger': '#DC3545',
                'warning': '#FFC107',
                'info': '#17A2B8',
            },
        },
    },
    plugins: [],
}

