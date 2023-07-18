<script>
	import Logo from './logo.svelte';

	const socials = [
		{
			href: 'https://www.facebook.com',
			title: 'Facebook',
			iconPath: '/svgs/icons/facebook.svg'
		},
		{
			href: 'https://www.instagram.com',
			title: 'Instagram',
			iconPath: '/svgs/icons/instagram.svg'
		},
		{
			href: 'https://www.linkedin.com',
			title: 'LinkedIn',
			iconPath: '/svgs/icons/linkedin.svg'
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
		src="/svgs/layout/footer-planet.svg"
		alt="A Pink planet floating away"
	/>
</footer>
