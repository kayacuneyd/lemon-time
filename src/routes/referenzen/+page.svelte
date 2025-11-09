<script lang="ts">
	import { referencesContent } from '$lib/data/references';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const references = derived(locale, ($locale) => referencesContent[$locale]);
</script>

<svelte:head>
	<title>Referenzen | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-6">
		<h1 class="text-4xl font-semibold text-brand-secondary md:text-5xl">
			{$references.intro.title}
		</h1>
		<p class="max-w-3xl text-lg text-brand-secondary/80">
			{$references.intro.description}
		</p>
	</div>
</section>

<section class="bg-surface-muted py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-wrap gap-3">
			{#each $references.filters as filter (filter.id)}
				<span class="rounded-full border border-brand-secondary/15 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary/70">
					{filter.label}
				</span>
			{/each}
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
			{#each $references.logos as logo (logo.name)}
				<div class="card flex aspect-[3/2] items-center justify-center bg-surface text-center text-sm font-semibold uppercase tracking-wide text-brand-secondary/70">
					{logo.name}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">Case Studies</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/70">
				Eine Auswahl unserer Projekte – mit Fokus auf Zielsetzung, Umsetzung und Resultate.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each $references.cases as customerCase (customerCase.id)}
				<article class="card h-full bg-surface">
					<div class="flex items-center justify-between text-sm text-brand-secondary/70">
						<span class="font-semibold uppercase tracking-[0.2em] text-brand-primary">
							{customerCase.client}
						</span>
						<span>{customerCase.year}</span>
					</div>
					<h3 class="mt-3 text-xl font-semibold text-brand-secondary">{customerCase.summary}</h3>
					<p class="mt-2 text-sm text-brand-secondary/70">{customerCase.industry}</p>
					<ul class="mt-4 space-y-2 text-sm text-brand-secondary/75">
						{#each customerCase.highlights as highlight, index (index)}
							<li class="flex items-start gap-2">
								<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-brand-secondary py-16 text-neutral-50 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold md:text-4xl">Stimmen unserer Kund:innen</h2>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each $references.testimonials as testimonial (testimonial.name)}
				<blockquote class="rounded-4xl border border-neutral-100/10 bg-white/5 p-8 shadow-card backdrop-blur">
					<p class="text-lg font-medium text-neutral-50/90">“{testimonial.quote}”</p>
					<footer class="mt-4 text-sm text-neutral-100/80">
						<strong>{testimonial.name}</strong>, {testimonial.role} · {testimonial.client}
					</footer>
				</blockquote>
			{/each}
		</div>
	</div>
</section>

