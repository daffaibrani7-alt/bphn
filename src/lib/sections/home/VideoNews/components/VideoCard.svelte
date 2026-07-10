<script lang="ts">
	import Play from '@lucide/svelte/icons/play';

	interface Props{
		title:string;
		image:string;
		duration:string;
	}

	let {title,image,duration}:Props=$props();
</script>

<button class="group">

	<div class="relative overflow-hidden rounded-2xl">

		<img
			src={image}
			alt={title}
			class="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
		/>

		<div class="absolute inset-0 bg-black/20"></div>

		<div class="absolute inset-0 flex items-center justify-center">

			<div class="rounded-full bg-white/20 p-3 backdrop-blur">

				<Play class="ml-0.5 h-5 w-5 fill-white text-white"/>

			</div>

		</div>

		<div class="absolute right-2 top-2 rounded-lg bg-black/40 px-2 py-1 text-xs text-white backdrop-blur">

			{duration}

		</div>

	</div>

	<h3 class="mt-3 line-clamp-2 text-left font-medium">
		{title}
	</h3>

</button>
