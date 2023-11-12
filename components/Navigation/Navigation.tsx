import Link from 'next/link';
import { useTranslation } from 'next-i18next';
export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex md:space-x-2 lg:space-x-20 text-[1.6rem] font-sora capitalize">
        <li className="py-[0.8rem] px-[1.4rem] min-w-max">
          <Link href="/about">{t('navigation.about')}</Link>
        </li>
        <li className="py-[0.8rem] px-[1.4rem]">
          <Link href="/product">{t('navigation.product')}</Link>
        </li>
        <li className="py-[0.8rem] px-[1.4rem] relative group">
          <span className="group">{t('navigation.resources')}</span>
          <div className="absolute hidden bg-neutralColor10 rounded-2xl top-19 right-1/2 translate-x-1/2 group group-hover:block duration-200">
            <ul>
              <Link
                href="https://docs.stabilityprotocol.com/resources/marketplace/"
                target="_blank"
              >
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  {t('navigation.subresources.marketplace')}
                </li>
              </Link>
              <Link href="https://account.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  {t('navigation.subresources.account')}
                </li>
              </Link>
              <Link href="https://docs.stabilityprotocol.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  {t('navigation.subresources.docs')}
                </li>
              </Link>
              <Link href="#blog" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
                  {t('navigation.subresources.blog')}
                </li>
              </Link>
              <Link href="https://stability-testnet.blockscout.com/" target="_blank">
                <li className="min-w-max hover:bg-neutralColor20 py-3 px-5 rounded-2xl duration-300">
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
