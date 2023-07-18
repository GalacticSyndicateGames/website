<script>
	import '@fontsource/aldrich';
	import '@fontsource/anonymous-pro';

	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class=" text-white">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
