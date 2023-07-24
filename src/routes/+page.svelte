<script lang="ts">
	import { base } from '$app/paths';
	import Hero from './hero.svelte';
	import OurTeam from './our-team.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Something something..." />
</svelte:head>

<div
  style="background-image: url('{base}/svgs/layout/home-bg.svg');"
>
	<Hero />
  <OurTeam />
</div>
