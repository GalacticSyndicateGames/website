<script lang="ts">
	import { base } from "$app/paths";

	const paths = [
		{
			title: 'About us',
			href: '/'
		},
		{
			title: 'Portfolio',
			href: '/portfolio'
		},
		{
			title: 'Blog',
			href: '/blog'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];
  console.log(base)
</script>

<header
	class="absolute left-0 top-0 z-20 flex h-headerHeight w-full items-center justify-start bg-transparent px-wrapper"
>
	<nav class="space-x-8">
		{#each paths as p}
			<a href="{base}{p.href}" class="font-aldrich text-4xl uppercase text-yellow"
				>{p.title}</a
			>
		{/each}
	</nav>
</header>
