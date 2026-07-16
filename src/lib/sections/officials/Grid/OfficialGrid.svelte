<div>

	<h2 class="mb-2 text-4xl font-bold text-slate-900">
		Pejabat Struktural
	</h2>

	<p class="mb-10 text-slate-500">
		Daftar pejabat struktural Badan Pembinaan Hukum Nasional.
	</p>

	<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

		{#each Array(6) as _, i}

			<div
				class="overflow-hidden rounded-2xl bg-slate-200"
			>

				<div class="aspect-[3/4] bg-slate-300"></div>

				<div class="bg-[#163B74] p-5">

					<h3 class="font-bold text-yellow-300">
						Nama Pejabat {i + 1}
					</h3>

					<p class="mt-2 text-sm text-white/80">
						Kepala Badan Pembinaan Hukum Nasional
					</p>

				</div>

			</div>

		{/each}

	</div>

</div>
