<script lang="ts">
	import { news } from '$lib/data/home/news';
	import SectionHeader from './components/SectionHeader.svelte';

	const featured = news[0];
	const secondary = news.slice(1, 4);
</script>

<section class="py-16">

	<div class="mx-auto max-w-[1280px] px-6">

		<div class="flex items-center justify-between">
			<SectionHeader />

			<a
				href="/berita"
				class="rounded-full border border-[#192F7B] px-5 py-2 text-sm font-semibold text-[#192F7B]"
			>
				Lihat Lebih
			</a>
		</div>


		<div class="mt-8 grid grid-cols-12 gap-8">


			<!-- IMAGE UTAMA -->
			<a
				href={`/berita/${featured.slug}`}
				class="group relative col-span-6 h-[442px] overflow-hidden rounded-[15px]"
			>

				<img
					src={featured.image}
					alt={featured.title}
					class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
				/>

				<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>


				<div
					class="absolute left-4 top-4 rounded bg-black/20 px-4 py-2 text-sm text-white backdrop-blur"
				>
					{featured.date}
				</div>


			</a>



			<!-- TEXT -->
			<div class="col-span-6">

				<a
					href={`/berita/${featured.slug}`}
					class="text-[32px] font-semibold leading-[46px] text-[#343131]"
				>
					{featured.title}
				</a>


				<div class="mt-6 grid grid-cols-2 gap-6 text-justify text-sm leading-8 text-[#343131]">

					<p>
						{featured.description}
					</p>

					<p>
						Informasi terbaru mengenai kegiatan dan pelayanan Badan Pembinaan Hukum Nasional.
					</p>

				</div>


				<a
					href={`/berita/${featured.slug}`}
					class="mt-8 inline-flex items-center gap-3 rounded-full border border-[#192F7B] px-5 py-2 text-xs font-semibold text-[#192F7B]"
				>
					Baca Selengkapnya

					<span
						class="flex h-7 w-7 items-center justify-center rounded-full bg-[#192F7B] text-white"
					>
						↗
					</span>

				</a>


			</div>


		</div>



		<!-- CARD BAWAH -->

		<div class="mt-10 grid grid-cols-3 gap-5">

			{#each secondary as item}

				<a
					href={`/berita/${item.slug}`}
					class="group relative h-[231px] overflow-hidden rounded-[15px]"
				>

					<img
						src={item.image}
						alt={item.title}
						class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
					/>

					<div
						class="absolute inset-0 bg-black/40"
					></div>


					<div class="absolute left-4 top-4 rounded bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
						{item.date}
					</div>


					<h3
						class="absolute bottom-5 left-4 right-4 text-base font-semibold leading-6 text-white"
					>
						{item.title}
					</h3>

				</a>

			{/each}

		</div>


	</div>

</section>
