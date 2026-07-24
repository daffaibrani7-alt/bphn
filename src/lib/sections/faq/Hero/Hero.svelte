<script lang="ts">
	import Search from '@lucide/svelte/icons/search';

	let keyword = '';

	const stats = [
		{ value: '150+', label: 'Pertanyaan' },
		{ value: '8', label: 'Kategori' },
		{ value: '24/7', label: 'Akses' }
	];
</script>

<section class="relative overflow-hidden bg-[#132B73]">

	<div class="absolute inset-0 opacity-20">
		<div class="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
		<div class="absolute right-10 top-10 h-80 w-80 rounded-full bg-indigo-400 blur-3xl"></div>
	</div>

	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

	<div class="relative mx-auto max-w-7xl px-6 pt-36 pb-40">

		<div class="mx-auto max-w-4xl text-center">

			<div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
				<span class="h-2 w-2 rounded-full bg-cyan-300"></span>
				LAYANAN PERTANYAAN
			</div>

			<h1 class="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
				Frequently Asked Questions
			</h1>

			<p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
				Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai
				layanan Badan Pembinaan Hukum Nasional.
			</p>

			<div class="mx-auto mt-12 flex max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">

				<div class="flex flex-1 items-center gap-4 px-6">

					<Search class="text-slate-400" size={22} />

					<input
						bind:value={keyword}
						type="text"
						placeholder="Cari pertanyaan..."
						class="h-16 w-full border-0 outline-none"
					/>

				</div>

				<button
					class="bg-[#2149A8] px-8 font-semibold text-white transition hover:bg-[#163987]"
				>
					Cari
				</button>

			</div>

			<div class="mt-12 flex justify-center gap-12">

				{#each stats as item}

					<div>

						<div class="text-3xl font-bold text-white">
							{item.value}
						</div>

						<div class="mt-1 text-sm text-blue-200">
							{item.label}
						</div>

					</div>

				{/each}

			</div>

		</div>

	</div>

	<svg
		viewBox="0 0 1440 170"
		preserveAspectRatio="none"
		class="absolute bottom-0 left-0 w-full"
	>
		<path
			fill="#F8FAFC"
			d="M0,128L80,117.3C160,107,320,85,480,80C640,75,800,85,960,101.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
		/>
	</svg>

</section>
