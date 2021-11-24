/* export type IUsers = Array<IUser>; */

export interface IUser {
  nickname: string;
  password: string;
  money?: number;
  id?: string;
  admin?: boolean;
  banned?: boolean;
}
