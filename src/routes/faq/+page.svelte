<script lang="ts">
	import { Navbar, Footer } from '$lib/components/layout';

	import {
		Hero,
		Categories,
		FAQAccordion,
		ContactCTA
	} from '$lib/sections/faq';
</script>

<Navbar />

<main>

	<Hero />

	<Categories />

	<section class="bg-[#FAFAFA] py-16">

		<div class="mx-auto max-w-5xl px-6">

			<FAQAccordion />

		</div>

	</section>

	<ContactCTA />

</main>

<Footer />
