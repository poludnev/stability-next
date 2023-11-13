import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ProductPageHero as Hero } from '@/components/Hero';
import { CTABox } from '@/components';
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
      <div className="min-h-[50rem] bg-indigo-50"></div>
      <CTABox />
    </main>
  );
}
