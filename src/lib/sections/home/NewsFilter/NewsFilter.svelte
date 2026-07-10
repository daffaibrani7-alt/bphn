<script lang="ts">
	import NewsTabs from './NewsTabs.svelte';
	import NewsSearch from './NewsSearch.svelte';

	let {
		active = $bindable(0)
	} = $props();
</script>

<section class="border-b py-6">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
		<NewsTabs bind:active />

		<NewsSearch />
	</div>
</section>
