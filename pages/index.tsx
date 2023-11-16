import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { HomePageHero as Hero, Leadership, Blog, CTABox, FAQ, Mission } from '@/components';
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

export default function HomePage({
  blogRssFeed,
}: {
  blogRssFeed: TParsedRssFeed;
}): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main className="pt-[7.5rem]">
      <Hero />
      <Mission />
      <Leadership />
      <CTABox />
      <FAQ />
      <Blog blogRssFeed={blogRssFeed} />
    </main>
  );
}
