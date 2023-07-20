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

		//we need to have every .md file under posts/title-of-post/+page.md
		//so a file like posts/some-post.md isn't be valid
		if (parts.length < 7 || (md && '+' !== md.at(0))) {
			break;
		}

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			posts.push({ ...metadata, slug });
		}
	}

	return {
		posts
	};
};
