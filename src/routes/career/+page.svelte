<script lang="ts">
	import type { JobDescription } from '$lib/types';
	import RoleCard from './role-card.svelte';

	export let data;

	const textStyle =
		'w-full font-anonymous  text-center no-leading max-w-xs sm:max-w-sm sm:text-xl md:text-xl  md:text-left md:max-w-screen-sm xl:max-w-screen-md';
</script>

<svelte:head>
	<title>Career | Galactic Syndicate</title>
</svelte:head>

<section class="bg-babyBlue">
	<div
		class="px-wrapper flex h-screen w-full flex-col items-center justify-start gap-y-8 bg-[url('/svgs/layout/career-bg-mobile.svg')] bg-cover bg-no-repeat pt-headerHeightXl text-black md:items-start md:bg-[url('/svgs/layout/career-bg.svg')] md:bg-auto md:bg-right-top md:pt-headerHeightDouble"
	>
		<h1 class="font-aldrich text-3xl text-darkNavy md:text-5xl xl:text-6xl">
			We&apos;re Hiring
		</h1>
		<p class={textStyle}>
			We’re Galactic Syndicate and our business is fun. We build video games, and we love it. 
			Games are universally understood, and modern video games engage all ages. 
			Imagine building something that can be in the hands of everyone, from children to grandmothers! 
			We are a remote-first global video game development company with roots in Budapest and California. 
			We’re looking for software developers that share our passion.
		</p>
		<p class={textStyle}>
			Don't see what you fit into? Drop us a line at <a
				class="text-darkNavy hover:opacity-90"
				href="mailto:info@galacticsyn.com">info@galacticsyn.com</a
			> and tell us how you got to where you are.
		</p>
		<a
			href="#roles"
			class="mb-12 font-aldrich text-3xl text-darkNavy underline md:mb-16 md:hidden md:text-5xl xl:mb-20 xl:text-7xl"
			>Open roles</a
		>
	</div>
	<div
		id="roles"
		class="px-wrapper mx-auto w-full max-w-sm py-12 md:max-w-screen-lg md:py-16 xl:max-w-[92rem] xl:py-20"
	>
		<h2
			class="mb-12 hidden font-aldrich text-3xl text-darkNavy md:mb-16 md:block md:text-5xl xl:mb-20 xl:text-7xl"
		>
			Open roles
		</h2>
		<ul
			class="flex w-full flex-col items-center justify-start gap-y-12 md:gap-y-16 xl:gap-y-20"
		>
			{#each data.jobs as jd}
				<RoleCard {jd} />
			{/each}
		</ul>
	</div>
</section>
