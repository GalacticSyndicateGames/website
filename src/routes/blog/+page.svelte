<script lang="ts">
	import { base } from '$app/paths';
	import BlogCard from './blog-card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section
	class="bg-image min-h-screen w-full bg-white text-black"
	style="background-image: url({base}/svgs/layout/blog-bg.svg); background-repeat: no-repeat;"
>
	<ul class="z-20 mx-auto w-full max-w-screen-xl space-y-40 pb-40 pt-[50vh]">
		{#each data.posts as p, i (i)}
			<li>
				<BlogCard post={p} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.bg-image {
		background-image: url('');
		background-repeat: no-repeat;
	}
</style>
