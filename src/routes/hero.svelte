<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
</script>

<section
	class="xl:h-screen flex w-full flex-col items-start justify-between overflow-x-hidden p-wrapper pb-2 pt-headerHeight gap-36 xl:gap-0"
>
  <div class="text-justify after:content-[''] inline-block w-fit">
	  <Logo />
    <p class="text-[100%] capitalize font-anonymous font-semibold">Mobile game Development</p>
  </div>

	<div class="z-10 flex flex-col items-start justify-between gap-10">
		<h1 class="font-semibold font-anonymous text-2xl md:text-3xl xl:text-6xl capitalize">
			Partnering<br />
			With Intent
		</h1>

		<p
			class="inline-flex flex-col leading-none  font-anonymous text-center md:text-left text-sm  md:text-xl "
		>
			<span class="drop-shadow-md">
				Our Quality Execution Focusing On Your KPIs <br />
				Our Experience Focused To Deliver On Your KPIs <br />
				Your KPIs, Our Experience: Quality Execution
			</span>
			<span class="mt-4 xl:mt-6">
				We can make your revenue enabling project a reality when your resources
				are tight
			</span>
		</p>
	</div>
</section>
