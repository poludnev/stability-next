import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import cube from '@/public/images/cube-lev.svg';
export const CTABox = () => {
  const { t } = useTranslation();
  return (
    <section className="xs:px-[4.8rem] mb- mb-32 md:mb-40">
      <div
        className=" bg-primaryWaterBlue rounded-[2rem] overflow-hidden flex flex-wrap justify-center max-w-[134.4rem] mx-auto
    "
      >
        <div className="flex flex-wrap flex-auto items-center justify-center gap-8 bg-midnightDarkBlue rounded-[2rem] text-secondaryColorBeige px-[4rem] pt-[5.8rem] pb-[5.2rem] xl:justify-start lg:py-[3.8rem] ">
          <div
            className="flex  justify-center items-center flex-row flex-wrap md:space-x-12 space-y-8 md:space-y-0
          "
          >
            <div className="flex justify-center">
              <Image src={cube} alt="blue cube" />
            </div>
            <h2 className="font-grotesk font-bold text-[4.4rem] capitalize text-center">
              {t('ctaBox.heading')}
            </h2>
          </div>
          <p className="font-sans text-[1.6rem] text-center uppercase tracking-[0.16rem] leading-[2.2rem] flex items-center md:pt-[1rem]">
            {t('ctaBox.subHeading')}
          </p>
        </div>
        <div className="p-[2.7rem] flex items-center md:py-[4.2rem] md:px-[6.1rem]">
          <button className="btn mx-auto">{t('buttons.earlyAccess')}</button>
        </div>
      </div>
    </section>
  );
};
