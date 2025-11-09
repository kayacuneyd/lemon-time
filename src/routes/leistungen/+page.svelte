<script lang="ts">
	import { servicesContent } from '$lib/data/services';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const services = derived(locale, ($locale) => servicesContent[$locale]);
</script>

<svelte:head>
	<title>Leistungen | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-6">
		<h1 class="text-4xl font-semibold text-brand-secondary md:text-5xl">
			{$services.intro.title}
		</h1>
		<p class="max-w-3xl text-lg text-brand-secondary/80">
			{$services.intro.description}
		</p>
	</div>
</section>

<section class="bg-surface-muted py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="grid gap-6 md:grid-cols-2">
			{#each $services.capabilities as capability (capability.id)}
				<article class="card h-full bg-surface">
					<h2 id={capability.id} class="text-2xl font-semibold text-brand-secondary">
						{capability.title}
					</h2>
					<p class="mt-3 text-brand-secondary/75">{capability.description}</p>
					<ul class="mt-4 space-y-2 text-sm text-brand-secondary/75">
						{#each capability.outcomes as outcome, index (index)}
							<li class="flex items-start gap-2">
								<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
								<span>{outcome}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">Unser Prozess</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/70">
				Von der ersten Idee bis zur Evaluation – so arbeiten wir mit Kund:innen zusammen.
			</p>
		</div>
		<ol class="grid gap-6 md:grid-cols-3">
			{#each $services.process as step (step.step)}
				<li class="card h-full bg-surface-muted">
					<span class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
						Step {step.step}
					</span>
					<h3 class="mt-3 text-xl font-semibold text-brand-secondary">{step.title}</h3>
					<p class="mt-2 text-sm text-brand-secondary/75">{step.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="bg-surface-muted py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">Case Highlights</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/70">
				Eine Auswahl aktueller Projekte – messbar, relevant und kulturell anschlussfähig.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each $services.caseHighlights as highlight (highlight.client)}
				<article class="card h-full bg-surface">
					<div class="flex items-center justify-between text-sm text-brand-secondary/70">
						<span class="font-semibold uppercase tracking-[0.2em] text-brand-primary">
							{highlight.client}
						</span>
						<span>{highlight.industry}</span>
					</div>
					<p class="mt-3 text-lg font-semibold text-brand-secondary">{highlight.summary}</p>
					<ul class="mt-4 space-y-2 text-sm text-brand-secondary/75">
						{#each highlight.results as result, index (index)}
							<li class="flex items-start gap-2">
								<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
								<span>{result}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

