export type NavChild = {
	title: string;
	href: string;
};

export type NavItem = {
	title: string;
	href?: string;
	children?: NavChild[];
};

export const navigation: NavItem[] = [
	{
		title: 'Beranda',
		href: '/'
	},
	{
		title: 'Layanan',
		children: []
	},
	{
		title: 'Informasi Publik',
		children: []
	},
	{
		title: 'Publikasi',
		children: [
			{
				title: 'Berita',
				href: '/berita'
			},
			{
				title: 'Siaran Pers',
				href: '/siaran-pers'
			},
			{
				title: 'Artikel',
				href: '/artikel'
			},
			{
				title: 'Galeri',
				href: '/galeri'
			},
			{
				title: 'Video',
				href: '/video'
			}
		]
	},
	{
		title: 'Tentang BPHN',
		children: [
			{
				title: 'Profil Pejabat',
				href: '/profil-pejabat'
			}
		]
	},
	{
		title: 'Reformasi Birokrasi',
		children: []
	},
	{
		title: 'Pengaduan',
		children: []
	}
];
