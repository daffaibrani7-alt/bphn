export interface VideoNews {
	id: number;
	title: string;
	image: string;
	duration: string;
}

export const videoNews: VideoNews[] = [
	{
		id: 1,
		title: 'Menteri Hukum dan HAM Resmikan Posbankum Baru di Sumatera Utara',
		image: '/images/video/video-1.jpg',
		duration: '14:45'
	},
	{
		id: 2,
		title: 'Sidang Paripurna DPR',
		image: '/images/video/video-2.jpg',
		duration: '0:45'
	},
	{
		id: 3,
		title: 'Mahkamah Agung Luncurkan Sistem',
		image: '/images/video/video-3.jpg',
		duration: '0:45'
	},
	{
		id: 4,
		title: 'Operasi Kepolisian Terpusat',
		image: '/images/video/video-4.jpg',
		duration: '0:45'
	},
	{
		id: 5,
		title: 'BPHN Luncurkan Aplikasi',
		image: '/images/video/video-5.jpg',
		duration: '0:45'
	}
];
