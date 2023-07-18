<script lang="ts">
	import ProblemCard from '$lib/components/problem-card.svelte';
	import type { Problem } from '$lib/components/problem-card.svelte';

	const data: Array<Problem> = [
		{
			title: 'Product Development',
			body: 'You have a project, idea, initiative that had a significant impact on your business and need someone to manage and deliver a project with a competent team, work with you as a partner, taking risks, offering proposals for solutions, shaping a shared understanding and the opportunity definition with you.',
			imgUrl: '/svgs/problems/problem-1.svg'
		},
		{
			title: 'Remove development',
			body: 'You have high turnover and rising development costs, with investors, sponsors asking you what your plan is to create a sustainable development team that can deliver on the plan they all believe you should make happen soon.',
			imgUrl: '/svgs/problems/problem-2.svg'
		},
		{
			title: 'Talent Planning',
			body: 'You are struggling to find talented engineers, you know they exist but they seem to be hard to find and have high expectations from compensation to work style. Even if you meet their demand they seem to be discontent.',
			imgUrl: '/svgs/problems/problem-3.svg'
		},
		{
			title: 'Development consulting',
			body: 'You got a Flux Capacitor, your systems stuck in 1955 and need 1.21 gWe to get back to the future. It was a perfectly good system when it started and you have grown a business tremendously but you have come to a halt. You have no shortage of great scientists and bright eyed college grads who are unable to speak to your concerns about delivering sustainable relevant features to your business.',
			imgUrl: '/svgs/problems/problem-4.svg'
		},
		{
			title: 'SRE',
			body: 'You are finding that your system stability is impacting your business and your developers are spending a significant amount of their time just keeping things going, not able to make progress on key development activities.',
			imgUrl: '/svgs/problems/problem-5.svg'
		},
		{
			title: 'Data Engineering',
			body: 'You got a data lake, data pipeline, a tsunami of bits, rising cost but no actionable information. You are eager and ready to be data driven but it is stuck in 1st gear and you are driving around the parking lot. You might be feeling like you need a data snake with data plumber to get things moving.',
			imgUrl: '/svgs/problems/problem-6.svg'
		},
		{
			title: 'Crypto',
			body: 'Want to create a web3 offering and you need someone who has launched NFTs, figured out how to manage…',
			imgUrl: '/svgs/problems/problem-7.svg'
		}
	];
</script>

<section class="bg-white text-black">
	<ul class="w-full max-w-screen-2xl mx-auto space-y-28 py-28">
		{#each data as d, i}
			<li>
				<ProblemCard problem={d} index={i} />
			</li>
		{/each}
	</ul>
</section>
