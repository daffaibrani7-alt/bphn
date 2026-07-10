<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';

	const article = {
		title: 'Menteri Hukum Beberkan Kinerja Positif Kemenkum di Semester I Tahun 2026',
		image: '/images/news/popular-1.jpg',
		date: '14 Juli 2026',
		rank: 1
	};
</script>

<article
	class="group relative h-[700px] overflow-hidden rounded-[28px] cursor-pointer"
>

	<img
		src={article.image}
		alt={article.title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
	/>

	<div
		class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
	></div>

	<div
		class="absolute left-8 top-8 flex items-center gap-2 rounded-xl bg-white/20 px-5 py-3 text-white backdrop-blur"
	>
		<CalendarDays class="h-5 w-5"/>
		<span class="text-xl font-medium">{article.date}</span>
	</div>

	<div
		class="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-2xl font-bold text-black shadow-xl"
	>
		{article.rank}
	</div>

	<div class="absolute bottom-8 left-8 right-8">

		<h2 class="text-[54px] font-bold leading-tight text-white">
			{article.title}
		</h2>

	</div>

</article>
