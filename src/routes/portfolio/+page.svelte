<script lang="ts">
	import { base } from '$app/paths';
	import ProblemList from './problem-list.svelte';
	import Marquee from 'svelte-fast-marquee';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio description" />
</svelte:head>

<section
	class="flex h-[60vh] md:h-screen w-full flex-col items-center justify-end bg-center bg-cover"
	style="background-image: url('{base}/svgs/layout/portfolio-bg.svg');"
>
	<div class="pb-12">
		<h1
			class="inline-flex flex-col items-center justify-end gap-2 md:gap-4 xl:gap-10 font-aldrich"
		>
			<span class="text-4xl md:text-5xl xl:text-7xl">Talk to us...</span>
			<span class="text-base md:text-2xl xl:text-5xl text-center"
				>Talk to us when one of these problems sounds familiar</span
			>
		</h1>
	</div>
</section>

<ProblemList />

<section class="flex items-center justify-center bg-white">
	<Marquee play={true} direction={'left'} speed={50}>
		<ul class="flex items-center gap-4 flex-wrap space-y-4 py-8">
			{#each { length: 8 } as _, i (i)}
				<li>
					<img class="h-16 md:h-28 xl:auto" src="{base}/svgs/companies/comp-{i + 1}.svg" alt="title" />
				</li>
			{/each}
		</ul>
	</Marquee>
</section>
