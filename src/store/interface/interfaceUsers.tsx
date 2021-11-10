export interface IUser {
  user: {
    nickname: string;
    password: string;
    id: string;
    admin: boolean;
    banned: boolean;
  };
}
