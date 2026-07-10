<script lang="ts">
	import { shortNews } from '$lib/data/home/short-news';

	import ShortNewsCard from './components/ShortNewsCard.svelte';
	import ShortNewsHeader from './components/ShortNewsHeader.svelte';
</script>

<section class="py-8">

	<div
		class="mx-auto max-w-[1280px] overflow-hidden rounded-2xl bg-[#1F1F1F] px-6 py-6"
	>

		<ShortNewsHeader/>

		<div class="relative">

			<div
				class="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#1F1F1F] to-transparent"
			></div>

			<div
				class="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#1F1F1F] to-transparent"
			></div>

			<div
				class="flex gap-4 overflow-x-auto scrollbar-none pb-1"
			>

				{#each shortNews as news}

					<ShortNewsCard {news}/>

				{/each}

			</div>

		</div>

	</div>

</section>
