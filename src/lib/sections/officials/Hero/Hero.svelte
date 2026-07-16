<script lang="ts">
	import Container from '$lib/components/common/Container.svelte';
</script>

<section class="relative overflow-hidden ">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image:url('/images/hero/hero-bg.svg')"
	></div>

	<div class="absolute inset-0 bg-[#143D7A]/70"></div>

	<div
		class="absolute inset-0 bg-gradient-to-r from-[#143D7A] via-[#143D7ACC] to-transparent"
	></div>

	<Container class="relative z-10">
		<div class="flex min-h-[360px] flex-col justify-center py-12 lg:min-h-[300px]">

			<nav class="mb-6 flex items-center gap-3 text-sm">

				<a href="/" class="text-white/70 transition hover:text-white">
					Beranda
				</a>

				<span class="text-white/40">/</span>

				<span class="text-white/70">
					Tentang BPHN
				</span>

				<span class="text-white/40">/</span>

				<span class="font-medium text-[#F7C948]">
					Profil Pejabat
				</span>

			</nav>

			<h1
				class="max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl"
			>
				Profil Pejabat
			</h1>

			<p
				class="mt-5 max-w-2xl text-base leading-7 text-white/80 lg:text-lg"
			>
				Kenali jajaran pimpinan Badan Pembinaan Hukum Nasional
				yang berperan dalam mendukung pembangunan hukum nasional.
			</p>

		</div>
	</Container>
</section>
