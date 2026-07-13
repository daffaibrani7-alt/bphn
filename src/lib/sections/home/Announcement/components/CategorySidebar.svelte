<script lang="ts">
import { categories } from '../data';

let active = 'Semua';
</script>

<aside class="overflow-hidden rounded-2xl border border-slate-200 bg-white">

	<div class="flex items-center justify-between bg-[#1F3A8A] px-5 py-4 text-white">
		<div class="flex items-center gap-3">
			<div class="grid h-5 w-5 grid-cols-2 gap-0.5">
				<div class="rounded-sm bg-white"></div>
				<div class="rounded-sm bg-white"></div>
				<div class="rounded-sm bg-white"></div>
				<div class="rounded-sm bg-white"></div>
			</div>

			<span class="font-semibold">
				Kategori
			</span>
		</div>

		<span class="text-lg">⌃</span>
	</div>

	<div class="space-y-1 p-5">

		{#each categories as category}

			<button
				class={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition
				${active === category.name
					? 'font-semibold text-[#1F3A8A]'
					: 'text-slate-600 hover:bg-slate-50 hover:text-[#1F3A8A]'}`}
			>

				<div
					class={`h-4 w-4 rounded-full border-2 flex items-center justify-center
					${active === category.name
						? 'border-green-500 bg-green-500 text-white'
						: 'border-slate-300'}`}
				>

					{#if active === category.name}
						✓
					{/if}

				</div>

				{category.name}

			</button>

		{/each}

	</div>

</aside>
