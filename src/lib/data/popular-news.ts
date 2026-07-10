export interface PopularNews {
	id: number;
	title: string;
	image: string;
	date: string;
	rank: number;
}

export const popularNews: PopularNews[] = [
	{
		id: 1,
		title: 'Menteri Hukum Beberkan Kinerja Positif Kemenkum di Semester I Tahun 2026',
		image: '/images/news/popular-1.jpg',
		date: '14 Juli 2026',
		rank: 1
	},
	{
		id: 2,
		title: 'UU PRT Disahkan, Bukti Komitmen Perlindungan Pekerja',
		image: '/images/news/popular-2.jpg',
		date: '24 Juni 2026',
		rank: 2
	},
	{
		id: 3,
		title: 'Perluas Akses Keadilan Hingga Desa',
		image: '/images/news/popular-3.jpg',
		date: '10 Juli 2026',
		rank: 3
	},
	{
		id: 4,
		title: 'Audiensi BPHN dan Justicia Bahas Penguatan Kompetensi Aparatur',
		image: '/images/news/popular-4.jpg',
		date: '20 Maret 2026',
		rank: 4
	},
	{
		id: 5,
		title: 'Pelatihan JDIHN Tingkat Nasional',
		image: '/images/news/popular-5.jpg',
		date: '21 April 2026',
		rank: 5
	}
];
