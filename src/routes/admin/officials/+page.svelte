<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase/client';

	type Official = {
		id: string;
		name: string;
		position: string;
		category: string;
		biography: string | null;
		photo_url: string | null;
	};

	let officials = $state<Official[]>([]);
	let loading = $state(true);
	let error = $state('');

	async function loadOfficials() {
		loading = true;

		const { data, error: err } = await supabase
			.from('officials')
			.select('*')
			.order('created_at', { ascending: false });

		loading = false;

		if (err) {
			error = err.message;
			return;
		}

		officials = data ?? [];
	}

	async function remove(id: string) {
		if (!confirm('Hapus pejabat ini?')) return;

		const { error } = await supabase
			.from('officials')
			.delete()
			.eq('id', id);

		if (error) {
			alert(error.message);
			return;
		}

		loadOfficials();
	}

	onMount(loadOfficials);
</script>

<svelte:head>
	<title>Pejabat</title>
</svelte:head>

<div class="min-h-screen bg-slate-100 p-10">

	<div class="mx-auto max-w-7xl">

		<div class="mb-8 flex items-center justify-between">

			<h1 class="text-3xl font-bold">
				Data Pejabat
			</h1>

			<button
				class="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white"
				onclick={() => goto('/admin/officials/new')}
			>
				+ Tambah
			</button>

		</div>

		{#if loading}

			<div class="rounded-xl bg-white p-8">
				Loading...
			</div>

		{:else if error}

			<div class="rounded-xl bg-red-100 p-8 text-red-700">
				{error}
			</div>

		{:else}

			<div class="overflow-hidden rounded-2xl bg-white shadow">

				<table class="w-full">

					<thead class="bg-slate-200">

						<tr>

							<th class="p-4 text-left">Foto</th>
							<th class="p-4 text-left">Nama</th>
							<th class="p-4 text-left">Jabatan</th>
							<th class="p-4 text-left">Kategori</th>
							<th class="p-4 text-left">Aksi</th>

						</tr>

					</thead>

					<tbody>

						{#each officials as o}

						<tr class="border-t">

							<td class="p-4">

								{#if o.photo_url}
									<img
										src={o.photo_url}
										class="h-16 w-16 rounded-xl object-cover"
										alt={o.name}
									/>
								{:else}
									<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-200">
										-
									</div>
								{/if}

							</td>

							<td class="p-4 font-semibold">
								{o.name}
							</td>

							<td class="p-4">
								{o.position}
							</td>

							<td class="p-4">
								{o.category}
							</td>

							<td class="p-4">

								<div class="flex gap-2">

									<button
										class="rounded bg-yellow-500 px-3 py-2 text-white"
										onclick={() => alert('Edit menyusul')}
									>
										Edit
									</button>

									<button
										class="rounded bg-red-600 px-3 py-2 text-white"
										onclick={() => remove(o.id)}
									>
										Hapus
									</button>

								</div>

							</td>

						</tr>

						{/each}

					</tbody>

				</table>

			</div>

		{/if}

	</div>

</div>
