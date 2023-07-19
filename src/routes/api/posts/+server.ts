import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function GET() {
	const posts = await getPosts();

	return json(posts);
}

async function getPosts() {
	let posts: Post[] = [];

	const filePaths = import.meta.glob('/src/posts/*.md', {
		eager: true
	});

	for (let path in filePaths) {
		const file = filePaths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		console.log(path, file);
		if (file && slug && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;

			if (metadata.published) {
				posts.push({
					...metadata,
					slug
				});
			}
		}

		return posts.sort((f, s) => {
			return new Date(s.date).getTime() - new Date(f.date).getTime();
		});
	}
}
