export interface ProfileCard {
  title: string;
  text: string;
  imgSrc: string;
  items: { value: string; active: boolean }[];
}
