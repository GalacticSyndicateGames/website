<script lang="ts">
	import '../app.css';
	import '@fontsource/aldrich';
	import '@fontsource/anonymous-pro';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { fly } from 'svelte/transition';

	//data that comes from +layout.server.ts
	export let data;
</script>

<div class="text-white">
	<Header />
	{#key data.url}
		<main in:fly={{ duration: 400 }} out:fly={{ duration: 100 }}>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
