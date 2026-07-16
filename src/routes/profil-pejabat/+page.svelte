<script lang="ts">
	import { Navbar, Footer } from '$lib/components/layout';

	import {
		Hero,
		Sidebar,
		OfficialGrid
	} from '$lib/sections/officials';
</script>

<Navbar />

<main>
	<Hero />

	<section class="bg-[#FAFAFA] py-14 lg:py-16">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">

			<div class="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">

				<aside>
					<Sidebar />
				</aside>

				<div>
					<OfficialGrid />
				</div>

			</div>

		</div>
	</section>
</main>

<Footer />
