import Image from 'next/image';
interface IPersonProps {
  imageUrl?: string;
  possitionTitle: string;
  name: string;
}

export const Person = ({ imageUrl, possitionTitle, name }: IPersonProps) => {
  return (
    <article className="w-[17.5rem] flex-shrink-0">
      <figure className="">
        {imageUrl !== undefined ? (
          <Image
            src={imageUrl}
            alt={`${name} ${possitionTitle}`}
            className="m-auto mb-8 w-[15rem] h-[15rem] rounded-full  bg-neutralColor30 flex items-center justify-center"
            width={500}
            height={500}
          />
        ) : (
          <p className="">no photo</p>
        )}
        <figcaption className="">
          <h5 className="text-center font-grotesk text-[1.6rem] leading-[2.2rem] tracking-[-0.16px] mb-2">
            {name}
          </h5>
          <p className="text-center font-sans text-[1.4rem] tracking-[-0.28px] leading-8">
            {possitionTitle}
          </p>
        </figcaption>
      </figure>
    </article>
  );
};
