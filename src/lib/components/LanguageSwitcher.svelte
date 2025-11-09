<script lang="ts">
	import { locale, localeLabel, type Locale } from '$lib/stores/language';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let isOpen = false;

	const languages: { code: Locale; label: string; native: string }[] = [
		{ code: 'de', label: 'DE', native: 'Deutsch' },
		{ code: 'tr', label: 'TR', native: 'Türkçe' },
		{ code: 'en', label: 'EN', native: 'English' }
	];

	const toggle = () => {
		isOpen = !isOpen;
	};

	const changeLocale = (code: Locale) => {
		locale.set(code);
		isOpen = false;
	};

	let dropdownRef: HTMLDivElement | null = null;

	onMount(() => {
		const handleClick = (event: MouseEvent) => {
			if (!dropdownRef) return;
			if (!dropdownRef.contains(event.target as Node)) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="relative" bind:this={dropdownRef}>
	<button
		type="button"
		class="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-surface px-4 py-2 text-sm font-medium text-brand-secondary shadow-sm transition hover:border-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:border-brand-primary/40 dark:bg-brand-dark dark:text-neutral-50"
		aria-haspopup="listbox"
		aria-expanded={isOpen}
		on:click={toggle}
	>
		<span class="hidden sm:inline">{$localeLabel}</span>
		<span class="inline sm:hidden uppercase">{$locale}</span>
		<svg
			class="h-4 w-4 text-brand-secondary/70 transition-transform duration-200"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 8l4 4 4-4"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	{#if isOpen}
		<div
			class="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-2xl border border-brand-secondary/10 bg-surface shadow-card dark:border-brand-primary/30 dark:bg-brand-dark"
			role="listbox"
			in:fly|local={{ y: 6, duration: 150 }}
			out:fade={{ duration: 120 }}
		>
			{#each languages as { code, label: shortLabel, native } (code)}
				<button
					type="button"
					class="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-brand-secondary transition hover:bg-brand-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:text-neutral-50"
					role="option"
					aria-selected={$locale === code}
					on:click={() => changeLocale(code)}
				>
					<span class="uppercase">{shortLabel}</span>
					<span class="text-xs text-brand-secondary/70 dark:text-neutral-300">{native}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
