import storeAccount from "../../../../store/storeAccount";

const AdminBtnVisible = () => {
  storeAccount.user.admin ? <>Admin</> : <></>;
};
export default AdminBtnVisible;
