import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ProductPageHero as Hero } from '@/components/Hero';
import { Blog, CTABox, Features } from '@/components';
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      test: 'test',
    },
  };
};
export default function ProductPage(): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main>
      <Hero />
      <Features />
      <CTABox />
      <Blog />
    </main>
  );
}
