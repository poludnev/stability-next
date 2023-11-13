import { useTranslation } from 'next-i18next';
import { BlogElement } from './BlogElement';
import { useEffect, useState } from 'react';
import { rssJsonParser } from '@/utils';
import { TParsedRssFeed, TResourceList } from '@/types';

export const Blog = () => {
  const { t } = useTranslation();
  const [blogRssFeedData, setBlogRssFeedData] = useState<TParsedRssFeed>([]);

  const resources: TResourceList = t('resources.resourcesList', {
    returnObjects: true,
  });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_REACT_APP_MEDIUM_PATH !== undefined)
      fetch(process.env.NEXT_PUBLIC_REACT_APP_MEDIUM_PATH)
        .then((res) => res.text())
        .then((data) => {
          const rssFeedElements = rssJsonParser(data);
          setBlogRssFeedData(rssFeedElements);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <section className="px-[3.5rem] mb-32">
      <div className="max-w-[134.4rem] mx-auto">
        <header className="font-grotesk uppercase text-[3.2rem] font-medium text-center mb-16 md:text-start">
          {t('resources.header')}
        </header>
        <div className="space-y-12 md:flex md:flex-wrap md:space-y-0 md:space-x-6">
          {blogRssFeedData.length === 0 &&
            resources.map((resource, index) => (
              <BlogElement {...resource} key={resource.title + index} />
            ))}
          {blogRssFeedData.slice(0, 3).map((feed) => {
            return <BlogElement key={feed.link} {...feed}></BlogElement>;
          })}
        </div>
      </div>
    </section>
  );
};
