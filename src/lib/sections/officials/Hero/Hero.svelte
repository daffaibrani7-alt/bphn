<script lang="ts">
	import Container from '$lib/components/common/Container.svelte';
</script>

<section class="relative overflow-hidden pt-20">

	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image:url('/images/hero/hero-bg.svg')"
	></div>

	<div class="absolute inset-0 bg-[#143D7A]/80"></div>

	<div class="absolute inset-0 bg-gradient-to-r from-[#143D7A] via-[#143D7ACC] to-transparent"></div>

	<Container class="relative z-10 py-16">

		<nav class="mb-6 flex items-center gap-3 text-sm">

			<a href="/" class="text-white/80 hover:text-white">
				Beranda
			</a>

			<span class="text-white/40">/</span>

			<span class="text-white/80">
				Tentang BPHN
			</span>

			<span class="text-white/40">/</span>

			<span class="font-semibold text-[#F7C948]">
				Profil Pejabat
			</span>

		</nav>

		<h1
			class="max-w-3xl text-5xl font-bold leading-tight text-white"
		>
			Profil Pejabat
		</h1>

		<p
			class="mt-5 max-w-2xl text-lg leading-8 text-white/85"
		>
			Kenali jajaran pimpinan Badan Pembinaan Hukum Nasional
			yang berperan dalam mendukung pembangunan hukum nasional.
		</p>

	</Container>

</section>
