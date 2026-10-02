<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { themeState } from '#lib/theme.svelte';

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#achievements', label: 'Highlights' },
		{ href: '#education', label: 'Education' },
		{ href: '#contact', label: 'Contact' }
	];

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let activeSection = $state('');
	let shortcutKey = $state('⌘K');

	$effect(() => {
		const platform =
			(navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData
				?.platform ?? navigator.userAgent;
		const isMac = /(Mac|iPhone|iPod|iPad)/i.test(platform);
		shortcutKey = isMac ? '⌘K' : 'Ctrl+K';
	});

	$effect(() => {
		const sections = document.querySelectorAll('section[id]');
		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ rootMargin: '-40% 0px -55% 0px', threshold: 0 }
		);

		sections.forEach((sec) => observer.observe(sec));
		return () => observer.disconnect();
	});

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && menuOpen) {
				menuOpen = false;
			}
		};

		if (menuOpen) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleKeyDown);
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	function openCmd() {
		window.dispatchEvent(new CustomEvent('open-command-palette'));
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-40 transition-all duration-200 {scrolled
		? 'bg-surface-card/90 dark:bg-background/90 backdrop-blur-md border-b border-border-card shadow-xs'
		: 'bg-transparent'}"
>
	<nav
		class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
		aria-label="Main navigation"
	>
		<a
			href="#hero"
			class="flex items-center gap-2 font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 tracking-tight text-base"
			aria-label="Back to top"
		>
			<span
				class="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 font-mono text-sm font-bold"
			>
				DQ
			</span>
			<span class="font-mono text-xs text-text-muted hidden sm:inline">
				/ tech-lead
			</span>
		</a>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center gap-6">
			<ul class="flex items-center gap-6 text-sm text-text-sub font-medium">
				{#each navLinks as l (l.href)}
					{@const isActive = activeSection === l.href.slice(1)}
					<li>
						<a
							href={l.href}
							class="transition-colors {isActive
								? 'text-sky-600 dark:text-sky-400 font-semibold'
								: 'hover:text-sky-600 dark:hover:text-sky-400'}"
						>
							{l.label}
						</a>
					</li>
				{/each}
			</ul>

			<div class="flex items-center gap-2 border-l border-border-card pl-5">
				<!-- Command Palette Trigger -->
				<button
					onclick={openCmd}
					type="button"
					class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-muted hover:text-text-main transition-colors text-xs font-mono"
					aria-label="Open command palette ({shortcutKey})"
				>
					<Icon name="search" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
					<span>Search</span>
					<kbd
						class="bg-surface-card px-1.5 py-0.5 rounded text-[10px] border border-border-card"
					>
						{shortcutKey}
					</kbd>
				</button>

				<!-- Theme Toggle -->
				<button
					onclick={() => themeState.toggle()}
					aria-label="Switch to {themeState.current === 'dark' ? 'light' : 'dark'} mode"
					class="p-2 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-main transition-colors text-sm"
				>
					{#if themeState.current === 'dark'}
						<Icon name="sun" class="w-4 h-4" />
					{:else}
						<Icon name="moon" class="w-4 h-4" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile controls -->
		<div class="flex items-center gap-2 md:hidden">
			<button
				onclick={openCmd}
				type="button"
				aria-label="Search"
				class="p-2 rounded-lg bg-surface-muted border border-border-card text-sky-600 dark:text-sky-400 text-sm"
			>
				<Icon name="search" class="w-4 h-4" />
			</button>
			<button
				onclick={() => themeState.toggle()}
				aria-label="Switch to {themeState.current === 'dark' ? 'light' : 'dark'} mode"
				class="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors text-sm"
			>
				{#if themeState.current === 'dark'}
					<Icon name="sun" class="w-4 h-4" />
				{:else}
					<Icon name="moon" class="w-4 h-4" />
				{/if}
			</button>
			<button
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				class="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors"
			>
				{#if menuOpen}
					<Icon name="close" class="w-5 h-5" />
				{:else}
					<Icon name="hamburger" class="w-5 h-5" />
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile Drawer -->
	{#if menuOpen}
		<div
			class="fixed left-0 right-0 bottom-0 top-16 bg-background/95 backdrop-blur-xl border-t border-border-card md:hidden z-30 flex flex-col p-6"
		>
			<ul class="flex flex-col gap-4 text-base font-medium text-text-main">
				{#each navLinks as l (l.href)}
					{@const isActive = activeSection === l.href.slice(1)}
					<li>
						<a
							href={l.href}
							onclick={() => (menuOpen = false)}
							class="block py-2.5 px-3 rounded-xl transition-colors {isActive
								? 'bg-surface-muted text-sky-600 dark:text-sky-400 font-semibold'
								: 'hover:bg-surface-muted hover:text-sky-600'}"
						>
							{l.label}
						</a>
					</li>
				{/each}
			</ul>
			<div
				class="mt-auto pt-6 border-t border-border-card flex items-center justify-between text-xs text-text-muted"
			>
				<span>Trần Đăng Quang · Technical Lead</span>
				<button
					onclick={() => {
						menuOpen = false;
						openCmd();
					}}
					class="text-sky-600 dark:text-sky-400 font-mono"
				>
					Open {shortcutKey}
				</button>
			</div>
		</div>
	{/if}
</header>
