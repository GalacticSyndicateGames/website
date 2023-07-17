<script>
	const paths = [
		{
			href: '/about-us',
			title: 'About us'
		},
		{
			href: '/portfolio',
			title: 'Portfolio'
		},
		{
			href: '/blog',
			title: 'Blog'
		},
		{
			href: '/contact',
			title: 'Contact'
		}
	];
</script>

<header
	class="absolute left-0 top-0 z-20 flex h-headerHeight w-full items-center justify-start bg-transparent px-wrapper"
>
	<nav class="space-x-8">
		{#each paths as p}
			<a
				href={''}
				class="font-aldrich text-4xl uppercase text-yellow transition-opacity hover:opacity-80"
				>{p.title}</a
			>
		{/each}
	</nav>
</header>
