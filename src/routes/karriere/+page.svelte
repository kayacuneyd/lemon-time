<script lang="ts">
	import { careerContent } from '$lib/data/career';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const career = derived(locale, ($locale) => careerContent[$locale]);
</script>

<svelte:head>
	<title>Karriere | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-6">
		<h1 class="text-4xl font-semibold text-brand-secondary md:text-5xl">
			{$career.intro.title}
		</h1>
		<p class="max-w-3xl text-lg text-brand-secondary/80">
			{$career.intro.description}
		</p>
	</div>
</section>

<section class="bg-surface-muted py-16 sm:py-24">
	<div class="container grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
		<div class="space-y-4">
			<h2 class="text-2xl font-semibold text-brand-secondary">Was uns wichtig ist</h2>
			<ul class="space-y-3 text-brand-secondary/75">
				{#each $career.values as value (value.title)}
					<li class="rounded-3xl bg-surface px-5 py-4 shadow-card">
						<h3 class="text-base font-semibold text-brand-secondary">{value.title}</h3>
						<p class="mt-1 text-sm">{value.description}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="space-y-4 rounded-4xl bg-surface p-6 shadow-card">
			<h2 class="text-2xl font-semibold text-brand-secondary">Benefits</h2>
			<ul class="grid gap-3 sm:grid-cols-2">
				{#each $career.benefits as benefit (benefit.title)}
					<li class="rounded-3xl bg-surface-muted px-4 py-4 text-sm text-brand-secondary/75">
						<h3 class="text-base font-semibold text-brand-secondary">{benefit.title}</h3>
						<p class="mt-1">{benefit.description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">Aktuelle Stellen</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/70">
				Kreative Köpfe, Strategie-Talente oder Organisationstalente – wir freuen uns auf neue Kolleg:innen.
			</p>
		</div>
		{#if $career.openings.length > 0}
			<div class="grid gap-6 md:grid-cols-2">
				{#each $career.openings as opening (opening.id)}
					<article class="card flex h-full flex-col bg-surface">
						<div class="flex flex-col gap-2">
							<h3 class="text-2xl font-semibold text-brand-secondary">{opening.title}</h3>
							<p class="text-sm text-brand-secondary/60">
								{opening.location} · {opening.type}
							</p>
							<p class="text-brand-secondary/75">{opening.description}</p>
						</div>
						<div class="mt-4 space-y-3">
							<h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
								Aufgaben
							</h4>
							<ul class="space-y-2 text-sm text-brand-secondary/75">
								{#each opening.responsibilities as item, index (index)}
									<li class="flex items-start gap-2">
										<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-4 space-y-3">
							<h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
								Profil
							</h4>
							<ul class="space-y-2 text-sm text-brand-secondary/75">
								{#each opening.requirements as requirement, index (index)}
									<li class="flex items-start gap-2">
										<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
										<span>{requirement}</span>
									</li>
								{/each}
							</ul>
						</div>
						{#if opening.benefits?.length}
							<div class="mt-4 space-y-3">
								<h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
									Vorteile
								</h4>
								<ul class="space-y-2 text-sm text-brand-secondary/75">
									{#each opening.benefits as benefit, index (index)}
										<li class="flex items-start gap-2">
											<span aria-hidden="true" class="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary"></span>
											<span>{benefit}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
						<div class="mt-6">
							<a href="mailto:jobs@lemon-time.com" class="btn-primary">
								Jetzt bewerben
							</a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="rounded-4xl border border-dashed border-brand-secondary/20 bg-surface-muted px-6 py-12 text-center shadow-inner">
				<h3 class="text-2xl font-semibold text-brand-secondary">{$career.emptyState.title}</h3>
				<p class="mt-2 text-brand-secondary/70">{$career.emptyState.description}</p>
				<a href={$career.emptyState.cta.href} class="btn-primary mt-4 inline-flex">
					{$career.emptyState.cta.label}
				</a>
			</div>
		{/if}
	</div>
</section>
