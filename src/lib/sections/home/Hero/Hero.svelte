<script lang="ts">
	import HeroImage from './HeroImage.svelte';
	import HeroOverlay from './HeroOverlay.svelte';
	import HeroContent from './HeroContent.svelte';
	import HeroControls from './HeroControls.svelte';
	import HeroPagination from './HeroPagination.svelte';

	import { heroSlides } from '$lib/data/home/hero';

	let current = 0;

	const hero = heroSlides[current];
</script>

<section class="relative h-[440px] lg:h-[480px] xl:h-[520px] overflow-hidden">

	<HeroImage image={hero.image} />

	<HeroOverlay />

	<div class="absolute inset-0 z-20">

		<div class="mx-auto flex h-full max-w-7xl items-start pt-24 lg:pt-28 px-6">

			<HeroContent {hero} />

		</div>

	</div>

	<HeroControls />

	<HeroPagination />

</section>
