import { useNavigate } from "react-router-dom";
import StoreAccount from "../store/storeAccount";

const ChekerLogin = () => {
  const navigate = useNavigate();
  if (!StoreAccount.user) {
    navigate("/");
  }
};
export default ChekerLogin;
