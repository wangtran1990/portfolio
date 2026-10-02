<script lang="ts">
	let {
		name,
		class: className = 'w-4 h-4'
	}: {
		name:
			| 'search'
			| 'copy'
			| 'check'
			| 'sun'
			| 'moon'
			| 'hamburger'
			| 'close'
			| 'email'
			| 'phone'
			| 'linkedin';
		class?: string;
	} = $props();
</script>

{#if name === 'search'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/>
	</svg>
{:else if name === 'copy'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
		/>
	</svg>
{:else if name === 'check'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
	</svg>
{:else if name === 'sun'}
	<svg
		aria-hidden="true"
		class={className}
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		viewBox="0 0 24 24"
	>
		<circle cx="12" cy="12" r="5" />
		<path
			stroke-linecap="round"
			d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
		/>
	</svg>
{:else if name === 'moon'}
	<svg
		aria-hidden="true"
		class={className}
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
		/>
	</svg>
{:else if name === 'hamburger'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
{:else if name === 'close'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
{:else if name === 'email'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
		/>
	</svg>
{:else if name === 'phone'}
	<svg aria-hidden="true" class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
		/>
	</svg>
{:else if name === 'linkedin'}
	<svg aria-hidden="true" class={className} fill="currentColor" viewBox="0 0 24 24">
		<path
			d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
		/>
	</svg>
{/if}
