<script lang="ts">
	import FadeIn from '#lib/components/FadeIn.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { personal, metrics } from '#lib/data/resume';

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout> | undefined;

	async function handleCopyEmail() {
		try {
			await navigator.clipboard.writeText(personal.email);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			// fallback
		}
	}
</script>

<section
	id="hero"
	class="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[85vh] scroll-mt-20"
>
	<FadeIn delay={0.05}>
		<!-- Availability Badge -->
		<div
			class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-medium mb-6"
		>
			<span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
			<span>Available for Technical Lead & Advisory Roles</span>
		</div>

		<!-- Headline -->
		<h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-text-main leading-tight mb-4">
			{personal.name}
		</h1>

		<p class="text-xl sm:text-2xl text-sky-600 dark:text-sky-400 font-medium mb-6">
			{personal.title}
			<span class="text-text-muted font-normal text-lg sm:text-xl">
				· Distributed Systems & Cloud-Native
			</span>
		</p>

		<p class="text-text-sub text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
			{personal.tagline} Hands-on engineering leader specializing in high-concurrency systems, payment
			gateways, and modern engineering standards.
		</p>

		<!-- Action Buttons -->
		<div class="flex flex-wrap items-center gap-3 mb-16">
			<a
				href="#contact"
				class="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-colors text-sm shadow-xs"
			>
				Get in Touch
			</a>

			<button
				type="button"
				onclick={handleCopyEmail}
				aria-label={copied ? 'Email copied!' : 'Copy email address'}
				class="px-5 py-2.5 border border-border-card bg-surface-card hover:bg-surface-muted text-text-main rounded-xl transition-colors text-sm font-mono flex items-center gap-2"
			>
				<Icon name="copy" class="w-4 h-4 text-sky-600 dark:text-sky-400" />
				<span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
			</button>

			<a
				href="#experience"
				class="px-4 py-2.5 text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm"
			>
				View Experience ↓
			</a>
		</div>
	</FadeIn>

	<!-- Flat Minimalist Stats Row -->
	<FadeIn delay={0.15}>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border-card">
			{#each metrics as m (m.label)}
				<div class="flex flex-col">
					<span class="text-3xl font-bold font-mono text-text-main tracking-tight">
						{m.value}
					</span>
					<span
						class="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1 uppercase tracking-wider"
					>
						{m.unit}
					</span>
					<span class="text-xs text-text-muted mt-1 leading-snug">
						{m.label}
					</span>
				</div>
			{/each}
		</div>
	</FadeIn>
</section>
