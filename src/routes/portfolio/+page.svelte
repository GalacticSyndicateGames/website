<script>
	import ProblemList from './problem-list.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio description" />
</svelte:head>

<section
	class="bg-image flex h-screen w-full flex-col items-center justify-end"
>
	<div class="pb-12">
		<h1
			class="inline-flex flex-col items-center justify-end gap-10 font-aldrich"
		>
			<span class="text-7xl">Talk to us...</span>
			<span class="text-5xl"
				>Talk to us when one of these problems sounds familiar</span
			>
		</h1>
	</div>
</section>
<ProblemList />
<section class="flex items-center justify-center bg-white">
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