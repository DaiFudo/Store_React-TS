/* export type IUsers = Array<IUser>; */
import ICardInfo from "../interface/interfaceCard";
interface IUser {
  likes: ICardInfo[];
  basket?: ICardInfo[];
  buying?: ICardInfo[];
  nickname?: string;
  password?: string;
  money?: number;
  id?: string;
  admin?: boolean;
  banned?: boolean;
}
export default IUser;
