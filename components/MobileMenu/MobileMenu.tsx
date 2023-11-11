import Image from 'next/image';
import { NavigationMobile } from '..';
import closeIcon from '@/public/icons/close-cross-icon.svg';
import { TouchEventHandler, useState } from 'react';

export const MobileMenu = ({
  show,
  onClose,
  signUpHandler,
}: {
  show?: boolean;
  onClose: () => void;
  signUpHandler: () => void;
}) => {
  const ONSWIPE_DEFAULT_DISTANCE_RATIO = 0.95;
  const [isShow, setIsShow] = useState(show);
  const closeHandler = (): void => {
    setIsShow(false);
    onClose();
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
    if (touchStart / touchEnd < ONSWIPE_DEFAULT_DISTANCE_RATIO) closeHandler();
  };
  return (
    <div className="fixed z-50 top-0 right-0 left-0 bottom-0" onClick={closeHandler}>
      <div
        className={`bg-midnightDarkBlue h-screen max-w-[55%] p-8 absolute right-[0%] top-0 rounded-s-3xl text-white pt-28 space-y-10 ${
          isShow ? 'animate-slidein' : 'animate-slideout'
        }`}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute right-10 top-10 z-50 w-[2.4rem] hover:scale-110 duration-200"
          onClick={closeHandler}
        >
          <Image src={closeIcon} alt="burger" />
        </button>
        <NavigationMobile onClickMenuElement={closeHandler} />

        <button
          className="px-[2.4rem] py-[1.4rem] rounded-[8px] bg-primaryWaterBlue border border-midnightDarkBlue text-midnightDarkBlue text-[1.8rem] hover:bg-midnightDarkBlue hover:text-primaryWaterBlue duration-300 uppercase font-grotesk font-bold tracking-widest leading-none"
          onClick={signUpHandler}
        >
          Build on stability
        </button>
      </div>
    </div>
  );
};
