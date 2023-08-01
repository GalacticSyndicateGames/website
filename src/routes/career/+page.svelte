<script>
	import { base } from '$app/paths';
	import RoleCard from './role-card.svelte';
</script>

<section
	class="px-wrapper flex flex-col items-center justify-start bg-babyBlue bg-no-repeat text-black md:items-start gap-20 md:gap-0"
	style="background-image: ur({base}/svgs/layout/career-bg.svg)"
>
	<div
		class="flex md:h-screen w-full max-w-sm flex-col items-center gap-6 pt-headerHeight md:pt-headerHeightDouble font-anonymous md:max-w-xl md:items-start xl:max-w-4xl"
	>
		<h1 class="font-aldrich text-3xl text-darkNavy md:text-5xl xl:text-6xl">
			We&apos;re Hiring
		</h1>

		<p
			class="text-center text-sm leading-tight md:text-left md:text-lg md:leading-tight xl:text-2xl xl:leading-tight"
		>
			We&apos;re looking for teammates who are Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
			ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p
			class="text-center text-sm leading-tight md:text-left md:text-lg md:leading-tight xl:text-2xl xl:leading-tight"
		>
			Don&apos;t see what you fit into? Drop us a line at
			<a class="text-darkNavy" href="">info@galacticsyn.com </a>
			and tell us how you got where you are.
		</p>
	</div>

	<div
		class="pb-headerHeight mx-auto flex w-fit flex-col items-center justify-start gap-6 md:items-start md:gap-12 xl:gap-16"
	>
		<h2
			class="font-aldrich text-3xl text-darkNavy underline-offset-2 md:text-5xl xl:text-6xl"
		>
			Open roles
		</h2>

		<ul class="flex flex-col items-center justify-start gap-12 xl:gap-16">
			<RoleCard />
			<RoleCard />
			<RoleCard />
		</ul>
	</div>
</section>
