<script lang="ts">
	import { newsCategories } from '$lib/data/home/news-category';

	let {
		active = $bindable(0)
	} = $props();
</script>

<nav class="flex items-center gap-14">
	{#each newsCategories as category, index}
		<button
			onclick={() => (active = index)}
			class="group relative pb-6 text-lg font-semibold transition-colors"
			class:text-[#21409A]={active === index}
			class:text-zinc-500={active !== index}
		>
			{category}

			<div
				class="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#21409A] transition-all duration-300"
				class:w-full={active === index}
				class:w-0={active !== index}
			></div>
		</button>
	{/each}
</nav>
