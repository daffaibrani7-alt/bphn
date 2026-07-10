<script lang="ts">
	import HeroBadge from './HeroBadge.svelte';

	interface Hero {
		slug: string;
		title: string;
		description: string;
	}

	interface Props {
		hero: Hero;
	}

	let { hero }: Props = $props();
</script>


<div class="max-w-2xl text-white">

	<HeroBadge />


	<h1 class="mt-3 text-3xl font-bold leading-snug lg:text-4xl">
		{hero.title}
	</h1>


	<p class="mt-3 max-w-lg text-sm leading-6 text-white/85">
		{hero.description}
	</p>


	<div class="mt-5 flex gap-3">


		<a
			href={`/berita/${hero.slug}`}
			class="rounded-xl bg-[#21409A] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#17327d]"
		>
			Baca Selengkapnya
		</a>


		<a
			href="/berita"
			class="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
		>
			Semua Berita
		</a>


	</div>


</div>
