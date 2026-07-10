<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<div
	class="inline-flex items-center rounded-xl bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
>
	{text}
</div>
