import { redirect } from '@sveltejs/kit';

export function load() {
	const redirectURL =
		'https://app2.thexplace.ai/events/01J607C17N9WGEHXHHFC1PEJFJ/about?vipcode=Kokomo';
	throw redirect(302, redirectURL); // needs `throw` in v1
}
