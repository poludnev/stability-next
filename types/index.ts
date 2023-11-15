export interface TResource {
  date: string | Date;
  title: string;
  text: string;
  link: string;
  imageUrl: string;
}
export type TResourceList = TResource[];

export type TParsedRssFeed = {
  title: string | null;
  imageUrl: string | null;
  text: string | null;
  date: Date | null;
  link: string | null;
}[];

export interface IResourceElementProps {
  children?: React.ReactNode;
  date: string | Date | null;
  title: string | null;
  text: string | null;
  link: string | null;
  imageUrl: string | null;
}

export interface TStyledText {
  text: string;
  styled: boolean | undefined;
}

export type TStyledTextList = TStyledText[];

export interface TPersonData {
  name: string;
  position: string;
  photoUrl?: string;
}
export type TPersonDataList = TPersonData[];

export interface TFeatureElement {
  name: string;
  iconType: string;
}
export type TFeatureElementList = TFeatureElement[];

export interface TExperienceCard {
  heading: string;
  details: string[];
  buttonType: string;
}
export type TExperienceCardList = TExperienceCard[];

