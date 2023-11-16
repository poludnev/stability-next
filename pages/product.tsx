import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ProductPageHero as Hero } from '@/components/Hero';
import { Blog, CTABox, Features } from '@/components';
import { fetchMediumBlogFeed } from '@/utils';
import { TParsedRssFeed } from '@/types';

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

export default function ProductPage({
  blogRssFeed,
}: {
  blogRssFeed: TParsedRssFeed;
}): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main>
      <Hero />
      <Features />
      <CTABox />
      <Blog blogRssFeed={blogRssFeed} />
    </main>
  );
}
