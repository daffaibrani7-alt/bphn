<script lang="ts">
	import type { Official } from '$lib/types/official';

	const {
		official,
		onClick
	}: {
		official: Official;
		onClick: (official: Official) => void;
	} = $props();
</script>

<button
	type="button"
	on:click={() => onClick(official)}
	class="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
	<div class="aspect-[3/4] bg-slate-100">
		<img
			src={official.image}
			alt={official.name}
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
		/>
	</div>

	<div
		class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-6 pt-20"
	>
		<h3 class="text-xl font-bold text-[#FFD54F]">
			{official.name}
		</h3>

		<p class="mt-2 text-sm leading-6 text-white/90">
			{official.position}
		</p>
	</div>
</button>
