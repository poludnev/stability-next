import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { TPersonDataList } from '@/types';
import { Person } from '..';

export const Team = () => {
  const { t } = useTranslation();

  const leadersList: TPersonDataList = t('homepage.leadership.leaders', {
    returnObjects: true,
  });
  const teamMembersList: TPersonDataList = t('aboutPage.team.teamMembers', {
    returnObjects: true,
  });
  return (
    <section className="mb-40">
      <div className="bg-midnightDarkBlue team-background-about">
        <div className="max-w-[144rem] mx-auto pb-32 pt-[10.2rem]  text-neutralColor10 flex flex-col gap-32 md:px-[6.1rem] md:gap-16 lg:flex-row lg:gap-[12.8rem]">
          <div className="px-[3rem] ">
            <p className="mb-4 font-grotesk font-medium text-[2.8rem] tracking-[1.4px] leading-[3.2rem] uppercase text-center md:text-[3.2rem] md:leading-[3.8rem] lg:text-start">
              {t('aboutPage.team.sectionHeading')}
            </p>
            <h1 className="mx-auto max-w-[30rem] mb-6 font-grotesk font-bold text-[4.4rem] text-center tracking-[0.44px] leading-[5.4rem] md:max-w-[45rem] md:text-[6.4rem] md:leading-[7.8rem] md:tracking-[-1.28px] lg:mx-0 lg:text-start">
              {t('aboutPage.team.heading')}
            </h1>
            <p className="font-sans text-[1.8rem] text-center leading-[2.8rem] md:text-[2.4rem] md:leading-[3.8rem] lg:text-start">
              {t('aboutPage.team.subHeading')}
            </p>
          </div>
          <div>
            <h2 className="mb-10 font-sans text-[1.8rem] text-center">
              {t('aboutPage.team.experienceHeading')}
            </h2>
            <div className="grid grid-cols-[max-content_max-content_max-content] gap-y-[6.5rem] justify-center justify-items-center">
              <div className="max-h-[6.1rem] max-w-[8.1rem] self-center md:max-w-[12.4rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/galaxy.png"
                  alt="Galaxy"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[9.1rem] self-center md:max-w-[14rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/morgan.png"
                  alt="JPMorgan"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[4.8rem] self-center md:max-w-[8.4rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/nike.png"
                  alt="Nike"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[9rem] self-center md:max-w-[13.6rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/meta.png"
                  alt="Meta"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[12.8rem] self-center md:max-w-[22.1rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/mythical.png"
                  alt="Mythical"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[2.9rem] self-center md:max-w-[4.2rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/seedtag.png"
                  alt="SeedTag"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[11.2rem] self-center md:max-w-[16.5rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/wedbush.png"
                  alt="Wedbush"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[5.7rem] self-center md:max-w-[8.4rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/psa.png"
                  alt="PSA"
                  className="max-w-100 max-h-100"
                />
              </div>
              <div className="max-h-[6.1rem] max-w-[3.4rem] self-center md:max-w-[5rem]">
                <Image
                  width={500}
                  height={500}
                  src="/images/partners/unifi.png"
                  alt="Unifi"
                  className="max-w-100 max-h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-beige02 rounded-[2rem] top-[-2rem] py-24 px-2 flex flex-col items-center gap-4 xs:flex-row xs:flex-wrap justify-center max-w-[144rem] mx-auto">
        {leadersList.map(({ name, position, photoUrl }) => (
          <Person name={name} possitionTitle={position} key={name + position} imageUrl={photoUrl} />
        ))}
        {teamMembersList.map(({ name, position, photoUrl }) => (
          <Person name={name} possitionTitle={position} key={name + position} imageUrl={photoUrl} />
        ))}
      </div>
    </section>
  );
};
