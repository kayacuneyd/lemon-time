<script lang="ts">
	import { aboutContent } from '$lib/data/about';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const about = derived(locale, ($locale) => aboutContent[$locale]);
</script>

<svelte:head>
	<title>Über uns | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-16 sm:py-24">
	<div class="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
		<div class="space-y-6">
			<h1 class="text-4xl font-semibold text-brand-secondary md:text-5xl">
				{$about.intro.title}
			</h1>
			{#each $about.intro.body as paragraph, index (index)}
				<p class="text-lg text-brand-secondary/80">{paragraph}</p>
			{/each}
		</div>
		<div class="space-y-6 rounded-4xl bg-surface-muted p-8 shadow-card">
			<h2 class="text-2xl font-semibold text-brand-secondary">{$about.mission.title}</h2>
			{#each $about.mission.body as paragraph, index (index)}
				<p class="text-brand-secondary/75">{paragraph}</p>
			{/each}
			<ul class="grid gap-4 md:grid-cols-3">
				{#each $about.mission.values as value (value.title)}
					<li class="rounded-3xl bg-surface px-4 py-5 shadow-card">
						<h3 class="text-base font-semibold text-brand-secondary">{value.title}</h3>
						<p class="mt-2 text-sm text-brand-secondary/70">{value.description}</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="bg-surface-muted py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">
				Meilensteine
			</h2>
			<p class="mx-auto max-w-3xl text-brand-secondary/70">
				Unsere Geschichte ist geprägt von mutigen Kund:innen, starken Communities und kontinuierlichem Lernen.
			</p>
		</div>
		<ol class="grid gap-6 md:grid-cols-2">
			{#each $about.timeline as item (item.year)}
				<li class="card bg-surface">
					<p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
						{item.year}
					</p>
					<h3 class="mt-3 text-xl font-semibold text-brand-secondary">{item.title}</h3>
					<p class="mt-2 text-sm text-brand-secondary/75">{item.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="bg-surface py-16 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">
				{$about.team.title}
			</h2>
			<p class="mx-auto max-w-3xl text-brand-secondary/70">
				{$about.team.description}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each $about.team.members as member (member.name)}
				<article class="card flex h-full flex-col gap-4 bg-surface">
					<div class="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary/30 via-brand-primary/10 to-brand-secondary/20" aria-hidden="true"></div>
					<div class="space-y-2">
						<h3 class="text-lg font-semibold text-brand-secondary">{member.name}</h3>
						<p class="text-sm font-medium text-brand-secondary/70">{member.role}</p>
						<p class="text-sm text-brand-secondary/70">{member.bio}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

{#if $about.video}
	<section class="bg-surface-muted py-16 sm:py-24">
		<div class="container space-y-6">
			<div class="space-y-2 text-center">
				<h2 class="text-3xl font-semibold text-brand-secondary md:text-4xl">
					{$about.video.title}
				</h2>
				<p class="mx-auto max-w-2xl text-brand-secondary/70">
					{$about.video.description}
				</p>
			</div>
			<div class="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-4xl shadow-card">
				<iframe
					src={$about.video.url}
					title={$about.video.title}
					loading="lazy"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="h-full w-full"
				></iframe>
			</div>
		</div>
	</section>
{/if}

