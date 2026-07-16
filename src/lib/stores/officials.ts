import { writable } from 'svelte/store';

export type OfficialCategory = 'structural' | 'functional';

export const activeCategory = writable<OfficialCategory>('structural');
