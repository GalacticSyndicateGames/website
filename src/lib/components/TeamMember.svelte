<script lang="ts" context="module">
	export type Member = {
		name: string;
		role: string;
		description: string;
	};
</script>

<script lang="ts">
	import clsx from 'clsx';
	export let member: Member;
	export let align: 'left' | 'right';
	export let imgSrc: string;

	console.log(member.name, imgSrc);
</script>

<div class={clsx('flex gap-8', align === 'left' && 'flex-row-reverse')}>
	<div
		class={clsx(
			'flex flex-col pt-16',
			align === 'left' ? ' items-start' : 'items-end'
		)}
	>
		<h3 class="font-aldrich text-6xl text-blue">{member.name}</h3>
		<p class="font-anonymous text-6xl text-blue">{member.role}</p>
		<p
			class={clsx(
				'mt-8 w-4/5 font-anonymous text-3xl',
				align === 'left' ? 'text-left' : 'text-right'
			)}
		>
			{member.description}
		</p>
	</div>

	<div class="aspect-square h-[500px] w-[500px] flex-shrink-0">
		<img src={imgSrc} alt={`Portrait of ${member.name}, ${member.role}`} />
	</div>
</div>
