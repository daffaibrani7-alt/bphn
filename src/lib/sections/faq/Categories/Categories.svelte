<script lang="ts">
	import CircleHelp from '@lucide/svelte/icons/circle-help';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Users from '@lucide/svelte/icons/users';
	import Scale from '@lucide/svelte/icons/scale';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Library from '@lucide/svelte/icons/library';
	import Headphones from '@lucide/svelte/icons/headphones';
	import FileText from '@lucide/svelte/icons/file-text';

	const categories = [
		{ title: 'Umum', icon: CircleHelp },
		{ title: 'Tentang BPHN', icon: Building2 },
		{ title: 'Penyuluh Hukum', icon: Users },
		{ title: 'Analisis Hukum', icon: Scale },
		{ title: 'Angka Kredit', icon: BadgeCheck },
		{ title: 'Konsultasi Hukum', icon: MessageSquare },
		{
			title: 'Dokumentasi & Perpustakaan',
			icon: Library,
			active: true
		},
		{
			title: 'Layanan & Informasi Publik',
			icon: Headphones
		},
		{
			title: 'Bantuan Hukum',
			icon: FileText
		}
	];
</script>

<section class="-mt-24 relative z-20">

	<div class="mx-auto max-w-7xl px-6">

		<div class="rounded-[36px] bg-white p-8 shadow-2xl">

			<div class="grid gap-5 md:grid-cols-3 xl:grid-cols-5">

				{#each categories as item}

					<button
						class={`group rounded-2xl border p-6 text-left transition-all duration-300 ${
							item.active
								? 'border-[#2149A8] bg-[#2149A8] text-white shadow-lg'
								: 'border-slate-200 bg-white hover:-translate-y-1 hover:border-[#2149A8] hover:shadow-lg'
						}`}
					>

						<div
							class={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
								item.active
									? 'bg-white/15'
									: 'bg-[#2149A8]/10 group-hover:bg-[#2149A8]'
							}`}
						>

							<svelte:component
								this={item.icon}
								size={26}
								class={item.active ? 'text-white' : 'text-[#2149A8] group-hover:text-white'}
							/>

						</div>

						<h3
							class={`font-semibold leading-6 ${
								item.active
									? 'text-white'
									: 'text-slate-800'
							}`}
						>
							{item.title}
						</h3>

					</button>

				{/each}

			</div>

		</div>

	</div>

</section>
