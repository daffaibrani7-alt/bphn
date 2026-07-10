<script lang="ts">
	import Newspaper from '@lucide/svelte/icons/newspaper';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<div class="mb-8 flex items-center justify-between">

	<div class="flex items-center gap-3">

		<Newspaper class="h-6 w-6 text-zinc-700"/>

		<h2 class="text-4xl font-bold">
			Berita Terbaru
		</h2>

	</div>

	<button
		class="flex items-center gap-2 rounded-full border-2 border-[#21409A] px-5 py-2 font-semibold text-[#21409A] transition hover:bg-[#21409A] hover:text-white"
	>
		Lihat Lebih

		<ArrowRight class="h-5 w-5"/>
	</button>

</div>
