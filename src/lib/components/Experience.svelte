<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { experiences } from '#lib/data/resume';

	type FilterCategory = 'all' | 'fintech' | 'streaming' | 'startup' | 'enterprise';

	const filters: { key: FilterCategory; label: string }[] = [
		{ key: 'all', label: 'All Projects' },
		{ key: 'startup', label: '0-to-1 Platform' },
		{ key: 'fintech', label: 'FinTech & Payments' },
		{ key: 'streaming', label: 'High-Scale Streaming' },
		{ key: 'enterprise', label: 'Enterprise' }
	];

	let selectedFilter = $state<FilterCategory>('all');

	let filteredExperiences = $derived(
		experiences.filter((exp) => {
			if (selectedFilter === 'all') return true;
			return exp.category === selectedFilter;
		})
	);
</script>

<section id="experience" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<SectionTitle
				title="Experience & Systems Built"
				subtitle="10+ years of leading engineering teams and building production-grade distributed architectures."
			/>
		</FadeIn>

		<!-- Filter Pills -->
		<FadeIn delay={0.05}>
			<div class="flex flex-wrap items-center gap-2 mb-8">
				{#each filters as f (f.key)}
					<button
						type="button"
						aria-pressed={selectedFilter === f.key}
						onclick={() => (selectedFilter = f.key)}
						class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors {selectedFilter ===
						f.key
							? 'bg-sky-600 text-white shadow-xs'
							: 'bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700'}"
					>
						{f.label}
					</button>
				{/each}
			</div>
		</FadeIn>

		<!-- Experience List -->
		<div class="flex flex-col gap-6">
			{#each filteredExperiences as exp (exp.company)}
				<div>
					<Card class="p-6 sm:p-8">
						<!-- Header -->
						<div
							class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4"
						>
							<div>
								<div class="flex items-center gap-2 flex-wrap">
									<h3 class="text-xl font-bold text-text-main">
										{exp.company}
									</h3>
									<span
										class="text-xs font-medium text-text-muted px-2 py-0.5 rounded bg-surface-muted border border-border-card"
									>
										{exp.subtitle}
									</span>
								</div>

								<p class="text-sky-600 dark:text-sky-400 font-medium text-sm mt-1">
									{exp.role}
									{#if exp.roleNote}
										<span class="text-text-muted font-normal ml-2">
											({exp.roleNote})
										</span>
									{/if}
								</p>
							</div>

							<div class="text-xs text-text-muted font-mono sm:text-right shrink-0">
								<p class="font-semibold text-text-sub">{exp.period}</p>
								<p>{exp.location}</p>
							</div>
						</div>

						<!-- Bullets -->
						<ul class="space-y-2 mb-5 text-sm text-text-sub leading-relaxed">
							{#each exp.bullets as b, j (j)}
								<li class="flex gap-2.5 items-start">
									<span class="text-sky-500 mt-1 select-none text-xs">
										•
									</span>
									<span>{b}</span>
								</li>
							{/each}
						</ul>

						<!-- Tech Stack -->
						<div
							class="pt-4 border-t border-border-card text-xs font-mono text-text-muted"
						>
							<span class="font-semibold text-text-sub mr-2">Stack:</span>
							<span>{exp.stack}</span>
						</div>

						<!-- Tags -->
						{#if exp.tags && exp.tags.length > 0}
							<div
								class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border-card/60"
							>
								{#each exp.tags as tag (tag)}
									<span
										class="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}
					</Card>
				</div>
			{/each}
		</div>
	</div>
</section>
