import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AboutPageHero as Hero } from '@/components/Hero';
import { Values } from '@/components';
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
    <main className="pt-[7.5rem]">
      <Hero />
      <Values />
      <div className="h-100 bg-black">adfadsfasfsadf</div>
    </main>
  );
}
