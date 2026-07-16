<script lang="ts">
	import { activeCategory } from '$lib/stores/officials';
</script>

<aside class="sticky top-28">

	<h2 class="mb-8 text-2xl font-semibold text-slate-900">
		Pejabat
	</h2>

	<div class="space-y-3">

		<button
			on:click={() => activeCategory.set('structural')}
			class="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold transition"
			class:bg-slate-100={$activeCategory === 'structural'}
			class:text-slate-900={$activeCategory === 'structural'}
		>
			<span class="h-6 w-1 rounded-full bg-[#F7C948]"></span>

			Pejabat Struktural
		</button>

		<button
			on:click={() => activeCategory.set('functional')}
			class="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition"
			class:bg-slate-100={$activeCategory === 'functional'}
			class:text-slate-900={$activeCategory === 'functional'}
		>
			<span class="h-6 w-1 rounded-full bg-[#F7C948]"></span>

			Pejabat Fungsional
		</button>

	</div>

</aside>
