interface ICardInfo {
  //[x: string]: any;
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
export default ICardInfo;
