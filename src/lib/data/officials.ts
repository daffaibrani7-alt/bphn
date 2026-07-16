import type { Official } from '$lib/types/official';

export const officials: Official[] = [
	{
		id: 1,
		name: 'Min Usihen',
		position: 'Kepala Badan Pembinaan Hukum Nasional',
		image: '/images/officials/min-usihen.png',
		category: 'structural',
		biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`
	},
	{
		id: 2,
		name: 'Mohamad Aliamsyah',
		position: 'Sekretaris Badan Pembinaan Hukum Nasional',
		image: '/images/officials/mohamad-aliamsyah.png',
		category: 'structural',
		biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
	},
	{
		id: 3,
		name: 'Alfan Faiz Muhlizi',
		position: 'Kepala Pusat Analisis dan Evaluasi Hukum',
		image: '/images/officials/alfan-faiz.png',
		category: 'structural',
		biography: `Lorem ipsum dolor sit amet.`
	}
,
	{
		id: 99,
		name: 'Contoh Pejabat',
		position: 'Penyuluh Hukum Ahli Utama',
		image: '/images/officials/contoh.png',
		category: 'functional',
		biography: 'Lorem ipsum dolor sit amet.'
	}
];
