<script lang="ts">
	import { news } from '$lib/data/home/news';

	import SectionHeader from './SectionHeader.svelte';
	import FeaturedCard from './FeaturedCard.svelte';
	import MiniCard from './MiniCard.svelte';

	const featured = news.slice(0, 3);
	const mini = news.slice(3, 7);
</script>

<section class="mt-20 rounded-[32px] bg-[#1B1B1B] p-8 lg:p-10">

	<SectionHeader />

	<div class="grid gap-6 lg:grid-cols-3">

		{#each featured as item}

			<FeaturedCard article={item} />

		{/each}

	</div>

	<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

		{#each mini as item}

			<MiniCard article={item} />

		{/each}

	</div>

</section>
