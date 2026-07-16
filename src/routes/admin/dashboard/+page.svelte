<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { goto } from '$app/navigation';

	async function logout() {
		await supabase.auth.signOut();
		goto('/admin/login');
	}

	const cards = [
		{ title: 'Pejabat', value: 0, color: 'bg-blue-600' },
		{ title: 'Berita', value: 0, color: 'bg-emerald-600' },
		{ title: 'Galeri', value: 0, color: 'bg-orange-500' },
		{ title: 'Pengguna', value: 1, color: 'bg-violet-600' }
	];
</script>

<svelte:head>
	<title>Dashboard Admin</title>
</svelte:head>

<div class="min-h-screen bg-slate-100">

	<header class="border-b bg-white">
		<div class="mx-auto flex max-w-7xl items-center justify-between p-6">
			<h1 class="text-3xl font-bold text-slate-800">
				BPHN Admin Dashboard
			</h1>

			<button
				onclick={logout}
				class="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
			>
				Logout
			</button>
		</div>
	</header>

	<div class="mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-[260px_1fr]">

		<aside class="rounded-2xl bg-white p-6 shadow">

			<h2 class="mb-6 text-xl font-bold">
				Menu
			</h2>

			<nav class="space-y-3">

				<a href="/admin/dashboard" class="block rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">
					Dashboard
				</a>

				<a href="/admin/officials" class="block rounded-xl px-4 py-3 hover:bg-slate-100">
					Pejabat
				</a>

				<a href="/admin/news" class="block rounded-xl px-4 py-3 hover:bg-slate-100">
					Berita
				</a>

				<a href="/admin/gallery" class="block rounded-xl px-4 py-3 hover:bg-slate-100">
					Galeri
				</a>

				<a href="/admin/profile" class="block rounded-xl px-4 py-3 hover:bg-slate-100">
					Profil
				</a>

			</nav>

		</aside>

		<main>

			<h2 class="mb-8 text-2xl font-bold">
				Ringkasan
			</h2>

			<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

				{#each cards as card}

					<div class={`rounded-2xl p-6 text-white shadow ${card.color}`}>

						<div class="text-lg">
							{card.title}
						</div>

						<div class="mt-4 text-5xl font-bold">
							{card.value}
						</div>

					</div>

				{/each}

			</div>

			<div class="mt-10 rounded-2xl bg-white p-8 shadow">

				<h3 class="mb-3 text-xl font-bold">
					Selamat Datang 👋
				</h3>

				<p class="text-slate-600">
					Dashboard CMS BPHN siap digunakan.
					Selanjutnya kita akan membuat CRUD Pejabat,
					Berita, Galeri, Profil, dan Upload Gambar Supabase.
				</p>

			</div>

		</main>

	</div>

</div>
