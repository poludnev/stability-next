import { IResourceElementProps } from '@/types';
import { getFormattedDate } from '@/utils';

export const BlogElement = ({ date, title, text, link, imageUrl }: IResourceElementProps) => {
  const displayedDate = typeof date === 'string' ? date : getFormattedDate(date);
  const STRING_TO_TRUNCATE_LENGTH = 160;
  const truncatedText =
    typeof text === 'string' && text?.length < STRING_TO_TRUNCATE_LENGTH
      ? text
      : text?.slice(0, STRING_TO_TRUNCATE_LENGTH) + '...';
  console.log(imageUrl);
  return (
    <article className="font-grotest md:max-w-[32%]">
      <a
        href={link !== null ? link : 'https://medium.com/@StabilityInc'}
        target="_blank"
        rel="noreferrer"
      >
        <div className="h-[22.7rem] flex justify-center max-w-xl md:justify-start md:max-w-2xl">
          <figure className="border rounded-2xl overflow-hidden bg-neutralColor30 max-w-full mb-[1.2rem]">
            {imageUrl !== null && imageUrl.length > 0 && (
              // disable useing next/image due to the error:
              // https://github.com/vercel/next.js/issues/53715
              // 403 forbidden: "url" parameter is valid but upstream response is invalid
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="h-full aspect-auto max-w-none"
                src={imageUrl}
                alt={title !== null ? title : 'medium post preview'}
              ></img>
            )}
          </figure>
        </div>
        <div className="font-grotesk font-bold text-[1.6rem] leading-[2.2rem] mb-[1.2rem]">
          {displayedDate}
        </div>
        <header className="font-grotesk font-bold text-[1.8rem] tracking-[0.18px] leading-[2.2rem] mb-[2rem]">
          {title}
        </header>
        <div className="font-sans font-normal text-[1.6rem] mb-[0.6rem]">{truncatedText}</div>
      </a>
    </article>
  );
};
