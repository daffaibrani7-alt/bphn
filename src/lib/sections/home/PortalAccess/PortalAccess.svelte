<script lang="ts">
	import Container from '$lib/components/common/Container.svelte';
	import PortalItem from './PortalItem.svelte';
	import { portalItems } from './data';
</script>

<section class="relative z-30 -mt-16 pb-8">
	<Container>
		<div
			class="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.08)]"
		>
			<div class="px-10 pt-10 pb-4">
				<h2 class="text-center text-2xl font-bold text-slate-900 md:text-3xl">
					Portal Layanan
				</h2>

				<p class="mt-2 text-center text-sm text-slate-500">
					Akses cepat ke layanan digital Badan Pembinaan Hukum Nasional
				</p>
			</div>

			<div
				class="grid grid-cols-2 gap-y-10 px-10 pb-10 pt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
			>
				{#each portalItems as item}
					<PortalItem
						title={item.title}
						icon={item.icon}
						href={item.href}
					/>
				{/each}
			</div>
		</div>
	</Container>
</section>
