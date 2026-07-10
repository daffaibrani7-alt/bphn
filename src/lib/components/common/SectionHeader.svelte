<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subtitle?: string;
		action?: Snippet;
	}

	let {
		title,
		subtitle = '',
		action
	}: Props = $props();
</script>

<div class="mb-10 flex items-end justify-between">

	<div>

		<h2 class="text-4xl font-bold tracking-tight">
			{title}
		</h2>

		{#if subtitle}
			<p class="mt-2 text-zinc-500">
				{subtitle}
			</p>
		{/if}

	</div>

	{#if action}
		{@render action()}
	{/if}

</div>
