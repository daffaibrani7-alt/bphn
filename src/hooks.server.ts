import { createServerClient } from '@supabase/ssr';
import { redirect, type Handle } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.safeGetSession = async () => {
		return { session: null, user: null };
	};

	if (!PUBLIC_SUPABASE_URL || !PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
		console.warn("⚠️ Peringatan: PUBLIC_SUPABASE_URL atau PUBLIC_SUPABASE_PUBLISHABLE_KEY tidak ditemukan di .env");
		return resolve(event);
	}

	event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_PUBLISHABLE_KEY,
		{
			cookies: {
				getAll: () => event.cookies.getAll(),
				setAll: (cookiesToSet) => {
					cookiesToSet.forEach(({ name, value, options }) => {
						event.cookies.set(name, value, { ...options, path: '/' });
					});
				}
			}
		}
	);

	event.locals.safeGetSession = async () => {
		const {
			data: { user },
			error
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			return { session: null, user: null };
		}
		const { data: { session } } = await event.locals.supabase.auth.getSession();
		return { session, user };
	};

	const { session } = await event.locals.safeGetSession();

	if (event.url.pathname.startsWith('/admin')) {
		if (!session && event.url.pathname !== '/admin/login') {
			throw redirect(303, '/admin/login');
		}
		
		if (session && event.url.pathname === '/admin/login') {
			throw redirect(303, '/admin/dashboard');
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
};
