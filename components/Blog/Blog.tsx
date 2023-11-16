import { useTranslation } from 'next-i18next';
import { BlogElement } from './BlogElement';
import { TParsedRssFeed, TResourceList } from '@/types';

export const Blog = ({
  blogRssFeed,
  postsLimit = 3,
}: {
  blogRssFeed: TParsedRssFeed;
  postsLimit?: number;
}) => {
  const { t } = useTranslation();

  const resources: TResourceList = t('resources.resourcesList', {
    returnObjects: true,
  });

  return (
    <section className="px-[3.5rem] mb-32">
      <div className="max-w-[134.4rem] mx-auto">
        <header className="font-grotesk uppercase text-[3.2rem] font-medium text-center mb-16 md:text-start">
          {t('resources.header')}
        </header>
        <div className="space-y-12 md:flex md:flex-wrap md:space-y-0 md:space-x-6">
          {(!blogRssFeed || blogRssFeed?.length === 0) &&
            resources.map((resource, index) => (
              <BlogElement {...resource} key={resource.title + index} />
            ))}
          {blogRssFeed?.slice(0, postsLimit).map((feed) => {
            return <BlogElement key={feed.link} {...feed}></BlogElement>;
          })}
        </div>
      </div>
    </section>
  );
};
