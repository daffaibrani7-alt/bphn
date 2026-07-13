<script lang="ts">
	interface Props {
		id: number;
	}

	let { id }: Props = $props();
</script>

<article
	class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-[#1F3A8A]/30 hover:shadow-lg"
>
	<div class="aspect-[16/9] bg-slate-200"></div>

	<div class="space-y-3 p-4">

		<div class="flex items-center gap-2 text-[11px] font-medium text-red-500">
			<span>📅</span>
			<span>15 April 2026</span>
		</div>

		<h3 class="line-clamp-2 text-[19px] font-semibold leading-snug text-slate-900">
			Aktualisasi Paralegal di Posbankum #{id}
		</h3>

		<p class="line-clamp-3 text-sm leading-6 text-slate-500">
			Paralegal diwajibkan untuk melakukan scan QR Code di wilayah
			Posbankum sebagai bagian dari digitalisasi layanan bantuan hukum.
		</p>

	</div>
</article>
