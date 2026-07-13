<script lang="ts">
	import { Navbar, Footer } from '$lib/components/layout';

	import { Hero } from '$lib/sections/home/Hero';
import { PortalAccess } from '$lib/sections/home/PortalAccess';
import { PressRelease } from '$lib/sections/home/PressRelease';
	import { TopTicker } from '$lib/sections/home/TopTicker';
	import { NewsFilter } from '$lib/sections/home/NewsFilter';
	import { ShortNews } from '$lib/sections/home/ShortNews';
	import { LatestNews } from '$lib/sections/home/LatestNews';
	import { PopularNews } from '$lib/sections/home/PopularNews';
	import { VideoNews } from '$lib/sections/home/VideoNews';
import { Announcement } from '$lib/sections/home/Announcement';

	let activeTab = $state(0);
</script>

<Navbar />

<main>

	<TopTicker />
	<Hero />
        <PortalAccess />
	<NewsFilter bind:active={activeTab} />

        {#if activeTab === 0}
                <ShortNews />
                <LatestNews />
                <PopularNews />
                <VideoNews />
        {:else if activeTab === 1}
                <PressRelease />
        {:else if activeTab === 2}
                <section class="py-24 text-center">
                        <h2 class="text-3xl font-bold">Kegiatan</h2>
                </section>
        {:else}
                <Announcement />
        {/if}

</main>

<Footer />