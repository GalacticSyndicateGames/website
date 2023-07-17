<script>
	import '@fontsource/aldrich';
	import '@fontsource/anonymous-pro';

	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-black text-white">
	<Header />
	<main class="">
		<slot />
	</main>
	<Footer />
</div>
