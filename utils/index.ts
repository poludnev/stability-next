import { TParsedRssFeed } from '@/types';

export const rssJsonParser = (data: string): TParsedRssFeed => {
  try {
    const parsedJson = JSON.parse(data) as {
      items: { title: string; pubDate: string; link: string; content: string }[];
    };

    const items: TParsedRssFeed = parsedJson.items.map(({ title, pubDate, link, content }) => {
      const parser = new DOMParser();
      const document = parser.parseFromString(content, 'text/html');

      const previewImageSrcUrl = document?.querySelector('figure')?.querySelector('img')?.src;

      const articleContent = document !== null ? document.querySelectorAll('p') : null;

      const text =
        articleContent !== null
          ? Array.from(articleContent)
              .slice(0, 2)
              .map((e) => e.textContent)
              .filter((e) => typeof e === 'string')
              .join(' ')
          : null;

      return {
        title,
        date: new Date(pubDate),
        imageUrl: previewImageSrcUrl !== undefined ? previewImageSrcUrl : null,
        text,
        link,
      };
    });
    return items;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return [];
  }
};

export const getFormattedDate = (date: Date | null) => {
  if (date === null) return 'unknown date';

  const localDateStringSplit = date
    .toLocaleDateString('us-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .split(' ');

  return `${localDateStringSplit[1]}. ${
    localDateStringSplit[0].length < 2 ? '0' + localDateStringSplit[0] : localDateStringSplit[0]
  }. ${localDateStringSplit[2]}`;
};
