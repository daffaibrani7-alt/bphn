<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { X } from '@lucide/svelte';
	import type { Official } from '$lib/types/official';

	let {
		official = $bindable<Official | null>()
	}: {
		official: Official | null;
	} = $props();

	function close() {
		official = null;
	}
</script>

{#if official}
	<div
		class="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 p-8 backdrop-blur-md"
		transition:fade
		on:click={close}
	>
		<div
			class="relative h-[88vh] w-full max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
			transition:scale={{ duration: 220 }}
			on:click|stopPropagation
		>
			<button
				class="absolute right-6 top-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-110 hover:bg-red-600 hover:text-white"
				on:click={close}
			>
				<X size={20} />
			</button>

			<div class="grid h-full lg:grid-cols-[430px_1fr]">
				<!-- LEFT -->
				<div class="flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-10">
					<img
						src={official.image}
						alt={official.name}
						class="h-full max-h-[720px] rounded-2xl object-contain"
					/>
				</div>

				<!-- RIGHT -->
				<div class="overflow-y-auto">
					<div class="p-12">
						<h1 class="text-5xl font-bold leading-tight text-slate-900">
							{official.name}
						</h1>

						<p class="mt-4 text-xl font-semibold text-[#163B74]">
							{official.position}
						</p>

						<div class="my-8 h-px bg-slate-200"></div>

						<section>
							<h2 class="mb-5 text-2xl font-semibold text-slate-900">
								Biografi
							</h2>

							<p class="leading-9 text-justify text-slate-600">
								{official.biography}
							</p>
						</section>

						<div class="my-10 h-px bg-slate-200"></div>

						<section>
							<h2 class="mb-5 text-2xl font-semibold text-slate-900">
								Riwayat Pendidikan
							</h2>

							<p class="text-slate-500">
								Data belum tersedia.
							</p>
						</section>

						<div class="my-10 h-px bg-slate-200"></div>

						<section>
							<h2 class="mb-5 text-2xl font-semibold text-slate-900">
								Riwayat Jabatan
							</h2>

							<p class="text-slate-500">
								Data belum tersedia.
							</p>
						</section>

						<div class="h-16"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
