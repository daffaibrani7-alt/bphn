<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');

	async function login() {
		loading = true;
		error = '';

		const { error: err } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		loading = false;

		if (err) {
			error = err.message;
			return;
		}

		goto('/admin/dashboard');
	}
</script>

<svelte:head>
	<title>Admin Login</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-slate-100">
	<form
		class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
		onsubmit={(e) => {
			e.preventDefault();
			login();
		}}
	>
		<h1 class="mb-8 text-center text-3xl font-bold">
			Admin BPHN
		</h1>

		<input
			bind:value={email}
			type="email"
			placeholder="Email"
			class="mb-4 w-full rounded-xl border p-3"
		/>

		<input
			bind:value={password}
			type="password"
			placeholder="Password"
			class="mb-6 w-full rounded-xl border p-3"
		/>

		<button
			type="submit"
			class="w-full rounded-xl bg-[#163B74] py-3 font-semibold text-white"
		>
			{loading ? 'Loading...' : 'Login'}
		</button>

		{#if error}
			<p class="mt-4 text-center text-red-600">{error}</p>
		{/if}
	</form>
</div>
