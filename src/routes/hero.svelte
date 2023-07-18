<script>
	import Logo from '$lib/components/logo.svelte';
</script>

<section class="relative flex min-h-screen w-full overflow-x-hidden">
	<img
		class=" h-full w-full translate-x-44 object-fill"
		alt="Spaceship flying in space"
		src="/hero.svg"
	/>

	<div
		class="absolute top-0 z-10 flex h-screen flex-col items-start justify-between gap-28 p-wrapper pt-headerHeight"
	>
		<Logo />
		<div class="flex flex-col items-start justify-between gap-32">
			<h1 class=" font-anonymous text-6xl capitalize">
				Partnering<br />
				With Intent
			</h1>

			<button
				class="inline-flex gap-4 rounded-full bg-pistachio px-8 py-3 text-5xl uppercase transition-opacity hover:opacity-95"
			>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
						class="h-12 w-12"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</span>
				<span> Show more </span>
			</button>
		</div>
	</div>
</section>
