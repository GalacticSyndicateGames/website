<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import { onMount } from 'svelte';

	let showDropdown = false;
	let Dropdown: HTMLParagraphElement;
	let Hero: HTMLElement;
</script>

<section
	bind:this={Hero}
	class="flex flex-col items-start justify-between min-h-screen w-full overflow-x-hidden p-wrapper pt-headerHeight"
>
	<Logo />

	<div class="flex flex-col items-start justify-between gap-24">
		<h1 class=" font-anonymous text-6xl capitalize">
			Partnering<br />
			With Intent
		</h1>

		<button
			class="inline-flex gap-4 rounded-full bg-pistachio px-8 py-3 text-5xl uppercase transition-opacity hover:opacity-95"
			on:click={() => {
				showDropdown = !showDropdown;
				if (showDropdown) {
					Dropdown.scrollIntoView({ behavior: 'smooth', block: 'end' });
				} else {
					Dropdown.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}}
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class={`h-12 w-12 transition-transform transform-gpu duration-300 ease-in-out ${
						showDropdown ? 'rotate-90' : 'rotate-0'
					}`}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</span>
			<span>Show more</span>
		</button>
	</div>
</section>
<p
	bind:this={Dropdown}
	class={`px-wrapper font-anonymous text-3xl transition-all duration-300 ${
		showDropdown ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-10'
	}`}
>
	Our Quality Execution Focusing On Your KPIs <br />
	Our Experience Focused To Deliver On Your KPIs <br />
	Your KPIs, Our Experience: Quality Execution
	<br />
	<br />
	We can make your revenue enabling project a reality when your resources are tight
</p>
