<script lang="ts">
	import { news } from '$lib/data/home/news';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';

	let activeCard = $state(0);
</script>

<section>

	<div class="mb-8 flex items-center gap-3">

		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5]">
			📌
		</div>

		<h2 class="text-[32px] font-semibold text-[#343131]">
			Highlights
		</h2>

	</div>

	<div class="flex h-[370px] gap-5">

		{#each news.slice(0,4) as item, index}

			<a
				href={`/berita/${item.slug}`}
				onmouseenter={() => activeCard = index}
				class="group relative overflow-hidden rounded-[18px] transition-all duration-500 ease-out"
				class:flex-[3.2]={activeCard === index}
				class:flex-1={activeCard !== index}
			>

				<img
					src={item.image}
					alt={item.title}
					class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
				/>

				<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

				<div
					class="absolute left-5 top-5 flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-white backdrop-blur"
				>
					<CalendarDays class="h-4 w-4" />

					<span class="text-sm">
						{item.date}
					</span>

				</div>

				<div class="absolute bottom-6 left-6 right-6">

					<h3
						class="font-semibold text-white transition-all duration-500"
						class:text-[28px]={activeCard === index}
						class:leading-[34px]={activeCard === index}
						class:text-[18px]={activeCard !== index}
						class:leading-[24px]={activeCard !== index}
					>
						{item.title}
					</h3>

				</div>

			</a>

		{/each}

	</div>

</section>
