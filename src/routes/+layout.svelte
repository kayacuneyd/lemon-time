<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-primary focus:px-6 focus:py-3 focus:text-brand-secondary focus:shadow-lg">
	Zum Inhalt springen
</a>

<Header />

<main id="main-content">
	{@render children()}
</main>

<Footer />
