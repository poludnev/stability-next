import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import whiteLogo from '@/public/images/white-logo.svg';
import xLogo from '@/public/images/x-logo.svg';
import linkedInLogo from '@/public/images/linked-in-logo.svg';
import { Grill } from '@/components';

export const Footer = () => {
  const { t } = useTranslation();

  const singUpButtonHandler = (): void => {
    window.open('https://docs.stabilityprotocol.com/', '_blank');
  };

  return (
    <footer className="relative footer-background bg-midnightDarkBlue text-neutralColor10 pt-[6.6rem] pb-[2rem] min-h-[30rem] md:pt-[12rem]">
      <Grill alignCenter />
      <div className="relative mx-auto max-w-[144rem] flex flex-col justify-center items-center space-y-[6rem] md:items-stretch md:px-[4.8rem]">
        <div className="flex flex-col items-center justify-center space-y-[6rem] md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-8">
            <Link href="/">
              <Image src={whiteLogo} alt="stability" priority={true} />
            </Link>
            <div className="flex justify-center items-center space-x-8">
              <p className="font-sans text-[1.4rem] tracking-[1.4px] leading-[2.8rem] uppercase ">
                {t('footer.followUs')}
              </p>
              <a href={t('footer.mediaLinks.x')} target="_blank" rel="noreferrer">
                <Image src={xLogo} alt="X / Tweeter logo" />
              </a>
              <a href={t('footer.mediaLinks.linkedIn')} target="_blank" rel="noreferrer">
                <Image src={linkedInLogo} alt="LinkedIn" />
              </a>
            </div>

            <button onClick={singUpButtonHandler} className="btn btn-dark space-x-0 mx-auto">
              {t('buttons.earlyAccess')}
            </button>
          </div>
          <nav>
            <ul className="font-sans text-[1.6rem] capitalize leading-[2.8rem] grid grid-cols-2 gap-x-[6.2rem] gap-y-8 md:text-[2rem]">
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link href="/about">{t('navigation.about')}</Link>
              </li>
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link href="/product">{t('navigation.product')}</Link>
              </li>
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link href="https://medium.com/stabilitynetwork" target="_blank">
                  {t('navigation.subresources.blog')}
                </Link>
              </li>
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link
                  href="https://us21.list-manage.com/contact-form?u=8afbcbdb9e4fdad91bd87ce22&form_id=9e39027f0e20b64fe0eb9a79af776a0c"
                  target="_blank"
                >
                  {t('buttons.contactUs')}
                </Link>
              </li>
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link href="https://docs.stabilityprotocol.com/" target="_blank">
                  {t('navigation.subresources.docs')}
                </Link>
              </li>
              <li className="p-4 md:w-[15rem] lg:w-[22rem]">
                <Link
                  href="https://docs.stabilityprotocol.com/resources/marketplace/"
                  target="_blank"
                >
                  {t('navigation.subresources.marketplace')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center space-y-[6rem] md:flex-row-reverse md:justify-between md:space-y-0">
          <p className="flex items-center font-sans text-[1.4rem] font font-medium leading-[2.8rem] md:w-1/4">
            <a href={t('footer.terms.link')}>{t('footer.terms.name')}</a>
          </p>
          <p className="flex items-center font-sans text-[1.2rem] tracking-[1.2px] leading-[2.8rem] font-medium uppercase mx-auto text-center px-[2.5rem] pb-[2rem] md:pl-0 md:m-0 md:p-0">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
