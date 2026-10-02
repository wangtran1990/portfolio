<script lang="ts">
	import About from '#lib/components/About.svelte';
	import CommandPalette from '#lib/components/CommandPalette.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Education from '#lib/components/Education.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Metrics from '#lib/components/Metrics.svelte';
	import Navbar from '#lib/components/Navbar.svelte';
	import Skills from '#lib/components/Skills.svelte';
</script>

<Navbar />
<CommandPalette />

<main id="content">
	<Hero />
	<About />
	<Experience />
	<Skills />
	<Metrics />
	<Education />
	<Contact />
</main>

<footer class="py-12 border-t border-border-card text-xs text-text-muted">
	<div
		class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
	>
		<div class="flex items-center gap-2">
			<span class="w-2 h-2 rounded-full bg-sky-500"></span>
			<span class="font-mono text-text-main font-medium">Trần Đăng Quang</span>
			<span>— Technical Lead</span>
		</div>
		<div class="font-mono text-[11px] text-text-muted">
			Built with SvelteKit 5 & Tailwind CSS
		</div>
	</div>
</footer>
