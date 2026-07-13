<script lang="ts">
	import Newspaper from '@lucide/svelte/icons/newspaper';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<div class="mb-8 flex items-center justify-between">

	<div class="flex items-center gap-3 text-white">

		<div class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400/20">
			<Newspaper class="h-5 w-5 text-yellow-400" />
		</div>

		<div>
			<h2 class="text-[38px] font-bold tracking-tight">
				Terbaru
			</h2>

			<p class="mt-1 text-sm text-white/60">
				Siaran pers terbaru Badan Pembinaan Hukum Nasional
			</p>
		</div>

	</div>

	<a
		href="/siaran-pers"
		class="group inline-flex items-center gap-3 rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
	>

		Lihat Lebih

		<span class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black transition group-hover:translate-x-1">
			<ArrowRight class="h-4 w-4"/>
		</span>

	</a>

</div>
