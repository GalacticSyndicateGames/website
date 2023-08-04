<script lang="ts">
	import Hero from './hero.svelte';
	import OurTeam from './our-team.svelte';
</script>

<svelte:head>
	<title>Galactic Syndicate</title>
</svelte:head>

<div
	class=" bg-[url('/svgs/layout/home-bg-mobile.svg')] bg-black bg-contain bg-no-repeat md:bg-[url('/svgs/layout/home-bg.svg')] md:bg-auto 4xl:bg-contain"
>
	<Hero />
	<OurTeam />
</div>
