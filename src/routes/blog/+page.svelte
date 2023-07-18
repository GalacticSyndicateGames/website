<script>
	import BlogCard from '$lib/components/blog-card.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="bg-image min-h-screen w-full text-black">
	<img class="absolute -z-10 top-0" src="/svgs/layout/blog-bg.svg" alt="" />
	<ul class="pb-40 pt-[50vh] mx-auto w-full max-w-screen-xl space-y-40">
		{#each { length: 8 } as _, i (i)}
			<li>
				<BlogCard />
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
