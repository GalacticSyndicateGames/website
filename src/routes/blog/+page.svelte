<script>
	import BlogCard from './blog-card.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="bg-image min-h-screen w-full text-black">
	<img class="absolute top-0" src="/svgs/layout/blog-bg.svg" alt="" />
	<ul class="z-10 mx-auto w-full max-w-screen-xl space-y-40 pb-40 pt-[50vh]">
		{#each { length: 8 } as _, i (i)}
			<li>
				<BlogCard />
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
