import { useIsMobile, useWindowInnerWidth } from '@/hooks';
import { useRef } from 'react';

export const Grill = ({
  propWidth,
  userRectWidth,
  alignCenter,
  topOffSet6,
}: {
  propWidth?: number;
  userRectWidth?: number;
  alignCenter?: boolean;
  topOffSet6?: boolean;
}) => {
  const DESKTOP_GRILL_DEFAULT_HEIGHT = 422;
  const MOBILE_GRILL_DEFAULT_HEIGHT = 745;
  const DESKTOP_GRILL_CELL_DEFAULT_HEIGHT = 90;
  const MOBILE_GRILL_CEILL_HEIGHT = 65.72;

  const containerRef = useRef<HTMLDivElement>(null);

  const innerWidth = useWindowInnerWidth();
  const isMobile = useIsMobile();
  const height: number =
    containerRef?.current?.clientHeight !== undefined
      ? containerRef?.current?.clientHeight
      : isMobile
      ? MOBILE_GRILL_DEFAULT_HEIGHT
      : DESKTOP_GRILL_DEFAULT_HEIGHT;

  const width = propWidth ?? innerWidth;
  const rectWidth =
    userRectWidth ?? (isMobile ? MOBILE_GRILL_CEILL_HEIGHT : DESKTOP_GRILL_CELL_DEFAULT_HEIGHT);
  const rectHeight = rectWidth;

  const defaultLineWidth = 1;
  const horizontalOverlay = defaultLineWidth / 4;
  const verticalOverlay = defaultLineWidth / 4;
  const offsetWidth = rectWidth - (defaultLineWidth - verticalOverlay);
  const offsetHeight = rectHeight - (defaultLineWidth - horizontalOverlay);
  const columnsQuantity = Math.ceil(width / offsetWidth) + (isMobile ? 0 : 1);
  const rowsQuantity = Math.ceil(height / offsetHeight) + (isMobile ? 0 : 1);
  const horOffset =
    (width -
      offsetWidth -
      (columnsQuantity - 1) * (offsetWidth + (defaultLineWidth - verticalOverlay))) /
    2;
  const vertOffset =
    alignCenter === true
      ? (height - rowsQuantity * offsetHeight) / 2 - defaultLineWidth * 2 - horizontalOverlay
      : 0;

  // const topOffSet6 = false;
  return (
    <div
      ref={containerRef}
      className={`absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-full h-full ${
        topOffSet6 && 'topOffset6'
      }`}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {[...Array(columnsQuantity)].map((_, colsIndex) =>
          [...Array(rowsQuantity)].map((_, rowsIndex) => {
            return (
              <rect
                key={String(colsIndex + rowsIndex)}
                width={offsetWidth}
                height={offsetHeight}
                stroke={'white'}
                strokeOpacity="0.05"
                x={colsIndex * (offsetWidth + (defaultLineWidth - verticalOverlay)) + horOffset}
                y={rowsIndex * (offsetHeight + (defaultLineWidth - horizontalOverlay)) + vertOffset}
              />
            );
          }),
        )}
      </svg>
    </div>
  );
};
