<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { achievements } from '#lib/data/resume';
</script>

<section id="achievements" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<SectionTitle
				title="Key Milestones & Impact"
				subtitle="Demonstrated impact across high-scale streaming, payment gateways, and technical leadership."
			/>
		</FadeIn>

		<div class="grid sm:grid-cols-2 gap-6">
			{#each achievements as item, i (item.title)}
				<FadeIn delay={i * 0.08}>
					<Card class="h-full p-6 sm:p-7 flex flex-col justify-between">
						<div>
							<span
								class="inline-block text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-2.5 py-0.5 rounded-full mb-3"
							>
								{item.tag || 'Milestone'}
							</span>

							<h3 class="text-text-main font-bold text-lg mb-2">
								{item.title}
							</h3>

							<p class="text-text-sub text-sm leading-relaxed">
								{item.description}
							</p>
						</div>
					</Card>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>
