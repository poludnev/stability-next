import Image from 'next/image';
import { useIsMobile } from '@/hooks';
import { TExperienceCardList, TFeatureElementList, TStyledText } from '@/types';
import { useTranslation } from 'next-i18next';
import solidArrow from '@/public/icons/arrow-solid-right.svg';
import RestrictedAccessIconL from '@/public/icons/restricted-access.svg';
import RegulatoryRiskIcon from '@/public/icons/regulatory-risk.svg';
import LimitedCapacityIcon from '@/public/icons/limited-capacity.svg';
import PoorUxIcon from '@/public/icons/pure-ux.svg';

import OneclickOnboradIcon from '@/public/icons/oneclick-onboarding.svg';
import RegulatoryClearIcon from '@/public/icons/regulatory-clear.svg';
import OnchainInteractionsIcon from '@/public/icons/onchain-interactions.svg';
import EnterpriseIntegrationIcon from '@/public/icons/enterprise-integration.svg';
import { AdvantageCard, DisadvantageCard, ExperienceCard } from '..';

export const Features = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const heading = t(`productPage.features.publicDisadvantages.heading${isMobile ? 'Mobile' : ''}`, {
    returnObjects: true,
  }) as string | TStyledText[];

  const advantageHeading = t(
    `productPage.features.stabilityAdvantages.heading${isMobile ? 'Mobile' : ''}`,
    {
      returnObjects: true,
    },
  ) as string | TStyledText[];

  const disadvantageIconsMap = {
    restrictedAccess: RestrictedAccessIconL,
    regulatoryRisk: RegulatoryRiskIcon,
    limitedCapacity: LimitedCapacityIcon,
    poorUx: PoorUxIcon,
  };

  const advantageIconsMap = {
    oneclickOnboarding: OneclickOnboradIcon,
    regulatoryClear: RegulatoryClearIcon,
    onchainIntetactions: OnchainInteractionsIcon,
    enterpriseIntegrations: EnterpriseIntegrationIcon,
  };

  const disadvantagesFeaturesList: TFeatureElementList = t(
    'productPage.features.publicDisadvantages.features',
    {
      returnObjects: true,
    },
  );

  const advantagesFeaturesList: TFeatureElementList = t(
    'productPage.features.stabilityAdvantages.features',
    {
      returnObjects: true,
    },
  );

  const cardsList: TExperienceCardList = t('productPage.features.experience.experienceList', {
    returnObjects: true,
  });

  return (
    <section className="pt-[8.1rem] px-[1rem] mb-32 lg:mb-40 featrues-background-product">
      <article className="mx-auto max-w-[137rem] px-[1.6rem] flex flex-col mb-[14.1rem] lg:flex-row lg:justify-evenly lg:px-[4.8rem] ">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h2 className="mx-auto max-w-[30rem] mb-8 font-grotesk font-bold text-center text-[1.8rem] tracking-[0.18px] leading-[2.2rem] md:text-[4.4rem] md:max-w-[62rem] md:leading-[5.4rem] md:tracking-[0.44px] lg:text-start">
            {Array.isArray(heading)
              ? heading.map(({ text, styled }, index) => (
                  <span className={`${styled && 'text-accentColorRedOrange'}`} key={text + index}>
                    {text}
                  </span>
                ))
              : heading}
          </h2>
          <p className="mx-auto max-w-[25rem] flex flex-col items-center font-sans text-[1.6rem] leading-[2.4rem] text-center gap-4 mb-16 md:text-[2.4rem] md:max-w-[62rem] lg:m-0 lg:flex-row">
            {t('productPage.features.publicDisadvantages.subHeading')}
            <Image src={solidArrow} alt="arrow rights" className="rotate-90 lg:rotate-0" />
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-[1.6rem] lg:basis-[30rem]">
          {disadvantagesFeaturesList.map(({ name, iconType }, index) => {
            return (
              <li key={name + index}>
                <DisadvantageCard
                  caption={name}
                  imageUrl={disadvantageIconsMap[iconType as keyof typeof disadvantageIconsMap]}
                />
              </li>
            );
          })}
        </ul>
      </article>
      <article className="mx-auto max-w-[137rem] px-[1.6rem] flex flex-col mb-[14.1rem] lg:flex-row-reverse lg:justify-evenly lg:px-[4.8rem] ">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h2 className="mx-auto max-w-[30rem] mb-8 font-grotesk font-bold text-center text-[1.8rem] tracking-[0.18px] leading-[2.2rem] md:text-[4.4rem] md:max-w-[62rem] md:leading-[5.4rem] md:tracking-[0.44px] lg:text-start">
            {Array.isArray(advantageHeading)
              ? advantageHeading.map(({ text, styled }, index) => (
                  <span className={`${styled && 'text-primaryWaterBlue'}`} key={text + index}>
                    {text}
                  </span>
                ))
              : advantageHeading}
          </h2>
          <p className="mx-auto max-w-[25rem] flex flex-col items-center font-sans text-[1.6rem] leading-[2.4rem] text-center gap-4 mb-16 md:text-[2.4rem] md:max-w-[62rem] lg:mx-0 lg:flex-row lg:text-left">
            {t(`productPage.features.stabilityAdvantages.subHeading1`)}
          </p>
          <p className="mx-auto max-w-[25rem] flex flex-col items-center font-sans text-[1.6rem] leading-[2.4rem] text-center gap-4 mb-16 md:text-[2.4rem] md:max-w-[62rem] lg:m-0 lg:flex-row-reverse lg:text-left">
            {t('productPage.features.stabilityAdvantages.subHeading2')}
            <Image src={solidArrow} alt="arrow rights" className="rotate-90 lg:-rotate-180" />
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-[1.6rem] lg:basis-[32rem]">
          {advantagesFeaturesList.map(({ name, iconType }, index) => {
            return (
              <li key={name + index}>
                <AdvantageCard
                  caption={name}
                  imageUrl={advantageIconsMap[iconType as keyof typeof advantageIconsMap]}
                />
              </li>
            );
          })}
        </ul>
      </article>
      <article>
        <h2 className="font-grotesk text-[1.8rem] tracking-[0.18px] leading-[2.2rem] font-bold text-center text-midnightDarkBlue mb-8 md:text-[4.4rem] md:tracking-[0.44px] md:leading-[5.4rem] md:mb-16">
          {t(`productPage.features.experience.heading`)}
        </h2>
        <div className="text-midnightDarkBlue flex gap-8 justify-center flex-wrap">
          {cardsList.map((card, index) => (
            <ExperienceCard {...card} key={card.heading + index} />
          ))}
        </div>
      </article>
    </section>
  );
};
