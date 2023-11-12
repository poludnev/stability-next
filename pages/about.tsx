import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AboutPageHero as Hero } from '@/components/Hero';
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      test: 'test',
    },
  };
};
export default function AboutPage(): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <main>
      <Hero />
    </main>
  );
}
