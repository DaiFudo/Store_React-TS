/* export type IUsers = Array<IUser>; */

export interface IUser {
  nickname: string;
  password: string;
  id: string;
  admin: boolean;
  banned: boolean;
}
