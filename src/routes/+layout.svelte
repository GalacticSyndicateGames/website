<script>
	import '@fontsource/aldrich';
	import '@fontsource/anonymous-pro';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-black text-white">
	<Header />

	<main class=" px-wrapper">
		<slot />
	</main>

</div>
