export interface ShortNews {
	id: number;
	title: string;
	image: string;
	duration: string;
	video: string;
}

export const shortNews: ShortNews[] = [
	{
		id: 1,
		title: 'PNPB Naik, Kinerja Meningkat',
		image: '/images/news/news-1.jpg',
		duration: '2:03',
		video: '/videos/video-1.mp4'
	},
	{
		id: 2,
		title: 'UU PRT Disahkan',
		image: '/images/news/news-2.jpg',
		duration: '0:30',
		video: '/videos/video-2.mp4'
	},
	{
		id: 3,
		title: 'Kementerian Hukum Resmikan 1.585 Posbankum',
		image: '/images/news/news-3.jpg',
		duration: '1:42',
		video: '/videos/video-3.mp4'
	},
	{
		id: 4,
		title: 'Perluas Akses Keadilan',
		image: '/images/news/news-4.jpg',
		duration: '1:28',
		video: '/videos/video-4.mp4'
	},
	{
		id: 5,
		title: 'Validasi Sanggah IRH',
		image: '/images/news/news-5.jpg',
		duration: '0:45',
		video: '/videos/video-5.mp4'
	},
	{
		id: 6,
		title: 'Peringati Harganas 2026',
		image: '/images/news/news-6.jpg',
		duration: '1:45',
		video: '/videos/video-6.mp4'
	}
,
...Array.from({length:12}, (_,i)=>({id:i+7,title:`Berita Pendek `,image:`/images/news/news-1.jpg`,duration:"1:00",video:""}))
];
