<script lang="ts">
	import { contactContent } from '$lib/data/contact';
	import { locale } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	const contact = derived(locale, ($locale) => contactContent[$locale]);
</script>

<svelte:head>
	<title>Kontakt | Lemon-Time GmbH</title>
</svelte:head>

<section class="bg-surface py-14 dark:bg-brand-dark sm:py-20">
	<div class="container space-y-6">
		<h1 class="text-4xl font-semibold text-brand-secondary dark:text-neutral-50 md:text-5xl">
			{$contact.intro.title}
		</h1>
		<p class="max-w-3xl text-lg text-brand-secondary/80 dark:text-neutral-200">
			{$contact.intro.description}
		</p>
	</div>
</section>

<section class="bg-surface-muted py-14 dark:bg-brand-dark/80 sm:py-20">
	<div class="container grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
		<div class="space-y-5 rounded-4xl bg-surface p-6 shadow-card dark:bg-brand-dark/60">
			<h2 class="text-2xl font-semibold text-brand-secondary dark:text-neutral-50">{$contact.form.title}</h2>
			<p class="text-brand-secondary/70 dark:text-neutral-200">
				{$contact.form.description}
			</p>
			<form class="space-y-4">
				<div class="grid gap-4 sm:grid-cols-2">
					<label class="flex flex-col gap-2 text-sm font-medium text-brand-secondary/80">
						{$contact.form.fields.name}
						<input
							type="text"
							name="name"
							required
							class="rounded-3xl border border-brand-secondary/15 bg-surface-muted px-4 py-3 text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-brand-primary/20 dark:bg-brand-dark/40 dark:text-neutral-50"
						/>
					</label>
					<label class="flex flex-col gap-2 text-sm font-medium text-brand-secondary/80">
						{$contact.form.fields.email}
						<input
							type="email"
							name="email"
							required
							class="rounded-3xl border border-brand-secondary/15 bg-surface-muted px-4 py-3 text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-brand-primary/20 dark:bg-brand-dark/40 dark:text-neutral-50"
						/>
					</label>
					<label class="flex flex-col gap-2 text-sm font-medium text-brand-secondary/80">
						{$contact.form.fields.phone}
						<input
							type="tel"
							name="phone"
							class="rounded-3xl border border-brand-secondary/15 bg-surface-muted px-4 py-3 text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-brand-primary/20 dark:bg-brand-dark/40 dark:text-neutral-50"
						/>
					</label>
					<label class="flex flex-col gap-2 text-sm font-medium text-brand-secondary/80">
						{$contact.form.fields.company}
						<input
							type="text"
							name="company"
							class="rounded-3xl border border-brand-secondary/15 bg-surface-muted px-4 py-3 text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-brand-primary/20 dark:bg-brand-dark/40 dark:text-neutral-50"
						/>
					</label>
				</div>
				<label class="flex flex-col gap-2 text-sm font-medium text-brand-secondary/80">
					{$contact.form.fields.message}
					<textarea
						name="message"
						rows="4"
						required
						class="rounded-3xl border border-brand-secondary/15 bg-surface-muted px-4 py-3 text-brand-secondary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/40 dark:border-brand-primary/20 dark:bg-brand-dark/40 dark:text-neutral-50"
					></textarea>
				</label>
				<label class="flex items-start gap-3 text-sm text-brand-secondary/70 dark:text-neutral-200">
					<input type="checkbox" required class="mt-1 h-4 w-4 rounded border-brand-secondary/30 text-brand-primary focus:ring-brand-primary dark:border-brand-primary/40" />
					<span>{$contact.form.privacyNote}</span>
				</label>
				<button type="submit" class="btn-primary">
					{$contact.form.submitLabel}
				</button>
			</form>
		</div>
		<div class="space-y-8">
			<div class="space-y-4">
				<h2 class="text-2xl font-semibold text-brand-secondary dark:text-neutral-50">{$contact.meta.locationsHeading}</h2>
				<div class="space-y-6">
					{#each $contact.locations as location (location.id)}
						<article class="rounded-4xl bg-surface px-6 py-6 shadow-card dark:bg-brand-dark/60">
							<h3 class="text-xl font-semibold text-brand-secondary dark:text-neutral-50">{location.name}</h3>
							<p class="mt-2 text-sm text-brand-secondary/70 dark:text-neutral-200">{location.address}</p>
							<p class="mt-1 text-sm text-brand-secondary/70 dark:text-neutral-200">
								<a href={`tel:${location.phone.replace(/\s+/g, '')}`} class="hover:text-brand-primary">
									{location.phone}
								</a>
								·
								<a href={`mailto:${location.email}`} class="hover:text-brand-primary">
									{location.email}
								</a>
							</p>
							<p class="mt-1 text-sm text-brand-secondary/65 dark:text-neutral-300">{location.hours}</p>
							<div class="mt-4 h-48 rounded-3xl border border-dashed border-brand-secondary/20 bg-gradient-to-br from-brand-primary/15 via-brand-primary/10 to-brand-secondary/15 p-4 text-xs text-brand-secondary/60 dark:border-brand-primary/30 dark:bg-brand-dark/50 dark:text-neutral-200">
								Map placeholder · Lat {location.map.lat.toFixed(3)} · Lng {location.map.lng.toFixed(3)}
							</div>
						</article>
					{/each}
				</div>
			</div>
			<div class="space-y-4 rounded-4xl bg-surface px-6 py-6 shadow-card dark:bg-brand-dark/60">
				<h2 class="text-xl font-semibold text-brand-secondary dark:text-neutral-50">{$contact.meta.socialHeading}</h2>
				<p class="text-sm text-brand-secondary/70 dark:text-neutral-200">
					{$contact.meta.socialDescription}
				</p>
				<div class="flex flex-wrap gap-3">
					{#each $contact.socials as social (social.label)}
						<a
							href={social.href}
							class="inline-flex items-center gap-2 rounded-full border border-brand-secondary/15 bg-surface-muted px-4 py-2 text-sm font-semibold text-brand-secondary transition hover:border-brand-primary hover:text-brand-primary dark:border-brand-primary/30 dark:bg-brand-dark/40 dark:text-neutral-50"
						>
							{#if social.label === 'LinkedIn'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 010 3.5C0 2.12 1.12 1 2.49 1a2.5 2.5 0 012.49 2.5zM.5 23.5h4.99V7.5H.5zM8.5 7.5h4.78v2.18h.07c.67-1.2 2.31-2.47 4.76-2.47 5.09 0 6.03 3.35 6.03 7.7v8.6h-4.99v-7.62c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03v7.76H8.5z" />
								</svg>
							{:else if social.label === 'Instagram'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<rect x="2.5" y="2.5" width="19" height="19" rx="6" />
									<path d="M12 7.5a4.5 4.5 0 104.5 4.5A4.5 4.5 0 0012 7.5z" />
									<circle cx="18" cy="6" r="1.2" fill="currentColor" />
								</svg>
							{:else if social.label === 'YouTube'}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
									<path d="M21.6 7.2A2.7 2.7 0 0019.7 5.3C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 002.4 7.2 28 28 0 002 12a28 28 0 00.3 4.8 2.7 2.7 0 001.9 1.9c1.7.3 7.7.3 7.7.3s6 0 7.7-.3a2.7 2.7 0 001.9-1.9A28 28 0 0022 12a28 28 0 00-.4-4.8zM10 15.3V8.7l5.2 3.3z" />
								</svg>
							{/if}
							{social.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
