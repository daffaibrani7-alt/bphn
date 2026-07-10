<script lang="ts">
	import { videoNews } from '$lib/data/home/video-news';
	import SectionHeader from '$lib/sections/home/LatestNews/components/SectionHeader.svelte';
	import MainVideo from './components/MainVideo.svelte';
	import VideoCard from './components/VideoCard.svelte';
</script>

<section class="py-20">

	<div class="mx-auto max-w-[1280px]">

		<SectionHeader />

		<MainVideo />

		<div class="mt-8 grid grid-cols-4 gap-6">

			{#each videoNews.slice(1) as video}

				<VideoCard {...video} />

			{/each}

		</div>

	</div>

</section>
