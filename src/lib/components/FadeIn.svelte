<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		delay = 0,
		direction = 'up'
	}: {
		children?: Snippet;
		class?: string;
		delay?: number;
		direction?: 'up' | 'left' | 'right' | 'none';
	} = $props();

	let el = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (!el) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			el.style.opacity = '1';
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					if (el) {
						el.style.animationPlayState = 'running';
					}
					observer.disconnect();
				}
			},
			{ rootMargin: '-50px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});

	let directionClass = $derived(
		direction === 'left'
			? 'fade-in-left'
			: direction === 'right'
				? 'fade-in-right'
				: direction === 'none'
					? 'fade-in-none'
					: 'fade-in-up'
	);
</script>

<div
	bind:this={el}
	class="{directionClass} {className}"
	style="animation-delay: {delay}s; animation-play-state: paused;"
>
	{@render children?.()}
</div>
