<script lang="ts">
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div class="absolute bottom-16 right-10 z-30 flex gap-3">

	<button
		class="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
	>
		<ChevronLeft size={20}/>
	</button>

	<button
		class="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
	>
		<ChevronRight size={20}/>
	</button>

</div>
