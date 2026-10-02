<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { skills } from '#lib/data/resume';

	let selectedCategory = $state<string>('All');
	let searchQuery = $state<string>('');

	const categories = ['All', ...skills.map((s) => s.category)];

	let filteredGroups = $derived(
		skills
			.map((group) => {
				const matchesCategory =
					selectedCategory === 'All' || group.category === selectedCategory;

				if (!matchesCategory) return null;

				const query = searchQuery.trim().toLowerCase();
				const items = query
					? group.items.filter((item) => item.toLowerCase().includes(query))
					: group.items;

				if (items.length === 0) return null;

				return {
					...group,
					items
				};
			})
			.filter(Boolean) as typeof skills
	);
</script>

<section id="skills" class="py-20 px-6 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<div
				class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
			>
				<SectionTitle
					title="Skills & Technologies"
					subtitle="Core programming languages, distributed architecture, cloud infrastructure, and leadership."
				/>

				<!-- Quick search input -->
				<div class="w-full sm:w-60 relative shrink-0">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search skills..."
						class="w-full px-3.5 py-2 pl-9 rounded-xl bg-surface-card border border-border-card text-xs text-text-main placeholder:text-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus:border-sky-500 transition-colors"
					/>
					<div class="absolute left-3 top-2.5 pointer-events-none text-text-muted">
						<Icon name="search" class="w-4 h-4 text-text-muted" />
					</div>
					{#if searchQuery}
						<button
							type="button"
							aria-label="Clear search"
							onclick={() => (searchQuery = '')}
							class="absolute right-1 top-1/2 -translate-y-1/2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-xs text-text-muted hover:text-text-main rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
						>
							✕
						</button>
					{/if}
				</div>
			</div>
		</FadeIn>

		<!-- Category Pills -->
		<FadeIn delay={0.05}>
			<div class="flex flex-wrap gap-2 mb-8">
				{#each categories as cat (cat)}
					<button
						type="button"
						aria-pressed={selectedCategory === cat}
						onclick={() => (selectedCategory = cat)}
						class="px-4 py-2 rounded-full text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 {selectedCategory ===
						cat
							? 'bg-sky-600 text-white shadow-xs'
							: 'bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700'}"
					>
						{cat}
					</button>
				{/each}
			</div>
		</FadeIn>

		<!-- Skills Cards Grid -->
		{#if filteredGroups.length === 0}
			<div
				class="text-center py-10 border border-border-card rounded-2xl bg-surface-card text-text-muted text-sm"
			>
				No technologies match "{searchQuery}"
			</div>
		{:else}
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredGroups as group (group.category)}
					<div>
						<Card class="h-full p-6 flex flex-col justify-between">
							<div>
								<h3
									class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 pb-2 border-b border-border-card flex items-center justify-between"
								>
									<span>{group.category}</span>
									<span class="text-text-muted text-[10px] font-normal">
										{group.items.length}
									</span>
								</h3>

								<div class="flex flex-wrap gap-2">
									{#each group.items as item (item)}
										<span
											class="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md"
										>
											{item}
										</span>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
