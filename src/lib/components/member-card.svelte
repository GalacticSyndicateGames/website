<script lang="ts" context="module">
	export type Member = {
		name: string;
		role: string;
		description: string;
    imgSrc: string;
	};
</script>

<script lang="ts">
	export let member: Member;
	export let align: 'left' | 'right';
</script>

<div class="flex flex-col md:gap-8">
	<div class="flex flex-col items-start md:gap-x-6 xl:gap-x-12 {align ==='left' ? 'md:flex-row' : 'md:flex-row-reverse'}">

		<div
			class="aspect-square h-[180px] w-[180px] xl:h-[500px] xl:w-[500px] flex-shrink-0"
		>
			<img src={member.imgSrc} alt={`Portrait of ${member.name}, ${member.role}`} />
		</div>

		<div class="w-full flex flex-col items-center {align === 'left' ? 'md:items-start' : 'md:items-end'}">
			<h3 class="mt-2 xl:mt-0 font-aldrich text-xl xl:text-6xl text-blue ">
				{member.name}
			</h3>
			<p class="font-anonymous text-xl xl:text-6xl text-blue">{member.role}</p>
			<p
				class="mt-4 w-4/5 font-anonymous text-base xl:text-3xl text-center {align ===
				'left'
					? 'md:text-left'
					: 'md:text-right'}"
			>
				{member.description}
			</p>
		</div>

	</div>
</div>
