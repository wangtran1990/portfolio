<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { personal } from '#lib/data/resume';
	import { themeState } from '#lib/theme.svelte';

	interface CommandItem {
		id: string;
		title: string;
		category: 'Navigation' | 'Actions' | 'Social';
		icon: string;
		action: () => void;
	}

	let open = $state(false);
	let query = $state('');
	let selectedIndex = $state(0);
	let copiedText = $state<string | null>(null);

	let inputRef = $state<HTMLInputElement | null>(null);
	let modalRef = $state<HTMLDivElement | null>(null);
	let previouslyFocusedElement: HTMLElement | null = null;
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	function openPalette() {
		previouslyFocusedElement = document.activeElement as HTMLElement | null;
		query = '';
		selectedIndex = 0;
		open = true;
	}

	$effect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				if (!open) {
					openPalette();
				} else {
					open = false;
				}
			} else if (e.key === 'Escape' && open) {
				open = false;
			}
		};

		const handleOpenCustom = () => openPalette();

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('open-command-palette', handleOpenCustom);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('open-command-palette', handleOpenCustom);
		};
	});

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
			// wait a tick for DOM element to be mounted
			setTimeout(() => {
				inputRef?.focus();
			}, 10);
		} else {
			document.body.style.overflow = '';
			previouslyFocusedElement?.focus();
		}
	});

	async function copy(text: string, label: string) {
		try {
			await navigator.clipboard.writeText(text);
			copiedText = `Copied ${label}!`;
			clearTimeout(copyTimer);
			copyTimer = setTimeout(() => {
				copiedText = null;
				open = false;
			}, 1000);
		} catch {
			// fallback
		}
	}

	function navigateTo(hash: string) {
		open = false;
		if (hash === '#') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		const element = document.querySelector(hash);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	let items: CommandItem[] = $derived([
		{
			id: 'nav-top',
			title: 'Top / Overview',
			category: 'Navigation',
			icon: '⚡',
			action: () => navigateTo('#hero')
		},
		{
			id: 'nav-about',
			title: 'About Trần Đăng Quang',
			category: 'Navigation',
			icon: '👤',
			action: () => navigateTo('#about')
		},
		{
			id: 'nav-exp',
			title: 'Experience & Systems',
			category: 'Navigation',
			icon: '💼',
			action: () => navigateTo('#experience')
		},
		{
			id: 'nav-skills',
			title: 'Skills & Technologies',
			category: 'Navigation',
			icon: '🛠️',
			action: () => navigateTo('#skills')
		},
		{
			id: 'nav-achieve',
			title: 'Key Milestones & Impact',
			category: 'Navigation',
			icon: '🏆',
			action: () => navigateTo('#achievements')
		},
		{
			id: 'nav-contact',
			title: 'Contact Information',
			category: 'Navigation',
			icon: '📬',
			action: () => navigateTo('#contact')
		},
		{
			id: 'act-email',
			title: `Copy Email: ${personal.email}`,
			category: 'Actions',
			icon: '📧',
			action: () => copy(personal.email, 'email')
		},
		{
			id: 'act-phone',
			title: `Copy Phone: ${personal.phone}`,
			category: 'Actions',
			icon: '📱',
			action: () => copy(personal.phone, 'phone number')
		},
		{
			id: 'act-theme',
			title: `Toggle Theme (Current: ${themeState.current})`,
			category: 'Actions',
			icon: themeState.current === 'dark' ? '☀️' : '🌙',
			action: () => themeState.toggle()
		},
		{
			id: 'soc-linkedin',
			title: 'Visit LinkedIn Profile',
			category: 'Social',
			icon: '🔗',
			action: () => {
				open = false;
				window.open(personal.linkedin, '_blank', 'noopener,noreferrer');
			}
		}
	]);

	let filteredItems = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (!q) return items;
		return items.filter(
			(item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
		);
	});

	function handleKeyDownModal(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			const container = modalRef;
			if (!container) return;
			const focusable = container.querySelectorAll<HTMLElement>(
				'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
			);
			if (focusable.length === 0) return;
			const firstElement = focusable[0];
			const lastElement = focusable[focusable.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === firstElement) {
					e.preventDefault();
					lastElement.focus();
				}
			} else {
				if (document.activeElement === lastElement) {
					e.preventDefault();
					firstElement.focus();
				}
			}
		}
	}

	function handleKeyDownList(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % (filteredItems.length || 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = (selectedIndex - 1 + filteredItems.length) % (filteredItems.length || 1);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (filteredItems[selectedIndex]) {
				filteredItems[selectedIndex].action();
			}
		}
	}
</script>

{#if open}
	<div
		bind:this={modalRef}
		class="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/40 backdrop-blur-xs"
		onclick={() => (open = false)}
		onkeydown={handleKeyDownModal}
		role="dialog"
		tabindex="-1"
		aria-modal="true"
		aria-label="Command palette"
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="w-full max-w-xl bg-surface-card border border-border-card rounded-2xl shadow-xl overflow-hidden text-text-main"
			onclick={(e) => e.stopPropagation()}
			onkeydown={handleKeyDownList}
			role="region"
			aria-label="Command palette content"
		>
			<!-- Search header -->
			<div
				class="flex items-center gap-3 px-4 py-3.5 border-b border-border-card bg-surface-muted/40"
			>
				<Icon name="search" class="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
				<input
					bind:this={inputRef}
					type="text"
					role="combobox"
					aria-expanded="true"
					aria-controls="command-palette-results"
					aria-activedescendant={filteredItems[selectedIndex]
						? `cmd-item-${filteredItems[selectedIndex].id}`
						: undefined}
					placeholder="Type a command or search..."
					bind:value={query}
					oninput={() => (selectedIndex = 0)}
					class="w-full bg-transparent text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 placeholder:text-text-muted"
				/>
				<kbd
					class="hidden sm:inline-block px-2 py-0.5 text-xs text-text-muted bg-surface-muted border border-border-card rounded font-mono"
				>
					ESC
				</kbd>
			</div>

			<!-- Status toast -->
			{#if copiedText}
				<div
					class="px-4 py-2 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-mono border-b border-sky-200 dark:border-sky-800 flex items-center justify-between"
				>
					<span>✓ {copiedText}</span>
				</div>
			{/if}

			<!-- List items -->
			<div
				id="command-palette-results"
				role="listbox"
				class="max-h-80 overflow-y-auto p-2 space-y-1"
			>
				{#if filteredItems.length === 0}
					<div class="py-8 text-center text-text-muted text-sm">
						No matching commands found.
					</div>
				{:else}
					{#each filteredItems as item, idx (item.id)}
						<button
							id="cmd-item-{item.id}"
							role="option"
							aria-selected={selectedIndex === idx}
							type="button"
							onclick={() => item.action()}
							onmouseenter={() => (selectedIndex = idx)}
							class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 {selectedIndex ===
							idx
								? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-medium'
								: 'text-text-sub hover:bg-surface-muted/60'}"
						>
							<div class="flex items-center gap-3 truncate">
								<span class="text-base">{item.icon}</span>
								<span class="truncate">{item.title}</span>
							</div>
							<span
								class="text-[10px] uppercase font-mono tracking-wider text-text-muted px-2 py-0.5 rounded bg-surface-muted shrink-0"
							>
								{item.category}
							</span>
						</button>
					{/each}
				{/if}
			</div>

			<!-- Footer shortcuts -->
			<div
				class="px-4 py-2.5 border-t border-border-card bg-surface-muted/20 text-xs text-text-muted flex items-center justify-between"
			>
				<div class="flex items-center gap-3">
					<span>↑↓ navigate</span>
					<span>↵ select</span>
				</div>
				<span class="text-text-muted font-mono text-[11px]">Trần Đăng Quang · Technical Lead</span>
			</div>
		</div>
	</div>
{/if}
