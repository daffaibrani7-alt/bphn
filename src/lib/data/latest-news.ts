export interface LatestNews {
	id: number;
	title: string;
	image: string;
	date: string;
	excerpt: string;
}

export const latestNews: LatestNews[] = [
	{
		id: 1,
		title: 'Raih Sertifikat WBBM, Kepala BPHN Apresiasi Kinerja Diiringi Penghargaan Pegawai Terbaik',
		image: '/images/news/latest-1.jpg',
		date: '18 Juli 2026',
		excerpt:
			'BPHN menyampaikan apresiasi kepada seluruh jajaran atas capaian reformasi birokrasi yang telah diraih.'
	},
	{
		id: 2,
		title: 'Peringati Harganas 2026',
		image: '/images/news/latest-2.jpg',
		date: '18 Juli 2026',
		excerpt: ''
	},
	{
		id: 3,
		title: 'Lantik Dua Pejabat Fungsional',
		image: '/images/news/latest-3.jpg',
		date: '17 Juli 2026',
		excerpt: ''
	},
	{
		id: 4,
		title: 'Evaluasi Pelayanan Publik',
		image: '/images/news/latest-4.jpg',
		date: '16 Juli 2026',
		excerpt: ''
	}
];
