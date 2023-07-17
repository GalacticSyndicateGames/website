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
	class="relative flex h-96 w-full items-center gap-40 overflow-x-hidden bg-navy px-wrapper"
>
	<Logo />
	<nav class="w-fit space-y-4">
		<h2 class="font-aldrich text-5xl uppercase">Social media</h2>
		<ul class="flex w-full justify-between">
			{#each socials as s}
				<li>
					<a href={s.href}>
						<img alt={s.title} src={s.iconPath} class="aspect-square w-20" />
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<img
		class="absolute -right-48 top-0 h-full"
		src="/svgs/footer-planet.svg"
		alt="A Pink planet floating away"
	/>
</footer>
