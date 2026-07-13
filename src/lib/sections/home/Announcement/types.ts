export interface AnnouncementCategory {
	id: number;
	name: string;
}

export interface AnnouncementItem {
	id: number;
	title: string;
	description: string;
	image: string;
	date: string;
	category: string;
}
