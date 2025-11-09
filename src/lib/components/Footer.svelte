<script lang="ts">
	import { siteConfig } from '$lib/data/site';
	import { getNavigationLabels } from '$lib/i18n';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const currentYear = new Date().getFullYear();
	const { brand, contact, socials, footer } = siteConfig;
	const navLabels = derived(locale, ($locale) => getNavigationLabels($locale));
</script>

<footer class="bg-brand-secondary text-neutral-50 dark:bg-brand-dark" aria-label="Seitenende">
	<div class="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
		<div class="space-y-4">
			<div class="flex items-center gap-3 text-xl font-semibold">
				<div class="rounded-full border border-white/10 bg-white/15 p-2 shadow-lg backdrop-blur">
					<img src={brand.logo.src} alt={brand.logo.alt} class="h-10 w-auto mix-blend-normal" loading="lazy" />
				</div>
				<span>{brand.name}</span>
			</div>
			<p class="text-sm text-neutral-100/90">
				{brand.tagline}
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-brand-primary">Schnellzugriff</h2>
			<ul class="mt-4 space-y-2 text-sm">
				{#each footer.quickLinks as link (link.href)}
					{@const label = link.key ? $navLabels[link.key] : link.label}
					<li>
						<a
							href={link.href}
							class="transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
						>
							{label ?? link.href}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-brand-primary">Kontakt</h2>
			<ul class="mt-4 space-y-2 text-sm text-neutral-100/90">
				<li>
					Telefon:
					<a href={`tel:${contact.phone.replace(/\s+/g, '')}`} class="hover:text-brand-primary">
						{contact.phone}
					</a>
				</li>
				<li>
					E-Mail:
					<a href={`mailto:${contact.email}`} class="hover:text-brand-primary">{contact.email}</a>
				</li>
				<li>
					Adresse: {contact.address.street}, {contact.address.postalCode} {contact.address.city}
				</li>
			</ul>
			<div class="mt-4 flex gap-3">
				{#each socials as { href, label } (href)}
					<a
						href={href}
						class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100/10 text-neutral-50 transition hover:bg-brand-primary hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
						aria-label={label}
					>
						{#if label === 'LinkedIn'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4.98 3.5a2.5 2.5 0 11-2.49-2.5 2.5 2.5 0 012.49 2.5zM.5 23.5h4.99V7.5H.5zM8.5 7.5h4.78v2.18h.07c.67-1.2 2.31-2.47 4.76-2.47 5.09 0 6.03 3.35 6.03 7.7v8.6h-4.99v-7.62c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03v7.76H8.5z" />
							</svg>
						{:else if label === 'Instagram'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<rect x="2.5" y="2.5" width="19" height="19" rx="6" />
								<path d="M12 7.5a4.5 4.5 0 104.5 4.5A4.5 4.5 0 0012 7.5z" />
								<circle cx="18" cy="6" r="1.2" fill="currentColor" />
							</svg>
						{:else if label === 'YouTube'}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M21.6 7.2A2.7 2.7 0 0019.7 5.3C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 002.4 7.2 28 28 0 002 12a28 28 0 00.3 4.8 2.7 2.7 0 001.9 1.9c1.7.3 7.7.3 7.7.3s6 0 7.7-.3a2.7 2.7 0 001.9-1.9A28 28 0 0022 12a28 28 0 00-.4-4.8zM10 15.3V8.7l5.2 3.3z" />
							</svg>
						{:else}
							<span class="font-semibold">{label[0]}</span>
						{/if}
					</a>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-brand-primary">Rechtliches</h2>
			<ul class="mt-4 space-y-2 text-sm">
				{#each footer.legalLinks as link (link.href)}
					<li>
						<a
							href={link.href}
							class="transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="border-t border-neutral-100/10">
		<div class="container flex flex-col gap-2 py-6 text-xs text-neutral-100/80 md:flex-row md:items-center md:justify-between">
			<p>&copy; {currentYear} Lemon-Time GmbH. Alle Rechte vorbehalten.</p>
			<p>Design &amp; Entwicklung mit Cüneyt Kaya</p>
		</div>
	</div>
</footer>
