<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Mail from '@lucide/svelte/icons/mail';
</script>

<section class="bg-[#F8FAFC] py-24">

	<div class="mx-auto max-w-7xl px-6">

		<div class="overflow-hidden rounded-[40px] bg-white shadow-2xl">

			<div class="grid lg:grid-cols-2">

				<div class="p-12 lg:p-16">

					<div class="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2149A8]">
						BUTUH BANTUAN?
					</div>

					<h2 class="mt-6 text-5xl font-bold leading-tight text-slate-900">
						Masih memiliki
						<br>
						pertanyaan?
					</h2>

					<p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
						Jika jawaban yang Anda cari belum tersedia,
						tim Badan Pembinaan Hukum Nasional siap
						membantu Anda.
					</p>

					<div class="mt-10 flex flex-wrap gap-4">

						<a
							href="mailto:humas@bphn.go.id"
							class="inline-flex items-center gap-3 rounded-xl bg-[#2149A8] px-7 py-4 font-semibold text-white transition hover:bg-[#173A8B]"
						>
							<Mail size={20}/>
							Kirim Email
						</a>

						<a
							href="/kontak"
							class="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-100"
						>
							Hubungi Kami
							<ArrowRight size={18}/>
						</a>

					</div>

				</div>

				<div class="relative overflow-hidden bg-gradient-to-br from-[#2149A8] to-[#4B73D9]">

					<div class="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
					<div class="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10"></div>

					<div class="flex h-full items-center justify-center p-12">

						<svg
							viewBox="0 0 500 420"
							class="w-full max-w-md"
						>

							<circle
								cx="250"
								cy="210"
								r="150"
								fill="rgba(255,255,255,.08)"
							/>

							<rect
								x="145"
								y="90"
								width="210"
								height="220"
								rx="26"
								fill="white"
							/>

							<rect
								x="175"
								y="130"
								width="150"
								height="14"
								rx="7"
								fill="#E5E7EB"
							/>

							<rect
								x="175"
								y="165"
								width="110"
								height="14"
								rx="7"
								fill="#E5E7EB"
							/>

							<rect
								x="175"
								y="205"
								width="140"
								height="14"
								rx="7"
								fill="#2149A8"
							/>

							<circle
								cx="330"
								cy="115"
								r="26"
								fill="#4ADE80"
							/>

							<circle
								cx="125"
								cy="300"
								r="20"
								fill="#FDBA74"
							/>

							<circle
								cx="360"
								cy="300"
								r="18"
								fill="#60A5FA"
							/>

						</svg>

					</div>

				</div>

			</div>

		</div>

	</div>

</section>
