<script lang="ts">
	import { base } from '$app/paths';
	import { fade, slide } from 'svelte/transition';

	const paths: Array<{title:string, href:string}> = [
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
			title: 'Career',
			href: '/career'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	let showMobileMenu = false;

	function handleClick(e: MouseEvent) {
		if (typeof window !== undefined) {
			showMobileMenu = !showMobileMenu;
			window.document.body.classList.toggle('overflow-hidden');
		}
	}
</script>

<header
	class="absolute left-0 top-0 z-20 flex h-headerHeight w-full items-center justify-start bg-transparent px-wrapper"
>
	<nav class="hidden xl:block space-x-8">
		{#each paths as p}
			<a
				href="{base}{p.href}"
				class="font-aldrich text-3xl uppercase text-yellow">{p.title}</a
			>
		{/each}
	</nav>
	<button
		class="xl:hidden transition-transform duration-300 hover:-translate-y-1 ease-in-out"
		on:click={handleClick}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="29"
			height="21"
			viewBox="0 0 29 21"
			fill="none"
			class="text-yellow"
		>
			<path
				d="M2 2H26.1312"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
			/>
			<path
				d="M2 10.5H26.1312"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
			/>
			<path
				d="M2 19H26.1312"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
			/>
		</svg>
	</button>
</header>

{#if showMobileMenu}
	<div
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 300 }}
		on:click={handleClick}
		id="modal-overlay"
		class="z-40 absolute w-full h-full bg-black/50 transition-transform duration-500 will-change-transform"
	/>
	<nav
		on:click={handleClick}
		in:slide={{ duration: 500 }}
		out:slide={{ duration: 500 }}
		class="z-50 bg-lightBlue absolute xl:hidden w-full overflow-hidden  will-change-transform transition-transform"
	>
		<ul class="h-full grid grid-flow-row ">
			{#each paths as p}
				<li class="w-full inline-flex items-center border-b border-b-[rgba(255,_255,_255,_0.30)] last:border-none">
					<a
						class="py-3 w-full text-center  font-aldrich text-xl uppercase text-yellow"
						href="{base}{p.href}">{p.title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
