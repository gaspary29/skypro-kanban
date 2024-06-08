import Login from "../components/Login/Login";
import { GlobalStyleSignin, Wrapper } from "../components/Login/Login.styled";

export const LoginPage = ({login}) => {
  return (
    <>
      <GlobalStyleSignin />
      <Wrapper>
        <Login login = {login} />
      </Wrapper>
    </>
  );
};
export default LoginPage;
