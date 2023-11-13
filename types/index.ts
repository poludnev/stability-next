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