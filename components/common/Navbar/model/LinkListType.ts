export type MenuListType = {
  id: number;
  label: string;
  subMenu: SubMenuType[];
  url?: string;
  cssClasses?: string;
  imgUrl: string;
};
export type SubMenuType = LinkType & {
  links: LinkType[];
};
export type LinkType = {
  id: number;
  label: string;
  urlTarget: '_blank' | '_self' | '_parent' | '_top';
  url: string;
  cssClasses?: string;
};
