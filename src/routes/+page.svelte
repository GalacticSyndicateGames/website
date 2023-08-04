<script lang="ts">
	import Hero from './hero.svelte';
	import OurTeam from './our-team.svelte';
</script>

<svelte:head>
	<title>Galactic Syndicate</title>
</svelte:head>

<div
	class="bg-fill bg-black bg-[url('/svgs/layout/home-bg-mobile.svg')] bg-no-repeat bg-contain md:bg-auto  md:bg-[url('/svgs/layout/home-bg.svg')]"
>
	<Hero />
	<OurTeam />
</div>
