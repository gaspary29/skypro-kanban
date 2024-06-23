import * as S from "../../pages/RegistrationPage/RegistracionPage.styled"; 
import { appRoutes } from "../../lib/AppRoutes"; 
import { useState } from "react";
import { loginUser } from "../../api"; 
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/userUser"; 
import { Link } from "react-router-dom";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!formValues.login) {
      setError("Введите логин");
      return;
    }

    if (!formValues.password) {
      setError("Введите пароль");
      return;
    }

    try {
      const response = await loginUser({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response.user);

      setError(null);
      setUser(response.user);
      navigate(appRoutes.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Вход</S.FormHeader>
          <S.FormInput
            name="login"
            type="text"
            placeholder="Логин"
            value={formValues.login}
            onChange={onInputChange}
          />
          <S.FormInput
            name="password"
            type="password"
            placeholder="Пароль"
            value={formValues.password}
            onChange={onInputChange}
          />
          <br />
          {error && <p>{error}</p>}
          <S.FormButton onClick={onLogin}>
            Войти
            </S.FormButton>
          <S.FormFooter>
            <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
            <Link to={appRoutes.REGISTR}>Регистрируйтесь здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
};


export default Login;

