<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { ticker } from '$lib/data/shared/topTicker';
</script>

<div class="absolute left-1/2 top-24 z-20 w-full max-w-7xl -translate-x-1/2 px-6">
	<div
		class="
		flex
		items-center
		justify-between
		rounded-xl
		bg-red-600
		px-4
		py-3
		text-white
		shadow-xl
	"
	>

		<div class="flex items-center gap-4">

			<div
				class="
				rounded-md
				bg-white
				px-4
				py-1
				text-sm
				font-semibold
				text-red-600
				"
			>
				{ticker.label}
			</div>

			<p class="text-sm font-medium">
				{ticker.title}
			</p>

			<span class="text-xs opacity-80">
				{ticker.time}
			</span>

		</div>

		<button
			class="flex items-center gap-2 text-sm font-semibold hover:opacity-80"
		>
			Lihat Berita

			<ArrowRight size={18}/>
		</button>

	</div>

</div>
