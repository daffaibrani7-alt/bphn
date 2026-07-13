<script lang="ts">
	import SectionContainer from '$lib/components/common/SectionContainer.svelte';
	import CategorySidebar from './components/CategorySidebar.svelte';
	import AnnouncementGrid from './components/AnnouncementGrid.svelte';
</script>

<SectionContainer class="py-12">

	<div class="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">

		<CategorySidebar />

		<AnnouncementGrid />

	</div>

</SectionContainer>
