export interface Official {
	id: number;
	name: string;
	position: string;
	image: string;
	biography: string;
	category: 'structural' | 'functional';
}
