<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { goto } from '$app/navigation';

	let name = $state('');
	let position = $state('');
	let category = $state('structural');
	let biography = $state('');
	let photo = $state<File | null>(null);
	let uploading = $state(false);
	let photo_url = $state('');
	let saving = $state(false);

	async function uploadPhoto() {
	if (!photo) return "";

	uploading = true;

	const ext = photo.name.split(".").pop();
	const filename = crypto.randomUUID() + "." + ext;

	const url = await uploadPhoto();

		const { error } = await supabase.storage
		.from("officials")
		.upload(filename, photo);

	uploading = false;

	if (error) {
		alert(error.message);
		return "";
	}

	const { data } = supabase.storage
		.from("officials")
		.getPublicUrl(filename);

	return data.publicUrl;
}

async function save() {
	console.log('SAVE START');

	saving = true;

	try {
		const { error } = await supabase
			.from('officials')
			.insert({
				name,
				position,
				category,
				biography
			});

		console.log('SUPABASE ERROR:', error);

		if (error) {
			alert(error.message);
			return;
		}

		alert('Berhasil disimpan');

		await goto('/admin/officials');

	} catch (e) {
		console.error(e);
		alert(String(e));
	} finally {
		saving = false;
	}
}

</script>

<div class="min-h-screen bg-slate-100 p-10">

	<div class="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow">

		<h1 class="mb-8 text-3xl font-bold">
			Tambah Pejabat
		</h1>

		<div class="space-y-6">

			<div>
				<label class="mb-2 block font-semibold">
					Nama
				</label>

				<input
					bind:value={name}
					class="w-full rounded-xl border p-3"
				/>
			</div>

			<div>
				<label class="mb-2 block font-semibold">
					Jabatan
				</label>

				<input
					bind:value={position}
					class="w-full rounded-xl border p-3"
				/>
			</div>

			<div>
				<label class="mb-2 block font-semibold">
					Kategori
				</label>

				<select
					bind:value={category}
					class="w-full rounded-xl border p-3"
				>
					<option value="structural">Structural</option>
					<option value="functional">Functional</option>
				</select>
			</div>

			<div>
				<label class="mb-2 block font-semibold">
					Foto
				</label>

				<input
					type="file"
					accept="image/*"
					onchange={(e) => photo = e.currentTarget.files?.[0] ?? null}
				/>
			</div>

			<div>
				<label class="mb-2 block font-semibold">
					Biografi
				</label>

				<textarea
					rows="8"
					bind:value={biography}
					class="w-full rounded-xl border p-3"
				></textarea>
			</div>

			<div class="flex gap-4">

				<button
					onclick={save}
					class="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
				>
					{saving ? 'Menyimpan...' : 'Simpan'}
				</button>

				<button
					onclick={() => goto('/admin/officials')}
					class="rounded-xl bg-slate-300 px-6 py-3"
				>
					Batal
				</button>

			</div>

		</div>

	</div>

</div>
