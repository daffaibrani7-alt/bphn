<script lang="ts">
	import { news } from '$lib/data/home/news';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
import Calendar from '@lucide/svelte/icons/calendar';
	import Share2 from '@lucide/svelte/icons/share-2';
import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
import { fade, slide } from 'svelte/transition';

	let { params } = $props();

	const article = news.find(
		(item) => item.slug === params.slug
	);

	const related = news.filter(
		(item) => item.slug !== params.slug
	);

	let showAllRelated = $state(false);
</script>


{#if article}

<div class="absolute left-0 top-0 z-50 w-full">
	<Navbar />
</div>

<section>


<!-- HERO DETAIL -->

<div class="relative h-[420px] overflow-hidden pt-[72px]">

	<img
		src={article.image}
		alt={article.title}
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<div class="absolute inset-0 bg-black/55"></div>


	<div class="relative mx-auto max-w-[1240px] px-6 pt-28 text-white">


		<div class="text-sm mb-8">
			Berita & Publikasi &gt; Berita
		</div>


		<div class="inline-flex items-center gap-2 rounded bg-white/15 px-4 py-2 backdrop-blur">
			<CalendarDays class="h-4 w-4"/>
			{article.date}
		</div>


		<h1
			class="mt-8 max-w-[1240px] text-[36px] font-semibold leading-[1.25]"
		>
			{article.title}
		</h1>


		<div class="mt-6 flex items-center justify-between">


			<div class="flex items-center gap-4">

				<div class="flex h-11 w-11 items-center justify-center rounded-full bg-white">
					<span class="text-xs text-black">
						B
					</span>
				</div>

				<span>
					{article.author}
				</span>

			</div>


			<button
				class="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur"
			>
				<Share2 class="h-5 w-5"/>
			</button>


		</div>


	</div>

</div>



<!-- CONTENT -->

<div
	class="mx-auto grid max-w-[1240px] grid-cols-[840px_363px] gap-10 px-6 py-16"
>


<article>


<img
	src={article.image}
	alt={article.title}
	class="h-[413px] w-full rounded-[15px] object-cover"
/>


<p
	class="mt-10 text-justify text-base leading-8 text-[#343131]"
>

	BPHN.GO.ID – Jakarta. {article.description}

	<br><br>

	Badan Pembinaan Hukum Nasional terus berkomitmen meningkatkan
	kualitas pelayanan hukum nasional melalui berbagai program,
	inovasi, dan penguatan sistem informasi hukum.

	<br><br>

	Pelaksanaan kegiatan ini menjadi bagian dari upaya mewujudkan
	pelayanan publik yang transparan, efektif, dan mudah diakses
	oleh masyarakat.

</p>


</article>



<!-- SIDEBAR -->


<aside class="sticky top-24">

        <div class="flex items-start justify-between">

                <div>
                        <h2 class="text-[24px] font-semibold text-[#343131]">
                                Berita Terkait
                        </h2>

                        <p class="mt-1 text-[#636363]">
                                Informasi lain yang mungkin anda sukai
                        </p>
                </div>

                <button
                        class="flex h-[41px] w-[41px] items-center justify-center rounded-xl bg-[#FFC800]"
                >
                        <RefreshCw class="h-5 w-5 text-black" />
                </button>

        </div>

        <a
                href={`/berita/${related[0].slug}`}
                class="group mt-8 block overflow-hidden rounded-[15px]"
        >

                <div class="relative h-[210px]">

                        <img
                                src={related[0].image}
                                alt={related[0].title}
                                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div class="absolute inset-0 bg-black/55"></div>

                        <div
                                class="absolute left-5 top-5 rounded bg-white/15 px-3 py-1 text-sm text-white backdrop-blur"
                        >
                                {related[0].date}
                        </div>

                        <h3
                                class="absolute bottom-5 left-5 right-5 text-[16px] font-semibold leading-6 text-white"
                        >
                                {related[0].title}
                        </h3>

                </div>

        </a>

        <div class="mt-6 space-y-6">

                {#each related.slice(1,3) as item}

                <a
                        href={`/berita/${item.slug}`}
                        class="group flex gap-4 items-start rounded-xl transition-all duration-300 hover:bg-neutral-50 p-2 -m-2"
                >

                        <img
                                src={item.image}
                                alt={item.title}
                                class="h-[104px] w-[125px] shrink-0 rounded-[15px] object-cover shadow-sm"
                        />

                        <div class="flex min-h-[104px] flex-1 flex-col">

                                <span class="text-[10px] font-medium text-[#F30000]">
                                        {item.date}
                              </span>

                                <h4 class="mt-2 line-clamp-3 text-[12px] font-semibold leading-[16px] text-[#343131] transition-colors group-hover:text-[#192F7B]">
                                        {item.title}
                                </h4>

                                <span class="mt-auto pt-2 text-[11px] font-medium text-[#192F7B]">
                                        Baca Selengkapnya →
                                </span>

                        </div>

                </a>

                
{/each}

{#if showAllRelated}

<div
        transition:slide={{ duration: 250 }}
        class="mt-6 space-y-6"
>

        {#each related.slice(3) as item}

        <a
                href={`/berita/${item.slug}`}
                class="group flex gap-4 items-start rounded-xl transition-all duration-300 hover:bg-neutral-50 p-2 -m-2"
        >

                <img
                        src={item.image}
                        alt={item.title}
                        class="h-[104px] w-[125px] shrink-0 rounded-[15px] object-cover shadow-sm"
                />

                <div class="flex min-h-[104px] flex-1 flex-col">

                        
<div class="flex items-center gap-1 text-[#F30000]">
        <Calendar class="h-3 w-3" />
        <span class="text-[10px] font-medium">
                {item.date}
        </span>
</div>


                        <h4 class="mt-2 line-clamp-3 text-[12px] font-semibold leading-[16px] text-[#343131] group-hover:text-[#192F7B]">
                                {item.title}
                        </h4>

                        <span class="mt-auto pt-2 text-[11px] font-medium text-[#192F7B]">
                                Baca Selengkapnya →
                        </span>

                </div>

        </a>

        {/each}

</div>

{/if}

</div>


        {#if related.length > 3}

        <button
                class="mt-8 flex w-full items-center justify-center gap-2 text-[#F30000] font-medium"
                onclick={() => showAllRelated = !showAllRelated}
        >
                {#if showAllRelated}
        <span class="flex items-center gap-2">
                <span class="rotate-180 text-lg">⌃</span>
                Tutup
        </span>
{:else}
        <span class="flex items-center gap-2">
                <span class="text-lg">⌃</span>
                Lihat Lebih
        </span>
{/if}
        </button>

        {/if}

</aside>



</div>


</section>

{/if}
