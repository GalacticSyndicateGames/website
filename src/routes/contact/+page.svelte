<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
</script>

<svelte:head>
	<title>Contact</title>
	<meta
		name="description"
		content="Contact informations for Galactic Syndicate"
	/>
</svelte:head>

<section
	class="px-wrapper relative min-h-screen w-full"
	style="background-image: url(/svgs/layout/contact-bg.svg);"
>
	<h1 class="sr-only">Contact informations for Galactic Syndicate</h1>

	<div
		class="absolute right-0 top-0 flex h-full w-fit flex-col items-center justify-center gap-y-8"
	>
		<Logo />
		<ul class="flex flex-col items-start justify-start gap-y-2">
			<a
				href="mailto:info@galacticsyn.com"
				class="inline-flex items-center gap-8"
			>
				<img src="/svgs/icons/mail.svg" alt="mail" />
				<span class="text-3xl">info@galacticsyn.com</span>
			</a>
		</ul>
	</div>
</section>
