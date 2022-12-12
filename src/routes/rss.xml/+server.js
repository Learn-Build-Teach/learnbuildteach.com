import { json } from '@sveltejs/kit';
import { loadAdminShares } from '$stores/sharesStore';

export async function GET() {
	const content = await loadAdminShares();
	const body = xml(content);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return json(body, {
		headers: headers
	});
}

const website = 'https://learnbuildteach.com/';

const xml = (posts) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
    <atom:link href="${website}/rss.xml" rel="self" type="application/rss+xml" />
    <title>Learn Build Teach</title>
    <link>${website}</link>
    <description>Learn Build Teach Discord Community</description>
    ${posts
			.map(
				(post) =>
					`
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${post.link}/</link>
          <guid>${post.link}</guid>

        </item>
      `
			)
			.join('')
			.replace(/&(?!#?[a-z0-9]+;)/g, '&amp;')}
  </channel>
</rss>`;
