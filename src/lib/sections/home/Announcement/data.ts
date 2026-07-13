import type {
	AnnouncementCategory,
	AnnouncementItem
} from './types';

export const categories: AnnouncementCategory[] = [
	{ id: 1, name: 'Semua' },
	{ id: 2, name: 'Bantuan Hukum' },
	{ id: 3, name: 'Desa Sadar Hukum' },
	{ id: 4, name: 'JF Analis Hukum' },
	{ id: 5, name: 'JF Penyuluh Hukum' },
	{ id: 6, name: 'LDCC & JDIHN Award 2023' },
	{ id: 7, name: 'Peacemaker Justice Award' },
	{ id: 8, name: 'Pengaduan' },
	{ id: 9, name: 'Pengumuman Lelang' },
	{ id: 10, name: 'Posbankum' },
	{ id: 11, name: 'Program Magang' },
	{ id: 12, name: 'Standar Pelayanan & Pakta Integritas' },
	{ id: 13, name: 'Wiloka Legal Culture' }
];

export const announcements: AnnouncementItem[] = Array.from(
	{ length: 12 },
	(_, i) => ({
		id: i + 1,
		title: 'Aktualisasi Paralegal di Posbankum',
		description:
			'Paralegal diwajibkan melakukan scan QR Code sebagai bagian dari digitalisasi layanan bantuan hukum.',
		image: '/images/news/news-placeholder.jpg',
		date: '15 April 2026',
		category: 'Bantuan Hukum'
	})
);
