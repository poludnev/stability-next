import { TParsedRssFeed } from '@/types';
import { parseFromString } from 'dom-parser';

export const fetchMediumBlogFeed = async (): Promise<TParsedRssFeed> => {
  try {
    if (!process.env.MEDIUM_PATH) throw new Error('empty medium blog path');
    const blogDataResponse = await fetch(process.env.MEDIUM_PATH);
    const blogData: {
      items: { title: string; pubDate: string; link: string; content: string }[];
    } = await blogDataResponse.json();

    const items = blogData.items.map(({ title, pubDate, link, content }) => {
      const dom = parseFromString(content);
      const firstParagraph = dom.getElementsByTagName('p')[0];
      const text = firstParagraph.textContent;

      const imageUrl = dom
        .getElementsByTagName('img')[0]
        .attributes.find((el) => el.name === 'src');

      return {
        title,
        date: pubDate,
        imageUrl: !!imageUrl ? imageUrl?.value : null,
        text,
        link,
      };
    });

    return items;
  } catch (error) {
    console.error('fetchMediumBlogFeed', error);
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
