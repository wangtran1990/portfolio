<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		class?: string;
		interactive?: boolean;
	}

	let {
		children,
		class: className = '',
		interactive = false,
		...restProps
	}: Props = $props();
</script>

<div
	class="bg-surface-card border border-border-card rounded-2xl p-6 sm:p-7 transition-all duration-200 {interactive
		? 'hover:border-sky-400/60 hover:shadow-sm dark:hover:border-sky-500/40'
		: ''} {className}"
	{...restProps}
>
	{@render children?.()}
</div>
