import storeAccount from "../../store/storeAccount";

const UserName = () => {
  if (storeAccount.user) {
    return `${storeAccount.user.nickname}`;
  } else {
    return <div>Not Auth</div>;
  }
};
export default UserName;
