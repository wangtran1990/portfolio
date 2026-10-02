<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { about } from '#lib/data/resume';

	const pillars = [
		{
			title: 'Technical Leadership',
			description:
				'Led cross-functional teams (backend, mobile, web). Hands-on in system design, rigorous code review standards, and engineer mentorship.'
		},
		{
			title: 'High-Scale Concurrency',
			description:
				'Designed streaming and billing backends scaling to 400,000+ concurrent users with distributed caching and robust fault-tolerance.'
		},
		{
			title: 'AI Engineering Workflows',
			description:
				'Actively applying modern AI coding agents (Claude Code, Copilot, OpenCode) to accelerate development cycles and improve code quality.'
		}
	];
</script>

<section id="about" class="py-20 px-6 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<SectionTitle
				title="About Me"
				subtitle="Hands-on Technical Lead bridging architectural vision, execution speed, and cross-functional leadership."
			/>
		</FadeIn>

		<!-- Narrative Card -->
		<FadeIn delay={0.08}>
			<Card class="mb-6 p-7 sm:p-9">
				<p class="text-text-sub text-base sm:text-lg leading-relaxed font-normal">
					{about}
				</p>
			</Card>
		</FadeIn>

		<!-- 3 Pillars Row -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each pillars as p, i (p.title)}
				<FadeIn delay={0.12 + i * 0.05}>
					<Card class="h-full p-6">
						<h3 class="font-semibold text-text-main text-base mb-2">
							{p.title}
						</h3>
						<p class="text-text-muted text-xs sm:text-sm leading-relaxed">
							{p.description}
						</p>
					</Card>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>
