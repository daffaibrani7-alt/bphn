<script lang="ts">
	import { page } from '$app/state';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { navigation } from '$lib/constants/navigation';

	const isActive = (item: (typeof navigation)[number]) => {
		if (item.href) {
			return page.url.pathname === item.href;
		}

		if (item.children?.length) {
			return item.children.some((child) =>
				page.url.pathname.startsWith(child.href)
			);
		}

		return false;
	};
</script>

<nav class="hidden items-center gap-8 lg:flex">
	{#each navigation as item}
		{#if item.children?.length}
			<div class="group relative">
				<button
					class={`flex items-center gap-2 border-b-2 py-7 text-[15px] font-semibold transition-all duration-200 ${
						isActive(item)
							? 'border-[#2149A8] text-white'
							: 'border-transparent text-white hover:border-white hover:text-white'
					}`}
				>
					{item.title} ({item.children?.length ?? 0})
					<ChevronDown size={16} />
				</button>

				<div
					class="invisible absolute left-0 top-full z-[9999] mt-2 w-64 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
				>
					{#each item.children as child}
						<a
							href={child.href}
							class="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
						>
							{child.title}
						</a>
					{/each}
				</div>
			</div>
		{:else if item.href}
			<a
				href={item.href}
				class={`border-b-2 py-7 text-[15px] font-semibold transition-all duration-200 ${
					isActive(item)
						? 'border-[#2149A8] text-white'
						: 'border-transparent text-white hover:border-white hover:text-white'
				}`}
			>
				{item.title}
			</a>
		{:else}
			<button
				class="border-b-2 border-transparent py-7 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white hover:text-white"
			>
				{item.title}
			</button>
		{/if}
	{/each}
</nav>
