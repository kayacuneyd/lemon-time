<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { derived } from 'svelte/store';

	const label = derived(theme, ($theme) =>
		$theme === 'light' ? 'Dark mode aktivieren' : 'Light mode aktivieren'
	);
</script>

<button
	type="button"
	on:click={() => theme.toggle()}
	class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/30 bg-surface text-brand-secondary transition hover:border-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:border-brand-primary/40 dark:bg-brand-dark dark:text-neutral-50"
>
	<span class="sr-only">{$label}</span>
	{#if $theme === 'light'}
		<svg
			class="h-5 w-5"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364 7.364l-1.061-1.061M6.697 6.697L5.636 5.636m12.728 0l-1.061 1.061M6.697 17.303l-1.061 1.061M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
			/>
		</svg>
	{:else}
		<svg
			class="h-5 w-5"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z"
			/>
		</svg>
	{/if}
</button>
