<script lang="ts">
	import { legalContent } from '$lib/data/legal';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const cookies = derived(locale, ($locale) => legalContent[$locale].cookies);
</script>

<svelte:head>
	<title>Cookie Policy | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-6">
		<h1 class="text-4xl font-semibold text-brand-secondary md:text-5xl">
			{ $cookies.title }
		</h1>
		<div class="space-y-8">
			{#each $cookies.sections as section (section.title)}
				<section class="rounded-4xl bg-surface-muted px-6 py-6 shadow-card">
					<h2 class="text-xl font-semibold text-brand-secondary">{section.title}</h2>
					{#each section.content as paragraph, index (index)}
						<p class="mt-3 text-sm text-brand-secondary/75">{paragraph}</p>
					{/each}
				</section>
			{/each}
		</div>
	</div>
</section>

