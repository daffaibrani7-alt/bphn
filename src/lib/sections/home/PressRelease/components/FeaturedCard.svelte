<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';

	interface Props {
		article: {
			slug: string;
			title: string;
			image: string;
			date: string;
		};
	}

	let { article }: Props = $props();
</script>

<a
	href={`/berita/${article.slug}`}
	class="group relative block h-[340px] overflow-hidden rounded-[24px]"
>

	<img
		src={article.image}
		alt={article.title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
	/>

	<div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

	<div class="absolute left-5 top-5 flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white backdrop-blur">

		<CalendarDays class="h-4 w-4"/>

		<span class="text-sm font-medium">
			{article.date}
		</span>

	</div>

	<div class="absolute bottom-6 left-6 right-6">

		<h3 class="line-clamp-3 text-[26px] font-bold leading-tight text-white">
			{article.title}
		</h3>

	</div>

</a>
