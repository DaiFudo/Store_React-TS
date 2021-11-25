/* export type IUsers = Array<IUser>; */

interface IUser {
  nickname: string;
  password: string;
  money?: number;
  id?: string;
  admin?: boolean;
  banned?: boolean;
}
export default IUser;
