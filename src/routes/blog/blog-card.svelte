<script lang="ts">
	import { base } from '$app/paths';
	import type { Post } from '$lib/types';
	export let post: Post;
</script>

<article
	class="grid h-fit grid-cols-2 grid-rows-1 gap-x-4 text-black md:h-80 md:gap-x-8 xl:h-[32rem] xl:gap-x-12"
>
	<div class="aspect-square h-full place-self-end rounded-xl bg-gray-500" />

	<div
		class="flex aspect-square h-full flex-col items-start justify-between place-self-start"
	>
		<div class="space-y-2 xl:space-y-5">
			<div class="flex gap-4">
				<img
					class=" md:w-8 xl:w-16"
					src="{base}/svgs/icons/avatar.svg"
					alt="Author"
				/>

				<div class="font-aldrich">
					<p class=" text-xs md:text-base xl:text-3xl">{post.author ?? ''}</p>
					<p class=" text-xs md:text-base xl:text-2xl">{post.date ?? ''}</p>
				</div>
			</div>
			<h3 class=" font-aldrich text-base text-blue md:text-3xl xl:text-6xl">
				{post.title ?? ''}
			</h3>
			<p class=" font-anonymous text-base leading-3 md:text-xl xl:text-3xl">
				{post.description ?? ''}
			</p>
		</div>

		<a
			href="{base}/blog/posts/{post.slug}"
			class="rounded-full bg-blue px-6 py-1 font-aldrich text-base uppercase text-white transition-opacity hover:opacity-90 md:py-2 md:text-2xl xl:text-4xl"
		>
			Read more
		</a>
	</div>
</article>
