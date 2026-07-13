<script lang="ts">
	import { announcements } from '../data';
	import AnnouncementCard from './AnnouncementCard.svelte';
	import Pagination from './Pagination.svelte';
</script>

<div class="space-y-8">

	<div class="flex justify-end">
		<div class="flex w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">

			<input
				type="search"
				placeholder="Search..."
				class="h-11 flex-1 px-4 outline-none"
			/>

			<button
				class="flex h-11 w-11 items-center justify-center bg-[#1F3A8A] text-white"
			>
				🔍
			</button>

		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

		{#each announcements as item}

			<AnnouncementCard id={item.id} />

		{/each}

	</div>

	<Pagination />

</div>
