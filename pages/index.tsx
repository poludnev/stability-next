import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { HomePageHero as Hero, Leadership, Blog, CTABox, FAQ, Mission } from '@/components';

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
      <Mission />
      <Leadership />
      <CTABox />
      <FAQ />
      <Blog />
    </main>
  );
}
