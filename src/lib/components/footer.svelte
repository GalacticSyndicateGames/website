<script lang="ts">
	import { base } from '$app/paths';
	import Logo from './logo.svelte';

	const socials = [
		/* {
			href: 'https://www.facebook.com',
			title: 'Facebook',
			iconPath: '/svgs/icons/facebook.svg'
		},
		{
			href: 'https://www.instagram.com',
			title: 'Instagram',
			iconPath: '/svgs/icons/instagram.svg'
		}, */
		{
			href: 'https://www.linkedin.com/company/galactic-fleet/about/',
			title: 'LinkedIn',
			iconPath: '/svgs/icons/linkedin.svg'
		}
	];
</script>

<footer
	class="relative w-ful flex h-24 md:h-44 xl:h-72 w-full justify-center items-center gap-4 xl:gap-40 overflow-x-hidden bg-navy px-wrapper"
>
  <div class="left-6 absolute w-fit h-full inline-flex items-center justify-center">
    <Logo/>
  </div>

	<nav class="w-fit  xl:space-y-4 flex flex-col">
		<h2 class="font-aldrich text-sm md:text-2xl xl:text-5xl uppercase">
			Social&nbsp;media
		</h2>
		<ul class="flex w-full justify-center gap-x-2 xl:gap-x-16">
			{#each socials as s}
				<li class="">
					<a href={s.href} target="_blank" >
						<img src="{base}{s.iconPath}" alt={s.title}  class="aspect-square w-6 h-6  md:w-12 md:h-12  xl:w-20 xl:h-20"/>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	 <img
		class="-right-[10%] absolute h-full " 
		src="{base}/svgs/layout/footer-planet.svg"
		alt="A Pink planet floating away"
	/> 
</footer>
