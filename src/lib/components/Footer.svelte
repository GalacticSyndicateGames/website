<script>
	import Logo from './Logo.svelte';

	const socials = [
		{
			href: 'https://www.facebook.com',
			title: 'Facebook',
			iconPath: '/icons/facebook.svg'
		},
		{
			href: 'https://www.instagram.com',
			title: 'Instagram',
			iconPath: '/icons/instagram.svg'
		},
		{
			href: 'https://www.linkedin.com',
			title: 'LinkedIn',
			iconPath: '/icons/linkedin.svg'
		}
	];
</script>

<footer
	class="overflow-x-hidden relative w-full bg-navy h-96 px-wrapper flex items-center gap-40"
>
	<Logo />
	<nav class="w-fit space-y-4">
		<h2 class="uppercase font-aldrich text-5xl">Social media</h2>
		<ul class="w-full flex justify-between">
			{#each socials as s}
				<li>
					<a href={s.href}>
						<img alt={s.title} src={s.iconPath} class="w-20 aspect-square" />
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<img
		class="h-full absolute top-0 -right-48"
		src="/svgs/footer-planet.svg"
		alt="A Pink planet floating away"
	/>
</footer>
