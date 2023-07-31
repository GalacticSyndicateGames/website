<script>
	import { base } from '$app/paths';
	import BlogCard from './blog-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section
	class="w-full bg-contain bg-top bg-no-repeat xl:bg-auto"
	style="background-image: url({base}/svgs/layout/blog-bg.svg)"
>
	<ul
		class="px-wrapper container mx-auto flex min-h-screen w-full flex-col items-center gap-y-12 pb-12 pt-[20vh] md:pt-[30vh] xl:gap-y-40 xl:pt-[40vh]"
	>
		{#each data.posts as p, i (i)}
			<BlogCard post={p} />
			<BlogCard post={p} />
			<BlogCard post={p} />
			<BlogCard post={p} />
			<BlogCard post={p} />
			<BlogCard post={p} />
		{/each}
	</ul>
</section>
