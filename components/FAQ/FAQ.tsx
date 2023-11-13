import { TStyledTextList } from '@/types';
import { useTranslation } from 'next-i18next';
import { FAQElement } from './FAQElement';

export const FAQ = () => {
  const { t } = useTranslation();

  const faqList: Array<{
    name: string | TStyledTextList;
    content: string | string[];
  }> = t('faq.faqList', { returnObjects: true });

  const processFAQElementContent = (
    content: (typeof faqList)[number]['content'],
  ): React.ReactNode => {
    if (typeof content === 'string') return content;

    return (
      <>
        {content.map((content, index) => (
          <p className="text-small" key={content + index}>
            {content}
          </p>
        ))}
      </>
    );
  };
  return (
    <section className="px-[3.5rem] mb-32">
      <div className="max-w-[134.4rem] mx-auto md:flex md:justify-between md:space-x-16">
        <header className="font-grotesk uppercase text-[3.2rem] font-medium text-center mb-16 md:text-start">
          {t('faq.header')}
        </header>
        <div className="space-y-4">
          {faqList.map(({ name, content }, index) => (
            <FAQElement
              key={String(name) + index}
              summary={
                Array.isArray(name)
                  ? name.map(({ text, styled }, index) => (
                      <span
                        key={text + index}
                        className={`${styled && 'text-' + 'primaryWaterBlue'}`}
                      >
                        {text}
                      </span>
                    ))
                  : name
              }
              content={processFAQElementContent(content)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
