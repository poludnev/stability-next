import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu, Modal, Navigation } from '@/components';
import coloredLogo from '@/public/images/colored-logo.svg';
import burgerIcon from '@/public/icons/burger.svg';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MENU_CLOSE_DEFAULT_TIMEOUT_MS = 800;
  const handleCloseMenu = (): void => {
    setTimeout(() => {
      setShowMenu(false);
    }, MENU_CLOSE_DEFAULT_TIMEOUT_MS);
  };

  const singUpButtonHandler = (): void => {
    window.open('https://docs.stabilityprotocol.com/', '_blank');
    setShowMenu(false);
  };
  return (
    <header className="absolute w-full md:h-[12rem]">
      <div className="mx-auto max-w-[144rem] h-full">
        <div className="py-4 px-[1.6rem] h-full md:py-[2.2rem] md:px-[2.6rem] md:pb-[2.1rem]">
          <div className="bg-neutralColor20 rounded-2xl h-[4.3rem] flex items-center justify-between md:space-x-5 lg:space-x-20 px-[1.1rem] md:h-full md:rounded-[2rem] md:pl-[2.8rem] md:pr-[1.7rem]">
            <div className="max-w-[13rem] md:max-w-none mr-auto">
              <Link href="/">
                <Image src={coloredLogo} alt="stability" priority={true} />
              </Link>
            </div>
            <div className="hidden md:block">
              <Navigation />
            </div>
            <div className="hidden md:block ">
              <button
                className="min-w-max px-[2.4rem] py-[1.4rem] rounded-[8px] bg-primaryWaterBlue border border-midnightDarkBlue text-midnightDarkBlue text-[1.8rem] hover:bg-midnightDarkBlue hover:text-primaryWaterBlue duration-300 uppercase font-grotesk font-bold tracking-widest leading-none"
                onClick={singUpButtonHandler}
              >
                Build on stability
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                className="w-[2.4rem] hover:scale-110 duration-200"
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <Image src={burgerIcon} alt="burger" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <Modal>
          <MobileMenu
            show={showMenu}
            onClose={handleCloseMenu}
            signUpHandler={singUpButtonHandler}
          />
        </Modal>
      )}
    </header>
  );
};
