import Image from 'next/image';
import { Children, ReactNode, TouchEventHandler, useRef, useState } from 'react';
import arrow from '@/public/icons/arrow-left.svg';

export const Slider = ({ children }: { children: ReactNode }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentElement, setCurrentElement] = useState(0);

  const childElementsCount = Children.count(children);

  const nextHandler = (): void => {
    setCurrentElement((current) => (current + 1 >= childElementsCount ? current : current + 1));
  };

  const prevHandler = (): void => {
    setCurrentElement((current) => (current - 1 < 0 ? current : current - 1));
  };

  const ONSWIPE_DEFAULT_DISTANCE_RATIO = 0.1;
  const ONSWIPE_DEFAULT_DIRECTION_RATIO = 0.4;

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchStartV, setTouchStartV] = useState<number | null>(null);

  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [touchEndV, setTouchEndV] = useState<number | null>(null);
  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchStart(event.targetTouches[0].clientX);
    setTouchStartV(event.targetTouches[0].clientY);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
    if (event.targetTouches[0].clientX === 0) setTouchEnd(touchStart);
    setTouchEnd(event.targetTouches[0].clientX);
    setTouchEndV(event.targetTouches[0].clientY);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
    if (touchEnd !== null && touchStart !== null && touchEndV !== null && touchStartV !== null) {
      const horizontalDistance = touchStart - touchEnd;
      const horizontalAbsDistance = Math.abs(horizontalDistance);
      const horizontalRelativeDistans = horizontalAbsDistance / sliderRef.current?.clientWidth!;

      if (horizontalRelativeDistans < ONSWIPE_DEFAULT_DISTANCE_RATIO) return;

      const verticalDistance = Math.abs(touchStartV - touchEndV);
      const directionRatio = verticalDistance / horizontalAbsDistance;
      if (directionRatio > ONSWIPE_DEFAULT_DIRECTION_RATIO) return;
      if (horizontalDistance > 0) {
        nextHandler();
      } else {
        prevHandler();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };
  return (
    <div
      ref={sliderRef}
      className="relative  w-[25rem] mx-auto grid grid-cols-[1fr_17.5rem_1fr] gap-x-[1.4rem] gap-y-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={prevHandler} disabled={currentElement === 0} className="group">
        <Image
          src={arrow}
          alt="arrow left"
          className="group-disabled:opacity-25 group-disabled:cursor-not-allowed"
        />
      </button>
      <div className="relative overflow-hidden ">
        <div
          className="relative flex items-center duration-500"
          style={{ left: `-${currentElement * 100}%` }}
        >
          {children}
        </div>
      </div>
      <button
        onClick={nextHandler}
        disabled={currentElement === childElementsCount - 1}
        className="group"
      >
        <Image
          src={arrow}
          alt="arrow right"
          className="rotate-180 group-disabled:opacity-25 group-disabled:cursor-not-allowed"
        />
      </button>
      <div className="absolute bottom-[-3rem] left-0 right-0 flex justify-center space-x-">
        {[...Array(childElementsCount)].map((_, index) => (
          <div
            className={`w w-4 h-4 bg-neutralColor20 rounded-full duration-500 ${
              currentElement === index && 'bg-neutralColor70'
            }`}
            key={'dot' + index}
          ></div>
        ))}
      </div>
    </div>
  );
};

