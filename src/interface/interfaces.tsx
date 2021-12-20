export interface ICardInfo {
  [x: number]: number;
  category: string;
  selectMenuItem: string;
  selectMenuItemForProfile?: string;
  price: number;
  promotion: number;
  id: string;
  name?: string;
  img?: string;
  title: string;
  descr: string;
  like?: boolean;
  disLike?: boolean;
  addInBag?: boolean;
  deleteInBag?: boolean;
}

export interface IUser {
  likes: ICardInfo[];
  basket: ICardInfo[];
  buying: ICardInfo[];
  nickname: string;
  password: string;
  money: number;
  id: string;
  admin: boolean;
  banned: boolean;
}
export interface ICategory {
  [x: string]: any;
  category: any;
  mouses: ICardInfo[];
  keyboards: ICardInfo[];
  headphones: ICardInfo[];
  cpu: ICardInfo[];
}
