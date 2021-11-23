import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  navigate("/store");
};
