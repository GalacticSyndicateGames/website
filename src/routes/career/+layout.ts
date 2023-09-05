import type { LayoutLoad } from './$types';
import type { JobDescription } from '$lib/types';

export const load: LayoutLoad = () => {
	return {
		jobs: [
			{
				title: 'DevOps + Infra Engineer',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				slug: 'devops-infra'
			},
			{
				title: 'Frontend Engineer',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				slug: 'frontend'
			},
			{
				title: 'Senior Software Engineer',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				slug: 'senior-swe'
			}
		] as Array<JobDescription>
	};
};
