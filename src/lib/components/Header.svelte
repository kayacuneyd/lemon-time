<script lang="ts">
	import { page } from '$app/stores';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { getNavigationLabels } from '$lib/i18n';
	import { siteConfig } from '$lib/data/site';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const navLinks = [
		{ href: '/', key: 'home' },
		{ href: '/ueber-uns', key: 'about' },
		{ href: '/leistungen', key: 'services' },
		{ href: '/referenzen', key: 'references' },
		{ href: '/karriere', key: 'career' },
		{ href: '/kontakt', key: 'contact' }
	] as const;

	const isActive = derived(page, ($page) => (href: string) => $page.url.pathname === href);
	const labels = derived(locale, ($locale) => getNavigationLabels($locale));

	let isMobileOpen = false;

	const closeMobile = () => {
		isMobileOpen = false;
	};
</script>

<header
	class="sticky top-0 z-50 border-b border-brand-secondary/10 bg-surface/80 backdrop-blur-xl transition-all dark:border-brand-primary/20 dark:bg-brand-dark/70"
>
	<div class="container flex items-center justify-between gap-6 py-4">
		<a href="/" class="flex items-center gap-3 text-lg font-semibold text-brand-secondary dark:text-neutral-50">
			<img
				src={siteConfig.brand.logo.src}
				alt={siteConfig.brand.logo.alt}
				class="h-10 w-auto"
				loading="lazy"
			/>
			<span class="hidden sm:inline">{siteConfig.brand.name}</span>
		</a>
		<nav class="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
			{#each navLinks as link (link.href)}
				{@const active = $isActive(link.href)}
				<a
					href={link.href}
					class="relative rounded-full px-4 py-2 text-sm font-medium text-brand-secondary transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:text-neutral-50"
					aria-current={active ? 'page' : undefined}
				>
					<span class={`${active ? 'text-brand-secondary dark:text-neutral-50' : 'dark:text-neutral-200'}`}>
						{$labels[link.key]}
					</span>
					{#if active}
						<span
							aria-hidden="true"
							class="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-brand-primary"
						></span>
					{/if}
				</a>
			{/each}
		</nav>
		<div class="flex items-center gap-3">
			<LanguageSwitcher />
			<ThemeToggle />
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition hover:border-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:border-brand-primary/40 dark:text-neutral-50 lg:hidden"
				aria-label={isMobileOpen ? 'Menü schließen' : 'Menü öffnen'}
				on:click={() => (isMobileOpen = !isMobileOpen)}
			>
				{#if isMobileOpen}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 12h16M4 16h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
	{#if isMobileOpen}
		<div class="border-t border-brand-secondary/10 bg-surface/95 shadow-lg dark:border-brand-primary/30 dark:bg-brand-dark/95 lg:hidden">
			<nav class="container flex flex-col gap-2 py-4" aria-label="Mobile Navigation">
				{#each navLinks as link (link.href)}
					{@const active = $isActive(link.href)}
					<a
						href={link.href}
					class="flex items-center justify-between rounded-3xl px-5 py-3 text-base font-medium text-brand-secondary transition hover:bg-brand-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:text-neutral-50"
						aria-current={active ? 'page' : undefined}
						on:click={closeMobile}
					>
						<span>{$labels[link.key]}</span>
						{#if active}
							<span class="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true"></span>
						{/if}
					</a>
				{/each}
				<a
					href="/kontakt"
					class="btn-primary mt-2"
					on:click={closeMobile}
				>
					Projekt starten
				</a>
			</nav>
		</div>
	{/if}
</header>
