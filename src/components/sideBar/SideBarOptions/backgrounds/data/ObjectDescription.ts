export type BackgroundItem = {
  id?: number;
  src: string;
  src2: string;
  type: string;
  isLoaded?: boolean;
  hash1: string;
  alt?: string;
};

export type BackgroundImageProps = {
  item: BackgroundItem;
  index: number;
  currentLanguage: { name: string };
  type: string;
  isWide: boolean;
};
