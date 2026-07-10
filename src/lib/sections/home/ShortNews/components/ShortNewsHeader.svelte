<script lang="ts">
	import Clapperboard from '@lucide/svelte/icons/clapperboard';
	import ShortNewsControls from './ShortNewsControls.svelte';
	import { shortNews } from '$lib/data/home/short-news';
</script>

<div class="mb-8">

	<div class="mb-6 flex items-center justify-between">

		<div class="flex items-center gap-3 text-white">

			<Clapperboard class="h-7 w-7"/>

			<h2 class="text-[40px] font-bold tracking-tight">
				Berita Pendek
			</h2>

		</div>

		<ShortNewsControls/>

	</div>

	<div class="flex gap-2">

		{#each shortNews as _, i}

			<div
				class={`h-1 rounded-full transition-all ${
					i === 0
						? 'w-14 bg-white'
						: 'w-6 bg-white/25'
				}`}
			></div>

		{/each}

	</div>

</div>
