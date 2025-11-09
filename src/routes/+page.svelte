<script lang="ts">
	import { homeContent } from '$lib/data/home';
	import { siteConfig } from '$lib/data/site';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const home = derived(locale, ($locale) => homeContent[$locale]);
	const { brand } = siteConfig;
</script>

<section class="relative overflow-hidden bg-surface pb-16 pt-20 dark:bg-brand-dark sm:pt-24 lg:pb-28">
	<div class="container grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
		<div class="space-y-8">
			<div class="space-y-4">
				<span class="inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-secondary dark:border-brand-primary/50 dark:bg-brand-primary/20 dark:text-neutral-50">
					{$home.hero.badge}
				</span>
				<h1 class="text-4xl font-bold leading-tight text-brand-secondary dark:text-neutral-50 md:text-5xl">
					{$home.hero.title}
				</h1>
				<p class="text-lg text-brand-secondary/80 dark:text-neutral-200 md:text-xl">
					{$home.hero.subtitle}
				</p>
				{#if $home.hero.description}
					<p class="text-base text-brand-secondary/70 dark:text-neutral-200/80">
						{$home.hero.description}
					</p>
				{/if}
			</div>
			<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
				<a class="btn-primary" href={$home.hero.primaryCta.href}>{$home.hero.primaryCta.label}</a>
				<a class="btn-secondary" href={$home.hero.secondaryCta.href}>{$home.hero.secondaryCta.label}</a>
			</div>
			<div class="grid grid-cols-2 gap-6 rounded-4xl border border-brand-secondary/10 bg-surface p-6 shadow-card dark:border-brand-primary/20 dark:bg-brand-dark sm:grid-cols-3">
				{#each $home.hero.stats as stat (stat.label)}
					<div class="space-y-1">
						<p class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-4xl">
							{stat.value}
						</p>
						<p class="text-sm uppercase tracking-wide text-brand-secondary/65 dark:text-neutral-300">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="relative flex justify-center">
			<div class="relative aspect-square w-full max-w-[440px]">
				<div class="absolute -inset-6 rounded-[50%] bg-gradient-to-br from-brand-primary/70 via-brand-primary/30 to-brand-secondary/50 blur-3xl dark:from-brand-primary/40 dark:via-brand-secondary/30 dark:to-brand-primary/30"></div>
				<div class="relative flex h-full w-full flex-col items-center justify-center gap-6">
					<div class="hero-lemon">
						<img
							src="/images/lemon-bgwhite.png"
							alt="Lemon-Time hero illustration"
							class="hero-lemon__img"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div class="hero-lemon__shadow" aria-hidden="true"></div>
					<div class="pointer-events-none rounded-3xl border border-white/25 bg-white/85 px-6 py-4 text-left text-sm font-semibold text-brand-secondary shadow-lg backdrop-blur dark:border-brand-primary/30 dark:bg-brand-dark/80 dark:text-neutral-50">
						<p class="text-xs font-medium uppercase tracking-[0.35em] text-brand-secondary/70 dark:text-neutral-200/80">
							{$home.hero.visual.highlight}
						</p>
						<p>{$home.hero.visual.caption}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-surface-muted py-16 dark:bg-brand-dark/80 sm:py-24">
	<div class="container grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-center">
		<div class="space-y-6">
			<h2 class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50">{$home.about.title}</h2>
			<p class="text-brand-secondary/80 dark:text-neutral-200">
				{$home.about.description}
			</p>
			{#if $home.about.cta}
				<a href={$home.about.cta.href} class="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition hover:text-brand-primary dark:text-neutral-50 dark:hover:text-brand-primary">
					{$home.about.cta.label}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			{/if}
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each $home.about.items ?? [] as item (item.title)}
				<div class="card h-full bg-surface dark:bg-brand-dark/60">
					<h3 class="text-lg font-semibold text-brand-secondary dark:text-neutral-50">{item.title}</h3>
					<p class="mt-2 text-sm text-brand-secondary/75 dark:text-neutral-200">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 dark:bg-brand-dark sm:py-24">
	<div class="container space-y-12">
		<div class="flex flex-col gap-4 text-center">
			<span class="mx-auto inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary dark:text-neutral-50">
				{$home.services.pretitle}
			</span>
			<h2 class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-4xl">
				{$home.services.title}
			</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/75 dark:text-neutral-200">
				{$home.services.description}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each $home.services.items as service (service.title)}
				<a href={service.href} class="group card h-full transition hover:-translate-y-2">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/20 text-brand-secondary dark:bg-brand-primary/30 dark:text-neutral-50">
						{#if service.icon === 'strategy'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 17l6-6 4 4 6-6" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 17h4v4h-4z" />
							</svg>
						{:else if service.icon === 'campaign'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l9-5 9 5-9 5-9-5z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13l9-5v10l-9 5-9-5V8" />
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7h18M3 12h10m-10 5h18" />
							</svg>
						{/if}
					</div>
					<h3 class="mt-6 text-xl font-semibold text-brand-secondary dark:text-neutral-50">{service.title}</h3>
					<p class="mt-2 text-sm text-brand-secondary/75 dark:text-neutral-200">{service.description}</p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition group-hover:text-brand-primary dark:text-neutral-50">
						{$home.services.ctaLabel}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface-muted py-16 dark:bg-brand-dark/80 sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-4xl">{$home.values.title}</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/75 dark:text-neutral-200">
				{$home.values.description}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each $home.values.items as value (value.title)}
				<div class="card h-full space-y-4 bg-surface dark:bg-brand-dark/60">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-secondary dark:bg-brand-primary/25 dark:text-neutral-50">
						{#if value.icon === 'culture'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a9 9 0 0118 0c0 7-9 12-9 12S3 16 3 9z" />
							</svg>
						{:else if value.icon === 'insights'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5a7 7 0 017 7v1h1a2 2 0 012 2v4h-6v-4h4" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.21 4.21a16 16 0 015.37-2.93" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12a10 10 0 0114-9.54" />
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 12h10m-10 5h16" />
							</svg>
						{/if}
					</div>
					<h3 class="text-xl font-semibold text-brand-secondary dark:text-neutral-50">{value.title}</h3>
					<p class="text-sm text-brand-secondary/75 dark:text-neutral-200">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 dark:bg-brand-dark sm:py-24">
	<div class="container space-y-10">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-4xl">{$home.spotlight.title}</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/75 dark:text-neutral-200">
				{$home.spotlight.description}
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each $home.spotlight.items as item (item.title)}
				<article class="group relative overflow-hidden rounded-4xl border border-brand-secondary/10 shadow-card dark:border-brand-primary/20">
					<img src={item.media} alt={item.title} class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
					<div class="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/30 to-transparent"></div>
					<div class="absolute inset-x-0 bottom-0 space-y-1 px-6 py-6 text-white">
						<p class="text-xs uppercase tracking-[0.4em] text-white/70">{item.meta}</p>
						<h3 class="text-xl font-semibold">{item.title}</h3>
						<p class="text-sm text-white/80">{item.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="bg-surface py-16 dark:bg-brand-dark sm:py-24">
	<div class="container space-y-12">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-3xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-4xl">{$home.references.title}</h2>
			<p class="mx-auto max-w-2xl text-brand-secondary/75 dark:text-neutral-200">
				{$home.references.description}
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
			{#each $home.references.logos as reference (reference.name)}
				<div class="flex aspect-[3/2] items-center justify-center rounded-3xl border border-brand-secondary/10 bg-surface-muted text-center text-sm font-semibold uppercase tracking-wide text-brand-secondary/70 transition hover:border-brand-primary hover:bg-brand-primary/10 dark:border-brand-primary/20 dark:bg-brand-dark/70 dark:text-neutral-50">
					{reference.name}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="relative overflow-hidden bg-gradient-to-br from-brand-secondary via-[#0f2036] to-brand-primary py-20 text-neutral-50">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.15),_transparent_45%)] blur-3xl"></div>
	<div class="container relative z-10 grid gap-6 text-center md:text-left lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
		<div class="space-y-4">
			<h2 class="neon-heading text-3xl font-semibold md:text-4xl">
				{$home.cta.title}
			</h2>
			<p class="max-w-xl text-neutral-100/90">
				{$home.cta.description}
			</p>
		</div>
		<div class="flex flex-col gap-4 md:flex-row md:justify-end">
			<a href={$home.cta.primary.href} class="btn-secondary bg-neutral-50 text-brand-secondary hover:text-brand-primary">
				{$home.cta.primary.label}
			</a>
			<a href={$home.cta.secondary.href} class="btn-secondary border-neutral-50 text-neutral-50 hover:bg-neutral-50 hover:text-brand-secondary">
				{$home.cta.secondary.label}
			</a>
		</div>
	</div>
	<div class="absolute inset-y-0 right-[-10%] hidden aspect-square w-[45vw] rounded-full bg-brand-primary/10 blur-3xl lg:block" aria-hidden="true"></div>
</section>
