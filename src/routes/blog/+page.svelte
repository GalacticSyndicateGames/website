<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	interface Post {
		author: string;
		pubDate: string;
		content: string;
		link: string;
		description: string;
		thumbnail: string;
		title: string;
	}

	let posts: Post[] = [];
	let parser: DOMParser | null = null;

	onMount(async () => {
		parser = new DOMParser();

		if (browser) {
			const res = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@galactic-syndicate'
			);

			if (res.ok) {
				let x = await res.json();
				posts = x.items;
			}
		}
	});

	function isImage(src: string): boolean {
		const split = src.split('.');
		const fileType = split[split.length - 1];

		switch (fileType) {
			case 'jpeg':
			case 'jpg':
			case 'png':
				return true;
			default:
				return false;
		}
	}

	function extractString(html: string): string {
		if (!parser) return '';
		let doc = parser.parseFromString(html, 'text/html');
		let firstParagraph = doc.body.querySelector('p');
		if (firstParagraph) {
			return firstParagraph.textContent || '';
		}

		return '';
	}

	function toReadableDate(str: string): string {
		const months = [
			'Jan.',
			'Feb.',
			'Mar.',
			'Apr.',
			'May',
			'Jun.',
			'Jul.',
			'Aug.',
			'Sep.',
			'Oct.',
			'Nov.',
			'Dec.'
		];

		const [year, month, day] = str.split(' ')[0].split('-').map(Number);

		const formattedDate = `${year} ${months[month - 1]} ${day}`;
		return formattedDate;
	}

	function truncate(str: string): string {
		const ret = str.slice(0, 40);
		if (str.charAt(ret.length - 1) === '?') {
			return str.slice(0, 40);
		}
		return str.slice(0, 40);
	}
</script>

<svelte:head>
	<title>Blog | Galactic Syndicate</title>
</svelte:head>

<section>
	<div
		class="absolute inset-0 -z-10 h-screen w-full bg-contain bg-top bg-no-repeat text-black 2xl:bg-cover"
		style="background-image: url(/svgs/layout/blog-bg.svg)"
	/>
	<ul
		class="space-y- mx-auto min-h-screen w-fit space-y-16 py-headerHeightXl text-black md:py-headerHeightDouble xl:space-y-20"
	>
		{#each posts as p}
			<li class="flex items-center gap-4 xl:gap-16">
				<div
					class=" aspect-square h-32 w-32 phone:h-40 phone:w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 xl:h-96 xl:w-96"
				>
					{#if isImage(p.thumbnail)}
						<img
							src={p.thumbnail}
							class="h-full w-full object-cover"
							alt="xd"
						/>
					{:else}
						<img src="/svgs/blog-post-placeholder.svg" alt="" />
					{/if}
				</div>

				<div
					id="right-side"
					class="flex h-28 w-28 flex-col items-start justify-between font-aldrich phone:h-40 phone:w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 xl:h-96 xl:w-96 xl:gap-6"
				>
					<div class="w-full">
						<div class="flex items-center gap-1 xl:gap-2">
							<div class="aspect-square h-6 w-6 rounded-full xl:h-16 xl:w-16">
								<img src="/favicon.svg" alt="" class="" />
							</div>

							<img src="" alt="" />
							<div>
								<p class="text-xs phone:text-sm sm:text-base xl:text-2xl">
									{p.author}
								</p>
								<p class="text-2xs phone:text-xs sm:text-sm xl:text-lg">
									{toReadableDate(p.pubDate)}
								</p>
							</div>
						</div>

						<div class="mt-2 w-full xl:mt-4">
							<h3
								class="mb-2 w-full truncate text-sm leading-none tracking-tight text-navy sm:text-base sm:leading-none md:text-xl md:leading-none lg:leading-none xl:text-4xl xl:leading-none"
							>
								{p.title}
							</h3>
							<p
								class="inline-block w-full overflow-y-hidden truncate text-clip text-xs leading-none sm:leading-none md:text-base md:leading-none xl:w-96 xl:text-2xl xl:leading-none"
							>
								{truncate(extractString(p.content).split('.')[0])}
							</p>
						</div>
					</div>

					<a
						href={p.link}
						target="_blank"
						class="rounded-full bg-navy px-7 pb-0.5 pt-1 text-xs uppercase text-white sm:pb-1 sm:pt-1.5 sm:text-sm md:text-base xl:px-20 xl:pb-2 xl:pt-4 xl:text-3xl"
						>Read&nbsp;more</a
					>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.truncate {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media (min-width: 350px) {
		.truncate {
			white-space: normal;
			overflow: auto;
			text-overflow: unset;
		}
	}
</style>
