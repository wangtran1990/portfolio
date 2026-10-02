export type Theme = 'dark' | 'light';

class ThemeState {
	current = $state<Theme>('light');

	init() {
		if (typeof window === 'undefined') return;
		const saved = localStorage.getItem('theme') as Theme | null;
		if (saved === 'dark' || saved === 'light') {
			this.current = saved;
		} else {
			this.current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		this.apply();

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				this.current = e.matches ? 'dark' : 'light';
				this.apply();
			}
		});

		window.addEventListener('storage', (e) => {
			if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
				this.current = e.newValue;
				this.apply();
			}
		});
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', this.current);
			this.apply();
		}
	}

	apply() {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', this.current === 'dark');
		}
	}
}

export const themeState = new ThemeState();
