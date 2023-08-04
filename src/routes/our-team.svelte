<script lang="ts">
  import type { Member } from '$lib/components/member-card.svelte';
	import MemberCard from '$lib/components/member-card.svelte';

	const team: Array<Member> = [
		{
			name: 'Balazs',
			role: 'Founder, CEO',
      imgSrc: '/images/team/balazs.png',
			description:
				'Balazs has a knack for building and running high-performing product engineering teams. In his roles at various small startups and big names like Cloudera, Formlabs, Prezi and Nokia he saw that people who worked around him made things happen. Based in Budapest but with his heart in California, he brings a cool mix of innovation and know-how to the table.'
		},
		{
			name: 'Balazs K. (BK)',
			role: 'Software Engineer',
      imgSrc: '/images/team/balazs-k.png',
			description:
				'BK is a true full-stack senior developer covering everything from database through backend and frontend including pipelines and DevOps processes.'
		},
		{
			name: 'Laszlo',
			role: 'Software Engineer',
      imgSrc: '/images/team/laszlo.png',
			description:
				'Laszlo is an engineering leader who is keen on new technologies and methodologies that support software development. He thrives on creating and optimizing SLDC pipelines, including developer experience, release and testing infrastructure and monitoring solutions.'
		},
    {
      name: 'Szabi',
      role: 'Engineer',
      imgSrc: '/images/team/szabi.png',
      description: "Szabi loved video games for as long as he can remember. After he got his first NES console when he was 4, gaming became a huge part of his life. Szabi grew up collecting NES games and storing them in a shoebox, running around the house like Sonic, and killing imaginary enemies with my imaginary guns like Lara Croft. He's a Generalist, ready to work on any part of a game."
    },
    {
      name: 'Betti',
      role: 'Recruiter',
      imgSrc: '/images/team/betti.png',
      description: 'Betti has a remarkable ability to identify exceptional talents. She has worked with global companies including Cloudera and GitLab to assemble winning teams that thrive on creative problem solving. Her emphasis on fostering a culture of innovation and driving efficiency has made a significant impact on the success of the organizations she has worked with.'

    },
		{
			name: 'Ishai',
			role: 'Advisor',
      imgSrc: '/images/team/ishai.png',
			description:
				'On an advisory level Ishai brings to us his extensive work experience in the tech industry. Ishai was the CEO & Founder of Growth Streak, Business Performance at Proteus Games, Business Growth Advisor at Lightricks, CPO at JOB TODAY, Senior Director, Product Management & Business Performance and Director, Product Management & Business Performance at King, Lead Product Manager, Senior Product Manager and Product Manager at Electronic Arts (EA), Co-Founder/Product Manager/Android Developer at CraveEat Mobile, Business Development Manager / Economy Manager at P-Kama, and Business Development Manager at Shidonni.. He also held a Strategic Review and Marketing Intelligence Project at Geoservices.  Ishai Shamir received their MBA from HEC Paris in 2009, specializing in Entrepreneurship. Ishai also obtained a Bachelor of Arts (BA) in Psychology and a Bachelor of Laws (LL.B.) from Tel Aviv University between 2002 and 2006.'
		},
    {
      name: 'Andras',
      role: 'Engineer',
      imgSrc: '/images/team/andras.png',
      description: 'Ever since his childhood Andras was always entertained by the worlds of books, movies, and video games. He also enjoy creating and building things, figuring out solutions to mind-bending problems. Game development has everything Andras love: fantasy, creativity, ingenuity. Andras mainly enjoy working on Gameplay, that is where he is most experienced.'
    },
    {
      name: 'Reka',
      role: 'Designer',
      imgSrc: '/images/team/reka.png',
      description: 'Réka is our designer with a passion for creating visually stunning and user-friendly digital experiences. Réka has loved the world of art since she was young. She studied engineering at university, where she realized that the combination of the two was the perfect profession for her.'
    },
    {
      name: 'Alex',
      role: 'Engineer',
      imgSrc: '/images/team/alex.png',
      description: 'Alex is a passionate software engineer, striving for efficiency in his work. His journey began in high school, where he learned programming, and it has led him to experiment with all kinds of coding. He finds joy in developing optimized solutions for backend services and internal tools.'
    }
	];
</script>

<section
	class="mx-auto px-wrapper flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-start gap-4 md:gap-20 xl:gap-40 py-28"
>
	<h2 class="font-aldrich text-2xl md:text-4xl xl:text-7xl uppercase text-blue">Our team</h2>
	<ul class="space-y-16">
		{#each team as m, i}
			<li>
				<MemberCard
					member={m}
					align={i % 2 ? 'left' : 'right'}
				/>
			</li>
		{/each}
	</ul>
</section>
