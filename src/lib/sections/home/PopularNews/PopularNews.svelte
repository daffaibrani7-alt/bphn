<script lang="ts">
	import SectionHeader from './components/SectionHeader.svelte';
	import FeaturedCard from './components/FeaturedCard.svelte';
	import PopularCard from './components/PopularCard.svelte';

	const cards = [
		{
			title:'Setelah 22 Tahun Lebih, UU PRT Disahkan',
                          slug:'setelah-22-tahun-lebih-uu-prt-disahkan',
			image:'/images/news/popular-2.jpg',
			date:'24 Juni 2026',
			rank:2
		},
		{
			title:'Perluas Akses Keadilan Hingga Desa',
                          slug:'perluas-akses-keadilan-hingga-desa',
			image:'/images/news/popular-3.jpg',
			date:'18 Juli 2026',
			rank:3
		},
		{
			title:'Audiensi BPHN dan Justicia',
                          slug:'audiensi-bphn-dan-justicia',
			image:'/images/news/popular-4.jpg',
			date:'20 Maret 2026',
			rank:4
		},
		{
			title:'Pelatihan JDIHN Nasional',
                          slug:'pelatihan-jdihn-nasional',
			image:'/images/news/popular-5.jpg',
			date:'21 April 2026',
			rank:5
		}
	];
</script>

<section class="py-20">

<div class="mx-auto max-w-[1280px] rounded-[36px] bg-[#1f1f1f] p-10">

	<SectionHeader/>

	<div class="grid grid-cols-[1.2fr_1fr] gap-8">

		<FeaturedCard/>

		<div class="grid grid-cols-2 gap-6">

			{#each cards as card}

				<PopularCard {...card}/>

			{/each}

		</div>

	</div>

</div>

</section>
