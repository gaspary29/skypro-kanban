import { Outlet } from "react-router-dom";
import { Wrapper } from "./RegistrationPage/RegistracionPage.styled";
import Home from "../components/Home/Home";

const MainPage = () => {
  return (
    <Wrapper>
      <Outlet />
      <Home />
    </Wrapper>
  );
};
export default MainPage;
