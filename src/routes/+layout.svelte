<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { themeState } from '#lib/theme.svelte';

	let { children } = $props();

	$effect(() => {
		themeState.init();
	});
</script>

<svelte:head>
	<title>Trần Đăng Quang — Technical Lead</title>
	<meta
		name="description"
		content="Personal portfolio of Trần Đăng Quang, a hands-on Technical Lead with 10+ years building cloud-native backends, distributed systems, and payment platforms."
	/>
	<meta property="og:title" content="Trần Đăng Quang — Technical Lead" />
	<meta
		property="og:description"
		content="Hands-on Technical Lead with 10+ years of experience in cloud-native backends, distributed systems, and payment solutions."
	/>
	<meta property="og:type" content="website" />
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:outline-none"
>
	Skip to main content
</a>

{@render children()}
