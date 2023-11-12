import { useEffect, useState } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', () => {
      window.innerWidth <= 425 ? setIsMobile(true) : setIsMobile(false);
    });
    return () => {
      window.removeEventListener('resize', () => {
        window.innerWidth <= 425 ? setIsMobile(true) : setIsMobile(false);
      });
    };
  }, []);
  return isMobile;
};

export const useWindowInnerWidth = (): number => {
  const [windowInnderWidth, setWindowInnerWidth] = useState(0);
  useEffect(() => {
    setWindowInnerWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowInnerWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowInnerWidth(window.innerWidth);
      });
    };
  }, []);
  return windowInnderWidth;
};
