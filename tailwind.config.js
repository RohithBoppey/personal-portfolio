/** @type {import('tailwindcss').Config} */
module.exports = {
	variants: {
		textColor: ["responsive", "hover", "focus", "group-hover"],
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
