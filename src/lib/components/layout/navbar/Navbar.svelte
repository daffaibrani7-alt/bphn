<script lang="ts">
	import Container from '$lib/components/common/Container.svelte';
	import NavbarLogo from './NavbarLogo.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import NavbarActions from './NavbarActions.svelte';

	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 30;
		};

		onScroll();

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
		scrolled
			? 'bg-white/75 shadow-xl backdrop-blur-2xl backdrop-saturate-200 border-b border-slate-200/70'
			: 'bg-white/10 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/10'
	}`}
>
	<Container
		class={`flex items-center justify-between transition-all duration-500 ${
			scrolled ? 'h-16' : 'h-20'
		}`}
	>
		<NavbarLogo />
		<NavbarMenu />
		<NavbarActions />
	</Container>
</header>
