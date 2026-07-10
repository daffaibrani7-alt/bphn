<script lang="ts">
	import Globe from '@lucide/svelte/icons/globe';
	import Mail from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';
</script>

<footer class="mt-24 bg-[#1F3F99] text-white">
	<div class="mx-auto max-w-[1280px] px-6 py-16">

		<div class="grid grid-cols-4 gap-12">

			<div>
				<h2 class="text-2xl font-bold">
					BPHN
				</h2>

				<p class="mt-4 leading-7 text-white/80">
					Badan Pembinaan Hukum Nasional
					<br>
					Kementerian Hukum Republik Indonesia
				</p>
			</div>

			<div>
				<h3 class="mb-5 font-semibold">
					Layanan
				</h3>

				<ul class="space-y-3 text-white/80">
					<li>JDIHN</li>
					<li>Posbankum</li>
					<li>Penyuluhan Hukum</li>
					<li>Perpustakaan</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-5 font-semibold">
					Kontak
				</h3>

				<div class="space-y-4">

					<div class="flex items-center gap-3">
						<Phone class="h-5 w-5" />
						<span>+62 21 8091908</span>
					</div>

					<div class="flex items-center gap-3">
						<Mail class="h-5 w-5" />
						<span>humas@bphn.go.id</span>
					</div>

					<div class="flex items-center gap-3">
						<MapPin class="h-5 w-5" />
						<span>Jakarta Timur</span>
					</div>

				</div>
			</div>

			<div>
				<h3 class="mb-5 font-semibold">
					Media
				</h3>

				<div class="flex gap-4">

					<button class="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
						<Globe class="h-5 w-5" />
					</button>

					<button class="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
						<Mail class="h-5 w-5" />
					</button>

					<button class="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
						<Phone class="h-5 w-5" />
					</button>

				</div>
			</div>

		</div>

		<div class="mt-14 flex justify-between border-t border-white/10 pt-8 text-sm text-white/60">

			<p>© 2026 Badan Pembinaan Hukum Nasional</p>

			<div class="flex gap-8">
				<span>Kebijakan Privasi</span>
				<span>Syarat & Ketentuan</span>
				<span>Kontak Kami</span>
			</div>

		</div>

	</div>
</footer>
