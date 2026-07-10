<script lang="ts">
	import CalendarDays from '@lucide/svelte/icons/calendar-days';

	interface Props {
		title: string;
		image: string;
		date: string;
		rank: number;
		slug: string;
	}

	let { title, image, date, rank, slug }: Props = $props();
</script>

<a
	href={`/berita/${slug}`}
	class="group relative block h-[335px] overflow-hidden rounded-[24px] cursor-pointer"
>

	<img
		src={image}
		alt={title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
	/>

	<div
		class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
	></div>

	<div
		class="absolute left-5 top-5 flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-white backdrop-blur"
	>
		<CalendarDays class="h-4 w-4"/>
		<span class="font-medium">{date}</span>
	</div>

	<div
		class="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 font-bold text-black"
	>
		{rank}
	</div>

	<div class="absolute bottom-5 left-5 right-5">

		<h3 class="text-[20px] font-semibold leading-snug text-white line-clamp-3">
			{title}
		</h3>

	</div>

</a>
