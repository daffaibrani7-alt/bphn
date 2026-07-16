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

	<section class="py-20">
		<div class="mx-auto flex max-w-7xl gap-12 px-6">
			<Sidebar />

			<div class="flex-1">
				<OfficialGrid />
			</div>
		</div>
	</section>
</main>

<Footer />
