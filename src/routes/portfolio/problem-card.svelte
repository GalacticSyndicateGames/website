<script lang="ts" context="module">
	export type Problem = {
		title: string;
		body: string;
		imgUrl: string;
	};
</script>

<script lang="ts">
	import clsx from 'clsx';
	export let problem: Problem;
	export let index: number;
</script>

<article
	class={clsx(
		'flex items-center gap-x-4',
		index % 2 === 1 && 'flex-row-reverse'
	)}
>
	<figure class="shrink-0">
		<img src={problem.imgUrl} alt={problem.title} />
	</figure>

	<div>
		<h3
			class={clsx(
				'mb-4 font-aldrich text-5xl',
				index % 2 === 1 ? 'text-right' : 'text-left'
			)}
		>
			{problem.title}
		</h3>
		<p
			class={clsx(
				'w-fit font-anonymous text-3xl',
				index % 2 === 1 ? 'text-right' : 'text-left'
			)}
		>
			{problem.body}
		</p>
	</div>
</article>
