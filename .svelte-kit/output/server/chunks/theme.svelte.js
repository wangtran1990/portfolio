import "./server.js";
//#region src/lib/theme.svelte.ts
var ThemeState = class {
	current = "light";
	init() {
		if (typeof window === "undefined") return;
		const saved = localStorage.getItem("theme");
		if (saved === "dark" || saved === "light") this.current = saved;
		else this.current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		this.apply();
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
			if (!localStorage.getItem("theme")) {
				this.current = e.matches ? "dark" : "light";
				this.apply();
			}
		});
		window.addEventListener("storage", (e) => {
			if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
				this.current = e.newValue;
				this.apply();
			}
		});
	}
	toggle() {
		this.current = this.current === "dark" ? "light" : "dark";
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", this.current);
			this.apply();
		}
	}
	apply() {
		if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", this.current === "dark");
	}
};
var themeState = new ThemeState();
//#endregion
export { themeState as t };

//# sourceMappingURL=theme.svelte.js.map