import Link from 'next/link';
import { useTranslation } from 'next-i18next';
export const NavigationMobile = ({ onClickMenuElement }: { onClickMenuElement?: () => void }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex flex-col md:space-x-2 space-y-4 text-[1.6rem] font-sora capitalize">
        <Link href="/about">
          <li className="py-[0.8rem] px-[1.4rem] min-w-max " onClick={onClickMenuElement}>
            {t('navigation.about')}
          </li>
        </Link>
        <Link href="/product">
          <li className="py-[0.8rem] px-[1.4rem]" onClick={onClickMenuElement}>
            {t('navigation.product')}
          </li>
        </Link>
        <li className="py-[0.8rem] px-[1.4rem] relative group" onClick={onClickMenuElement}>
          <span className="group">{t('navigation.resources')}</span>
          <div className=" text-neutralColor10 rounded-2xl group group-hover:block duration-200">
            <ul className="py-4">
              <Link
                href="https://docs.stabilityprotocol.com/resources/marketplace/"
                target="_blank"
              >
                <li className="min-w-max hover:bg-neutralColor20 hover:text-midnightDarkBlue py-3 px-5 text-2xl rounded-2xl duration-300">
                  {t('navigation.subresources.marketplace')}
                </li>
              </Link>
              <Link href="https://account.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 hover:text-midnightDarkBlue py-3 px-5 text-2xl rounded-2xl duration-300">
                  {t('navigation.subresources.account')}
                </li>
              </Link>
              <Link href="https://docs.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 hover:text-midnightDarkBlue py-3 px-5 text-2xl rounded-2xl duration-300">
                  {t('navigation.subresources.docs')}
                </li>
              </Link>
              <Link href="#blog" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 hover:text-midnightDarkBlue py-3 px-5 text-2xl rounded-2xl duration-300">
                  {t('navigation.subresources.blog')}
                </li>
              </Link>
              <Link href="https://stability-testnet.blockscout.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 hover:text-midnightDarkBlue py-3 px-5 text-2xl rounded-2xl duration-300">
                  {t('navigation.subresources.explorer')}
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};
