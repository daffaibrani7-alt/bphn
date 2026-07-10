<script lang="ts">
	import Play from '@lucide/svelte/icons/play';
	import type { ShortNews } from '$lib/data/home/short-news';

	interface Props {
		news: ShortNews;
	}

	let { news }: Props = $props();
</script>

<button
	class="group relative h-[280px] w-[180px] shrink-0 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>

	<img
		src={news.image}
		alt={news.title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
	/>

	<div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

	<div
		class="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-sm text-white backdrop-blur-lg"
	>
		<Play class="h-3 w-3 fill-white"/>
		{news.duration}
	</div>

	<div class="absolute bottom-4 left-4 right-4">

		<h3
			class="line-clamp-3 text-left text-sm font-semibold leading-5 text-white"
		>
			{news.title}
		</h3>

	</div>

</button>
