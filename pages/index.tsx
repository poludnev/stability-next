import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { HomePageHero as Hero } from '@/components/Hero';
import { Blog, CTABox } from '@/components';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      test: 'test',
    },
  };
};

export default function HomePage(): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main className="pt-[7.5rem]">
      <Hero />
      <div className="min-h-[10rem] bg-indigo-50"></div>
      <CTABox />
      <Blog />
    </main>
  );
}
