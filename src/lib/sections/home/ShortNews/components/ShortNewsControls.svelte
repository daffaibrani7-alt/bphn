<script lang="ts">
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div class="flex items-center gap-4">

	<button
		class="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
	>
		<ChevronLeft class="h-8 w-8" />
	</button>

	<button
		class="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
	>
		<ChevronRight class="h-8 w-8" />
	</button>

</div>
