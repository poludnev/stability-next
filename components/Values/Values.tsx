import { useTranslation } from 'next-i18next';
import Marquee from 'react-fast-marquee';

export const Values = () => {
  const { t: getLocalisedText } = useTranslation();
  const valuesList: {
    text: string;
    color: string;
  }[] = getLocalisedText('aboutPage.value.values', {
    returnObjects: true,
  });
  return (
    <section className="bg-midnightDarkBlue text-neutralColor10 py-[1.3rem]">
      <div>
        <Marquee autoFill>
          <div className="font-grotesk font-bold flex items-center justify-center gap-4 mr-4">
            <span className="text-[3.2rem]">{getLocalisedText('aboutPage.value.heading')}</span>
            {valuesList.map(({ text, color }, index) => (
              <span
                key={text + index}
                className={`flex items-center justify-center rounded-full py-[0.4rem] px-[1.6rem] text-[1.8rem] bg-accentColor${color} text-midnightDarkBlue`}
              >
                {text}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
