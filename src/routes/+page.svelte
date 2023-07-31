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
  class="bg-black"
>
	<Hero />
  <OurTeam/>
</div>
