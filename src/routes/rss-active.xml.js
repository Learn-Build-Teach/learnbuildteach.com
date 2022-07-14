import { getRecentShares } from '$lib/helpers/apiClient';
export async function get() {
  const content = await getRecentShares(50);
  const body = xml(content)

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body,
  }
}

const website = "https://www.learnbuildteach.com"

const xml = posts => 
`<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Learn Build Teach</title>
    <link>${website}</link>
    <description>Learn Build Teach</description>
    ${posts
      .map(
        post =>
          `
        <item>
          <title>${post.title} by ${post.discordUser}</title>
          <description>${post.description}</description>
          <author>${post.discordUser}</author>
          <link>${post.link}/</link>
          <pubDate>${new Date(post.createdAt)}</pubDate>
        </item>
      `
      )
      .join('').replace(/&(?!#?[a-z0-9]+;)/g, '&amp;')}
  </channel>
</rss>`
