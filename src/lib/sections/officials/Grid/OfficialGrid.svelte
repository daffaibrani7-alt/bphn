<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase/client';

	import OfficialCard from './OfficialCard.svelte';
	import OfficialModal from './OfficialModal.svelte';
	import { activeCategory } from '$lib/stores/officials';

	type Official = {
		id: string;
		name: string;
		position: string;
		category: string;
		biography: string | null;
		photo_url: string | null;
	};

	let officials = $state<Official[]>([]);
	let selectedOfficial = $state<Official | null>(null);

	async function loadOfficials() {
		const { data, error } = await supabase
			.from('officials')
			.select('*')
			.order('created_at', { ascending: true });

		if (error) {
			console.error(error);
			return;
		}

		officials = data ?? [];
	}

	onMount(loadOfficials);

	const filteredOfficials = $derived(
		officials.filter((o) => o.category === $activeCategory)
	);

	function openOfficial(official: Official) {
		selectedOfficial = official;
	}
</script>

<section>

	<h2 class="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
		{$activeCategory === 'structural'
			? 'Pejabat Struktural'
			: 'Pejabat Fungsional'}
	</h2>

	<p class="mb-12 mt-2 max-w-2xl leading-7 text-slate-500">
		{$activeCategory === 'structural'
			? 'Daftar pejabat struktural Badan Pembinaan Hukum Nasional.'
			: 'Daftar pejabat fungsional Badan Pembinaan Hukum Nasional.'}
	</p>

	<div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">

		{#each filteredOfficials as official}

			<OfficialCard
				{official}
				onClick={openOfficial}
			/>

		{/each}

	</div>

	<OfficialModal bind:official={selectedOfficial} />

</section>
