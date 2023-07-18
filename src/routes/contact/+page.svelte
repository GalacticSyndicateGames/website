<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	type Contact = {
		href?: string;
		name: string;
		iconUrl: string;
	};

	const contacts: Array<Contact> = [
		{
			href: '',
			name: 'info@galacticsyn.com',
			iconUrl: '/svgs/icons/mail.svg'
		},
		{
			name: '+ 1 510 213 1505',
			iconUrl: '/svgs/icons/phone.svg'
		}
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section class="bg-image relative min-h-screen w-full px-wrapper">
	<h1 class="sr-only">Contact informations for Galactic Syndicate</h1>

	<div
		class="absolute right-0 top-0 flex h-full w-fit flex-col items-center justify-center gap-y-8"
	>
		<Logo />
		<ul class="flex flex-col items-start justify-start gap-y-2">
			{#each contacts as c}
				<li>
					{#if c.href}
						<a href={c.href} class="inline-flex items-center gap-8">
							<img src={c.iconUrl} alt="" />
							<span class="text-3xl">{c.name}</span>
						</a>
					{:else}
						<div class="inline-flex items-center gap-8">
							<img src={c.iconUrl} alt="" />
							<span class="text-3xl">{c.name}</span>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.bg-image {
		background-image: url('/svgs/layout/contact-bg.svg');
	}
</style>
