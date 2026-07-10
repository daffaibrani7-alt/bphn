<script lang="ts">
	interface Props {
		image: string;
		alt?: string;
	}

	let { image, alt = '' }: Props = $props();
</script>

<div class="overflow-hidden rounded-[28px]">

	<img
		src={image}
		alt={alt}
		class="h-full w-full object-cover transition duration-700 hover:scale-105"
	/>

</div>
