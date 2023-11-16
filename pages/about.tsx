import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Blog, CTABox, FAQ, Team, Values, AboutPageHero as Hero } from '@/components';
import { TParsedRssFeed } from '@/types';
import { fetchMediumBlogFeed } from '@/utils';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      test: 'test',
      blogRssFeed: await fetchMediumBlogFeed(),
    },
    revalidate: 1800,
  };
};

export default function AboutPage({
  blogRssFeed,
}: {
  blogRssFeed: TParsedRssFeed;
}): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main className="pt-[7.5rem]">
      <Hero />
      <Values />
      <Team />
      <FAQ />
      <Blog blogRssFeed={blogRssFeed} />
      <CTABox />
    </main>
  );
}
