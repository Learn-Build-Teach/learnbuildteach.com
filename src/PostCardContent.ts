//This is a static mock for the posts data. TODO: Render posts from DB and delete this file after.

import type { Post } from './types/post';

export const postCardContent: Post[] = [
	{
		imageUrl: '/images/post-thumb-1.png',
		title: 'Build a Next.js app with a visual headless CMS',
		pubDate: 'August 28, 2023',
		link: '/'
	},
	{
		imageUrl: '/images/post-thumb-2.png',
		title: 'Customize mac terminal',
		pubDate: 'August 28, 2023',
		link: '/'
	},
	{
		imageUrl: '/images/post-thumb-3.png',
		title: 'Collaboration on GitHub: a Practical Intro',
		pubDate: 'August 28, 2023',
		link: '/'
	},
];
