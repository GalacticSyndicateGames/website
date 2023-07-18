<script>
	import Hero from './hero.svelte';
	import OurTeam from './our-team.svelte';
</script>

<svelte:head>
	<title>About us</title>
	<meta name="description" content="Something something..." />
</svelte:head>

<div class="bg-image">
	<Hero />
	<OurTeam />
</div>

<style>
	.bg-image {
		background-image: url('/svgs/layout/home-bg.svg');
	}
</style>
