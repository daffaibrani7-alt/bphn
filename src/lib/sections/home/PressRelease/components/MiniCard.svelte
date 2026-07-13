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
	class="group relative block h-[180px] overflow-hidden rounded-[20px]"
>

	<img
		src={article.image}
		alt={article.title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
	/>

	<div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

	<div
		class="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-white backdrop-blur"
	>
		<CalendarDays class="h-4 w-4" />

		<span class="text-xs font-medium">
			{article.date}
		</span>
	</div>

	<div class="absolute bottom-4 left-4 right-4">

		<h3 class="line-clamp-2 text-base font-semibold leading-6 text-white">
			{article.title}
		</h3>

	</div>

</a>
