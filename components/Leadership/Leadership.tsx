import { useTranslation } from 'next-i18next';
import { Person, Slider } from '..';
import { TPersonDataList } from '@/types';
export const Leadership = () => {
  const { t } = useTranslation();

  const leadersList: TPersonDataList = t('homepage.leadership.leaders', {
    returnObjects: true,
  });

  const learnmoreButtonHandler = (): void => {
    window.open('https://docs.stabilityprotocol.com/', '_blank');
  };

  return (
    <section className=" bg-neutralColor10 mx-auto max-w-[144rem] px-16 mb-32 md:mb-40 flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center gap-y-24 gap-x-18 lg:gap-30">
      <div className="md:h-[28.9rem] md:w-[35.7rem] px-[4.2rem] py-[3.6rem] flex flex-col justify-end md:bg-[url('../public/icons/folder-image.svg')]">
        <p className="mx-auto mb-8 font-grotesk font-medium text-[3.2rem] text-center tracking-[1.6px] leading-[3.8rem] uppercase">
          {t('homepage.leadership.header')}
        </p>
        <button
          onClick={learnmoreButtonHandler}
          className="btn smaller-text group mx-auto text-[1.6rem]"
        >
          <span>{t('buttons.readMoreAboutUs')}</span>
          <svg
            className="fill-midnightDarkBlue group-hover:fill-primaryWaterBlue"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon/ArrowCircleUpRight">
              <path
                id="Vector"
                d="M23.6146 6.38672C21.9107 4.68098 19.7391 3.51894 17.3746 3.04763C15.0101 2.57633 12.559 2.81692 10.3312 3.73898C8.1035 4.66105 6.1993 6.22314 4.85955 8.22765C3.5198 10.2322 2.80469 12.589 2.80469 15C2.80469 17.411 3.5198 19.7679 4.85955 21.7724C6.1993 23.7769 8.1035 25.339 10.3312 26.261C12.559 27.1831 15.0101 27.4237 17.3746 26.9524C19.7391 26.4811 21.9107 25.319 23.6146 23.6133C24.7464 22.4825 25.6442 21.1398 26.2567 19.6619C26.8693 18.184 27.1845 16.5998 27.1845 15C27.1845 13.4002 26.8693 11.816 26.2567 10.3381C25.6442 8.8602 24.7464 7.51749 23.6146 6.38672ZM19.2201 17.3438C19.2201 17.5924 19.1213 17.8309 18.9455 18.0067C18.7697 18.1825 18.5312 18.2813 18.2826 18.2813C18.034 18.2813 17.7955 18.1825 17.6197 18.0067C17.4439 17.8309 17.3451 17.5924 17.3451 17.3438V13.9805L12.3881 18.9492C12.2068 19.1192 11.9686 19.2154 11.7201 19.2188C11.4712 19.2177 11.2321 19.1212 11.0521 18.9492C10.8761 18.7715 10.7773 18.5314 10.7773 18.2813C10.7773 18.0311 10.8761 17.791 11.0521 17.6133L16.0209 12.6563H12.6576C12.409 12.6563 12.1705 12.5575 11.9947 12.3817C11.8189 12.2059 11.7201 11.9674 11.7201 11.7188C11.7201 11.4701 11.8189 11.2317 11.9947 11.0558C12.1705 10.88 12.409 10.7813 12.6576 10.7813H18.2826C18.4033 10.7809 18.5229 10.8049 18.6342 10.8516C18.8656 10.9452 19.0509 11.1262 19.1498 11.3555C19.1957 11.4711 19.2196 11.5943 19.2201 11.7188V17.3438Z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex space-x-4 xl:gap-32 2xl:gap-40 pt-4 pb-12 px-10">
        {leadersList.map(({ name, position, photoUrl }) => (
          <Person name={name} possitionTitle={position} key={name + position} imageUrl={photoUrl} />
        ))}
      </div>
      <div className="md:hidden">
        <Slider>
          {leadersList.map(({ name, position, photoUrl }) => (
            <Person
              name={name}
              possitionTitle={position}
              key={name + position}
              imageUrl={photoUrl}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
