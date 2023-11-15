import Image from 'next/image';
export interface IDisadvantageCardProps {
  children?: React.ReactNode;
  imageUrl: string;
  caption: string;
}

export const DisadvantageCard = ({ caption, imageUrl }: IDisadvantageCardProps) => {
  return (
    <figure className="w-[13.2rem] h-full bg-secondaryColorBeige rounded-2xl py-[1.8rem] px-[1.6rem] flex flex-col items-center ">
      <Image className="mb-4" src={imageUrl} alt={caption} />
      <figcaption className="mx-auto max-w-[8rem] font-sans text-[1.4rem] font-bold leading-[1.6rem] text-center flex-auto flex items-center">
        {caption}
      </figcaption>
    </figure>
  );
};
