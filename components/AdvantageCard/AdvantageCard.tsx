import Image from 'next/image';
interface IAdvantageCardProps {
  imageUrl: string;
  caption: string;
}
export const AdvantageCard = ({ caption, imageUrl }: IAdvantageCardProps) => {
  return (
    <figure className="w-[13.2rem] bg-neutralColor20 rounded-2xl py-[1.8rem] px-[1.6rem] h-full flex flex-col items-center ">
      <Image className="mb-4" src={imageUrl} alt={caption} />
      <figcaption className="mx-auto font-sans text-[1.4rem] font-bold leading-[1.6rem] text-center flex-auto flex items-center">
        {caption}
      </figcaption>
    </figure>
  );
};
