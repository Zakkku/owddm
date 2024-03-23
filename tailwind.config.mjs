const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "selector",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				Futurewave: ["Futurewave", "monospace"],
				Zen: ["Zen Kaku Gothic New", "sans-serif"],
				Inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [
		require("tw-neumorphism"),
		require("@tailwindcss/typography"),
		plugin(function ({ addVariant }) {
			addVariant(
				"prose-inline-code",
				'&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
			);
		}),
	],
};
