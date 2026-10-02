<script lang="ts">
	let {
		title,
		subtitle,
		center = false
	}: {
		title: string;
		subtitle?: string;
		center?: boolean;
	} = $props();
</script>

<div class="mb-10 {center ? 'text-center' : ''}">
	<h2 class="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">
		{title}
	</h2>
	{#if subtitle}
		<p
			class="text-text-muted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed {center
				? 'mx-auto'
				: ''}"
		>
			{subtitle}
		</p>
	{/if}
</div>
