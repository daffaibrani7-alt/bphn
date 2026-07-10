<script lang="ts">
	import logoKemenkum from '$lib/assets/logo/logo-kemenkum.svg';
	import logoBphn from '$lib/assets/logo/logo-bphn.svg';
</script>

<a href="/" class="flex items-center gap-3">
	<img
		src={logoKemenkum}
		alt="Kementerian Hukum"
		class="h-12 w-12 object-contain transition-transform duration-300 hover:scale-105"
	/>

	<div class="h-10 w-px bg-white/15"></div>

	<img
		src={logoBphn}
		alt="BPHN"
		class="h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
	/>
</a>
