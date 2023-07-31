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

		//src/blog/posts/title-of-post/+page.md
		//               ^^^^^^^^^^^^^
		const slug = parts[parts.length - 2];

		//should be +page.md
		const md = parts[parts.length - 1];

		//valid:   posts/title-of-post/+page.md
		//invalid: posts/title-of-post.md
		if (parts.length < 7 || (md && '+' !== md.at(0))) {
			break;
		}

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			if (metadata.published) {
				posts.push({ ...metadata, slug });
			}
		}
	}

	return {
		posts
	};
};
