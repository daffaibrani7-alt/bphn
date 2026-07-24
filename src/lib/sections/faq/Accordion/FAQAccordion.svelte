<script lang="ts">
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { faqData } from '../data';

	let open = $state(2);

	function toggle(id: number) {
		open = open === id ? 0 : id;
	}
</script>

<section>

	<h2 class="mb-8 text-5xl font-bold text-slate-800">
		{faqData.length} Pertanyaan
	</h2>

	<div class="space-y-5">

		{#each faqData as item}

			<div
				class={`overflow-hidden rounded-2xl border transition-all duration-300 ${
					open === item.id
						? 'border-[#2149A8] bg-[#2149A8]'
						: 'border-[#E8EDF7] bg-[#F5F7FC]'
				}`}
			>

				<button
					onclick={() => toggle(item.id)}
					class="flex w-full items-center justify-between px-8 py-6 text-left"
				>

					<h3
						class={`text-lg font-semibold ${
							open === item.id
								? 'text-white'
								: 'text-slate-800'
						}`}
					>
						{item.question}
					</h3>

					{#if open === item.id}
						<ChevronDown
							size={22}
							class="text-white"
						/>
					{:else}
						<ChevronRight
							size={22}
							class="text-slate-500"
						/>
					{/if}

				</button>

				{#if open === item.id}

					<div class="px-8 pb-8">

						<div
							class="rounded-xl bg-white/10 p-6 leading-8 text-white"
						>
							{item.answer}
						</div>

					</div>

				{/if}

			</div>

		{/each}

	</div>

</section>
