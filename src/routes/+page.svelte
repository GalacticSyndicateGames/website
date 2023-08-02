<script lang="ts">
	import { base } from '$app/paths';
	import Hero from './hero.svelte';
	import OurTeam from './our-team.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div
	class="bg-fill bg-black bg-[url('/svgs/layout/home-bg-mobile.svg')] bg-no-repeat bg-contain md:bg-auto  md:bg-[url('/svgs/layout/home-bg.svg')]"
>
	<Hero />
	<OurTeam />
</div>
