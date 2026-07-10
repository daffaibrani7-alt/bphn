<script lang="ts">
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
	import { Hero } from '$lib/sections/home/Hero';
	import { TopTicker } from '$lib/sections/home/TopTicker';
	import { NewsFilter } from '$lib/sections/home/NewsFilter';
	import { PressRelease } from '$lib/sections/home/PressRelease';
</script>

<Navbar />

<main class="pt-[72px]">
	<section class="relative">
		<Hero />
		<TopTicker />
	</section>

	<NewsFilter />

	<PressRelease />
</main>
