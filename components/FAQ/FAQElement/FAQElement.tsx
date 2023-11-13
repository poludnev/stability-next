interface IFAQElementProps {
  children?: React.ReactNode;
  summary: string | React.ReactNode;
  content: string | React.ReactNode;
}
export const FAQElement = ({ summary, content }: IFAQElementProps) => {
  return (
    <details className="details appearance-none border border-neutralColor30 rounded-xl font-grotesk font-medium text-[1.6rem] trackig-[0.16rem] leading-[2.2rem] p-4 group open:bg-beige02">
      <summary className="appearance-none relative list-none outline-none cursor-pointer pr-16 group-open:mb-4">
        {summary}
      </summary>
      <div className="border-t border-neutral30 py-4">
        {typeof content === 'string' ? <p className="text-small">{content}</p> : <>{content}</>}
      </div>
    </details>
  );
};
