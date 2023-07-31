import type { Post } from '$lib/types';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async () => {
	const posts: Post[] = [];

	const paths = import.meta.glob('/src/routes/blog/posts/**/*.md', {
		eager: true
	});

	for (const path in paths) {
		const file = paths[path];

		const parts = path.split('/');

		//src/blog/posts/titleOfPost/+page.md
		//              ^^^^^^^^^^^^
		const titleSlug = parts[parts.length - 2];

		//src/blog/posts/titleOfPost/+page.md
		//                           ^^^^^^^^
		const mdFile = parts[parts.length - 1];

		if (parts.length < 7 || (mdFile && '+' !== mdFile.at(0))) break;

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			if (metadata && metadata.published) {
				posts.push({
					...metadata,
					slug: titleSlug
				});
			}
		}
	}

	return {
		posts
	};
};
