import { TExperienceCardList } from '@/types';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import userIcon from '@/public/icons/userIcon.svg';
interface IExperienceCardProps {
  heading: string;
  details: string[];
  buttonType: string;
}

export const ExperienceCard = ({ heading, details, buttonType }: IExperienceCardProps) => {
  const { t } = useTranslation();

  const singUpButtonHandler = (): void => {
    window.open('https://docs.stabilityprotocol.com/', '_blank');
  };

  const buttonsMap = {
    contact: {
      title: t('buttons.contactUs'),
      navigate: t('outerLinks.mailtoContact'),
      onClick: () => {
        window.open(
          'https://us21.list-manage.com/contact-form?u=8afbcbdb9e4fdad91bd87ce22&form_id=9e39027f0e20b64fe0eb9a79af776a0c',
          '_blank',
        );
      },
    },
    earlyAccess: {
      title: t('buttons.earlyAccess'),
      navigate: '/',
      onClick: singUpButtonHandler,
    },
  };

  return (
    <div className="basis-[30rem] flex-grow-max-w-[28.6rem] rounded-2xl border border-neutralColor30 bg-neutralColor10 pt-16 px-[1.6rem] pb-[3.4rem] flex flex-col items-center hover:bg-beige02 hover:border-beige02 duration-300 md:max-w-[40rem] md:pt-[5.3rem] md:px-12 md:items-start">
      <div className="mb-5">
        <Image src={userIcon} alt="user" />
      </div>
      <h2 className="font-grotesk font-bold text-[3.2rem] tracing-[0.32px] leading-[3.8rem] mb-[4.1rem]">
        {heading}
      </h2>
      <ul className="font-sans text-[1.4rem] leading-[2rem] tracking-[-0.28px] mb-[3.2rem] md:list-disc md:pl-8">
        {details.map((detail, index) => (
          <li key={(detail[0], index)} className="px-2 text-center md:text-left">
            <span className=""></span>
            {detail}
          </li>
        ))}
      </ul>
      <div className="md:mt-auto">
        <button className="btn btn-outlined-dark">
          {buttonsMap[buttonType as keyof typeof buttonsMap].title}
        </button>
      </div>
    </div>
  );
};
