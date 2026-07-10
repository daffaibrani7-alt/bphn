<script lang="ts">
	interface Props {
		image: string;
	}

	let { image }: Props = $props();
</script>

<img
	src={image}
	alt=""
	class="h-[760px] w-full object-cover"
/>
