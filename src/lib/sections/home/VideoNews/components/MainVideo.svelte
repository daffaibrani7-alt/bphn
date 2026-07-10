<script lang="ts">
	import Play from '@lucide/svelte/icons/play';

	const video = {
		title:'Menteri Hukum dan HAM Resmikan Posbankum Baru di Sumatera Utara',
		image:'/images/video/video-1.jpg',
		duration:'14:45'
	};
</script>

<div class="group relative h-[560px] overflow-hidden rounded-[28px] cursor-pointer">

	<img
		src={video.image}
		alt={video.title}
		class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
	/>

	<div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

	<div
		class="absolute right-6 top-6 rounded-xl bg-black/40 px-4 py-2 text-white backdrop-blur"
	>
		{video.duration}
	</div>

	<div
		class="absolute inset-0 flex items-center justify-center"
	>
		<div
			class="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:scale-110"
		>
			<Play class="ml-1 h-10 w-10 fill-white text-white"/>
		</div>
	</div>

	<div class="absolute bottom-8 left-8 right-8">

		<h2 class="text-4xl font-bold text-white">
			{video.title}
		</h2>

	</div>

</div>
