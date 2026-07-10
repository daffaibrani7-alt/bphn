<script lang="ts">
	interface Props {
		title: string;
		icon: string;
		href?: string;
	}

	let {
		title,
		icon,
		href = '#'
	}: Props = $props();
</script>

<a
	href={href}
	class="group flex flex-col items-center justify-start rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
>
	<div
		class="flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF4FF] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
	>
		<img
			src={icon}
			alt={title}
			class="h-10 w-10 object-contain"
			loading="lazy"
		/>
	</div>

	<h3
		class="mt-4 text-center text-[15px] font-semibold leading-6 text-[#1E293B]"
	>
		{title}
	</h3>
</a>
