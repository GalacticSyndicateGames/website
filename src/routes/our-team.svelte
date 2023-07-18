<script lang="ts">
	import type { Member } from '$lib/components/member-card.svelte';
	import MemberCard from '$lib/components/member-card.svelte';

	const team: Array<Member> = [
		{
			name: 'Balazs',
			role: 'Founder, CEO',
			description:
				'Balazs has a knack for finding great talent.  In his roles at various global companies such as Formlabs, Cloudera, Prezi and Nokia he saw that the people who worked around him in his native Budapest…'
		},
		{
			name: 'Balazs K. (BK)',
			role: 'Software Engineer',
			description:
				'BK is a true full-stack senior developer covering everything from database through backend and frontend including pipelines and DevOps processes.'
		},
		{
			name: 'Daniel',
			role: 'Blockchain Developer',
			description:
				'Daniel is our resident Blockchain expert.  He has been actively contributing to the blockchain tech scene for 4+ years.  Software Developer with over 10 years of experience and always eager to learn.'
		},
		{
			name: 'Laszlo',
			role: 'Software Engineer',
			description:
				'Laszlo is an engineering leader who is keen on new technologies and methodologies that support software development. He thrives on creating and optimizing SLDC pipelines, including developer experience, release and testing infrastructure and monitoring solutions.'
		},
		{
			name: 'Laszlo',
			role: 'Software Engineer',
			description:
				'On an advisory level Ishai brings to us his extensive work experience in the tech industry. Ishai was the CEO & Founder of Growth Streak, Business Performance at Proteus Games, Business Growth Advisor at Lightricks, CPO at JOB TODAY, Senior Director, Product Management & Business Performance and Director, Product Management & Business Performance at King, Lead Product Manager, Senior Product Manager and Product Manager at Electronic Arts (EA), Co-Founder/Product Manager/Android Developer at CraveEat Mobile, Business Development Manager / Economy Manager at P-Kama, and Business Development Manager at Shidonni.. He also held a Strategic Review and Marketing Intelligence Project at Geoservices.  Ishai Shamir received their MBA from HEC Paris in 2009, specializing in Entrepreneurship. Ishai also obtained a Bachelor of Arts (BA) in Psychology and a Bachelor of Laws (LL.B.) from Tel Aviv University between 2002 and 2006.'
		}
	];
</script>

<section
	class="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-start gap-40 py-28"
>
	<h2 class="font-aldrich text-7xl uppercase text-blue">Our team</h2>
	<ul class="space-y-16">
		{#each team as m, i}
			<li>
				<MemberCard
					member={m}
					align={i % 2 ? 'left' : 'right'}
					imgSrc={`/images/team/member-${i + 1}.png`}
				/>
			</li>
		{/each}
	</ul>
</section>
