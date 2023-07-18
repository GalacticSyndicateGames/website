<script>
	import ProblemList from './ProblemList.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio description" />
</svelte:head>

<section
	class="flex flex-col justify-end items-center bg-image w-full h-screen"
>
	<div class="pb-12">
		<h1
			class="font-aldrich inline-flex flex-col justify-end items-center gap-10"
		>
			<span class="text-7xl">Talk to us...</span>
			<span class="text-5xl"
				>Talk to us when one of these problems sounds familiar</span
			>
		</h1>
	</div>
</section>
<ProblemList />
<section class="bg-white flex items-center justify-center">
	<ul class="flex flex-wrap space-y-4 py-8">
		{#each { length: 8 } as _, i (i)}
			<li>
				<img src={`/svgs/companies/comp-${i + 1}.svg`} alt="title" />
			</li>
		{/each}
	</ul>
</section>

<style>
	.bg-image {
		background-image: url('/svgs/layout/portfolio-bg.svg');
	}
</style>
