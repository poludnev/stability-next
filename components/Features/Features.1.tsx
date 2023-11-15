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
    <section className="pt-[8.1rem] px-[1rem]">
      <article className="px-[1.6rem] flex flex-col gap-">
        <h2 className="max-w-[30rem] mb-8 font-grotesk font-bold text-center text-[1.8rem] tracking-[0.18px] leading-[2.2rem]">
          {Array.isArray(heading)
            ? heading.map(({ text, styled }, index) => (
                <span className={`${styled && 'text-accentColorRedOrange'}`} key={text + index}>
                  {text}
                </span>
              ))
            : heading}
        </h2>
        <p className="flex flex-col items-center font-sans text-[1.6rem] leading-[2.4rem] text-center gap-4">
          {t('productPage.features.publicDisadvantages.subHeading')}
          <Image src={solidArrow} alt="arrow rights" className="rotate-90" />
        </p>
        <ul className="">
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
      <article>
        <h2 className="">
          {Array.isArray(heading)
            ? heading.map(({ text, styled }, index) => (
                <span className="" key={text + index}>
                  {text}
                </span>
              ))
            : heading}
        </h2>
        <p className="">{t(`productPage.features.stabilityAdvantages.subHeading1`)}</p>
        <p className="">
          <Image src={solidArrow} alt="arrow rights" />
          {t('productPage.features.stabilityAdvantages.subHeading2')}
        </p>
        <ul className="">
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
        <h2 className="">{t(`productPage.features.experience.heading`)}</h2>
        <div className="">
          {cardsList.map((card, index) => (
            <ExperienceCard {...card} key={card.heading + index} />
          ))}
        </div>
      </article>
    </section>
  );
};
