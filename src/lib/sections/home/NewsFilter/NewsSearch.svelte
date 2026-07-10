<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import { Input } from '$lib/components/ui/input';

	let keyword = $state('');
</script>

<div class="flex items-center gap-3">

	<Input
		bind:value={keyword}
		placeholder="Search..."
		class="h-12 w-[360px] rounded-xl"
	/>

	<button
		class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#21409A] text-white transition hover:bg-[#17327d]"
	>
		<Search size={20}/>
	</button>

</div>
