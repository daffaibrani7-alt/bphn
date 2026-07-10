<script lang="ts">
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	interface Props {
		label?: string;
	}

	let { label = 'Lihat Semua' }: Props = $props();
</script>

<button
	class="group flex items-center gap-2 rounded-full border border-[#21409A] px-5 py-2 font-medium text-[#21409A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#21409A] hover:text-white"
>

	<span>{label}</span>

	<ChevronRight
		class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
	/>

</button>
