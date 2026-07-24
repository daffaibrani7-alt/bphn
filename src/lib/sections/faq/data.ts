export type FAQItem = {
	id: number;
	category: string;
	question: string;
	answer: string;
};

export const faqData: FAQItem[] = [
	{
		id: 1,
		category: 'Dokumentasi',
		question:
			'Bagaimana pengajuan perhitungan kebutuhan Jabatan Fungsional Analis Hukum (formasi)?',
		answer:
			'Pengajuan perhitungan kebutuhan Jabatan Fungsional Analis Hukum dilakukan sesuai ketentuan yang berlaku melalui instansi pembina.'
	},
	{
		id: 2,
		category: 'Dokumentasi',
		question:
			'Saya adalah seorang Mahasiswa. Bagaimana prosedur pengajuan kegiatan magang di Badan Pembinaan Hukum Nasional?',
		answer:
			'Badan Pembinaan Hukum Nasional Kementerian Hukum terbuka dan menyambut baik kebutuhan mahasiswa dari seluruh jurusan untuk melaksanakan kegiatan magang. Untuk prosedur pengajuan, silakan menghubungi Bagian SDM dan Organisasi atau datang langsung ke kantor BPHN.'
	},
	{
		id: 3,
		category: 'Dokumentasi',
		question:
			'Apakah layanan pada Badan Pembinaan Hukum Nasional dipungut biaya?',
		answer:
			'Tidak. Layanan BPHN pada prinsipnya tidak dipungut biaya sesuai ketentuan yang berlaku.'
	},
	{
		id: 4,
		category: 'Dokumentasi',
		question:
			'Apakah seseorang yang telah diangkat menjadi Analis Hukum wajib mengikuti Diklat?',
		answer:
			'Ya. Ketentuan mengikuti diklat menyesuaikan peraturan jabatan fungsional yang berlaku.'
	},
	{
		id: 5,
		category: 'Dokumentasi',
		question:
			'Apa saja kewajiban instansi pembina JF AH?',
		answer:
			'Instansi pembina memiliki kewajiban melakukan pembinaan, monitoring, evaluasi, dan pengembangan jabatan fungsional.'
	},
	{
		id: 6,
		category: 'Dokumentasi',
		question:
			'Bagaimana cara meminta bantuan hukum gratis?',
		answer:
			'Permohonan bantuan hukum dapat diajukan melalui Organisasi Bantuan Hukum yang telah terakreditasi.'
	}
];
