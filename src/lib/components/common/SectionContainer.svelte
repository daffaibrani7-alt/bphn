<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let {
		class: className = '',
		children
	}: Props = $props();
</script>

<section class={`mx-auto max-w-[1280px] px-6 lg:px-8 ${className}`}>
	{@render children?.()}
</section>
