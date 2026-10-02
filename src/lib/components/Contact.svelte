<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import FadeIn from '#lib/components/FadeIn.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import SectionTitle from '#lib/components/SectionTitle.svelte';
	import { personal } from '#lib/data/resume';

	let copiedKey = $state<string | null>(null);
	let copyErrorKey = $state<string | null>(null);
	let copiedTimer: ReturnType<typeof setTimeout> | undefined;
	let errorTimer: ReturnType<typeof setTimeout> | undefined;

	async function copyToClipboard(text: string, key: string) {
		try {
			if (navigator?.clipboard?.writeText) {
				await navigator.clipboard.writeText(text);
				copiedKey = key;
				clearTimeout(copiedTimer);
				copiedTimer = setTimeout(() => (copiedKey = null), 2000);
				return;
			}
			throw new Error('Clipboard API unavailable');
		} catch {
			try {
				const textArea = document.createElement('textarea');
				textArea.value = text;
				textArea.style.position = 'fixed';
				textArea.style.opacity = '0';
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				const successful = document.execCommand('copy');
				document.body.removeChild(textArea);
				if (successful) {
					copiedKey = key;
					clearTimeout(copiedTimer);
					copiedTimer = setTimeout(() => (copiedKey = null), 2000);
					return;
				}
				throw new Error('execCommand failed');
			} catch {
				copyErrorKey = key;
				clearTimeout(errorTimer);
				errorTimer = setTimeout(() => (copyErrorKey = null), 2000);
			}
		}
	}
</script>

<section id="contact" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20">
	<div class="max-w-5xl mx-auto">
		<FadeIn>
			<SectionTitle
				title="Get in Touch"
				subtitle="Open to technical leadership, consulting, architecture advisory, and new opportunities."
				center
			/>
		</FadeIn>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
			<!-- Email -->
			<FadeIn delay={0.05}>
				<Card class="h-full p-6 flex flex-col justify-between">
					<div>
						<div
							class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4"
						>
							<Icon name="email" class="w-5 h-5" />
						</div>
						<h3
							class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1"
						>
							Email
						</h3>
						<a
							href="mailto:{personal.email}"
							class="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block"
						>
							{personal.email}
						</a>
					</div>

					<div
						class="pt-6 mt-6 border-t border-border-card flex items-center gap-2"
					>
						<a
							href="mailto:{personal.email}"
							class="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors"
						>
							Send Email
						</a>
						<button
							type="button"
							title="Copy email address"
							aria-label="Copy email address"
							onclick={() => copyToClipboard(personal.email, 'email')}
							class="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center"
						>
							{#if copiedKey === 'email'}
								<span class="text-sky-600 dark:text-sky-400 font-bold">✓</span>
							{:else if copyErrorKey === 'email'}
								<span class="text-rose-500 font-bold">!</span>
							{:else}
								<Icon name="copy" class="w-4 h-4" />
							{/if}
						</button>
					</div>
					{#if copyErrorKey === 'email'}
						<p class="text-xs text-rose-500 mt-2 font-mono text-center">
							Copy failed
						</p>
					{/if}
				</Card>
			</FadeIn>

			<!-- LinkedIn -->
			<FadeIn delay={0.1}>
				<Card class="h-full p-6 flex flex-col justify-between">
					<div>
						<div
							class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4"
						>
							<Icon name="linkedin" class="w-5 h-5" />
						</div>
						<h3
							class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1"
						>
							LinkedIn
						</h3>
						<p class="text-sm font-semibold text-text-main truncate">
							dang-quang-tran
						</p>
					</div>

					<div class="pt-6 mt-6 border-t border-border-card">
						<a
							href={personal.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs transition-colors"
						>
							<span>Open LinkedIn</span>
							<span>↗</span>
						</a>
					</div>
				</Card>
			</FadeIn>

			<!-- Phone / Location -->
			<FadeIn delay={0.15}>
				<Card class="h-full p-6 flex flex-col justify-between">
					<div>
						<div
							class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4"
						>
							<Icon name="phone" class="w-5 h-5" />
						</div>
						<h3
							class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1"
						>
							Phone / Location
						</h3>
						<a
							href="tel:{personal.phone.replace(/[^+\d]/g, '')}"
							class="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors block"
						>
							{personal.phone}
						</a>
						<p class="text-xs text-text-muted mt-1">📍 {personal.location}</p>
					</div>

					<div
						class="pt-6 mt-6 border-t border-border-card flex items-center gap-2"
					>
						<a
							href="tel:{personal.phone.replace(/[^+\d]/g, '')}"
							class="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors"
						>
							Call Phone
						</a>
						<button
							type="button"
							title="Copy phone number"
							aria-label="Copy phone number"
							onclick={() => copyToClipboard(personal.phone, 'phone')}
							class="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center"
						>
							{#if copiedKey === 'phone'}
								<span class="text-sky-600 dark:text-sky-400 font-bold">✓</span>
							{:else if copyErrorKey === 'phone'}
								<span class="text-rose-500 font-bold">!</span>
							{:else}
								<Icon name="copy" class="w-4 h-4" />
							{/if}
						</button>
					</div>
					{#if copyErrorKey === 'phone'}
						<p class="text-xs text-rose-500 mt-2 font-mono text-center">
							Copy failed
						</p>
					{/if}
				</Card>
			</FadeIn>
		</div>
	</div>
</section>
