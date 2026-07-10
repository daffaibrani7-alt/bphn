<script lang="ts">
	import Flame from '@lucide/svelte/icons/flame';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<div class="mb-8 flex items-center justify-between">

	<div class="flex items-center gap-3 text-white">

		<Flame class="h-6 w-6 text-yellow-400" />

		<h2 class="text-4xl font-bold">
			Berita Terpopuler
		</h2>

	</div>

	<button
		class="flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
	>
		Lihat Lebih

		<ArrowRight class="h-4 w-4" />

	</button>

</div>
