<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { education } from '#lib/data/resume';
</script>

<section id="education" class="py-20 px-6 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<SectionTitle
				title="Education"
				subtitle="Academic background in computer science and software engineering."
			/>
		</FadeIn>

		<div class="grid sm:grid-cols-2 gap-6">
			{#each education as edu, i (edu.degree)}
				<FadeIn delay={i * 0.08}>
					<Card class="h-full p-6 flex flex-col justify-between">
						<div>
							<span
								class="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold mb-2 block"
							>
								{edu.period}
							</span>
							<h3 class="text-text-main font-semibold text-base mb-1">
								{edu.degree}
							</h3>
							<p class="text-text-muted text-sm">{edu.institution}</p>
						</div>
					</Card>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>
