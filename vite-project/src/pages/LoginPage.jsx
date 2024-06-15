import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { appRoutes } from "../lib/AppRoutes";
import { login } from "../api";
import { Link } from "react-router-dom";
import * as S from "./RegistrationPage/RegistracionPage.styled";

const LoginPage = ({ setAuth, setUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!formValues.login || formValues.login.trim().length === 0) {
      setError("Не введен логин");
      return;
    }
    if (!formValues.password || formValues.password.trim().length === 0) {
      setError("Не введён пароль");
      return;
    }
    try {
      const response = await login({
        login: formValues.login,
        password: formValues.password,
      });

      console.log("LOGIN RESPONSE", response);

      setAuth(true);
      setUser(response.user);
      navigate(appRoutes.MAIN);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      }
      setError(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer onSubmit={onLogin}>
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

// import Login from "../components/Login/Login";

// export const LoginPage = ({ login }) => {
//   return <Login login={login} />;
// };
export default LoginPage;



// const navigate = useNavigate();

// const [formValues, setFormValues] = useState({
//   Login: "",
//   password: "",
// });

// const [error, setError] = useState(null);

// const onInputChange = (event) => {
//   const { name, value } = event.target;
//   setFormValues({ ...formValues, [name]: value });
// };

// const onLogin = async (event) => {
//   event.preventDefaul();
//   if (!formValues.email) {
//     setError("Не введена почта");
//     return;
//   }
//   if (!formValues.password) {
//     setError("Не введен пароль");
//     return;
//   }

//   try {
//     const response = await login({
//       login: formValues.email,
//       password: formValues.password,
//     });

//     console.log("LOGIN RESPONSE", response);

//     setAuth(true);
//     setUser(response.user);
//     navigate(appRoutes.MAIN);
//   } catch (error) {
//     console.error(error.massange);

//     if (error.massange === "Failed to fetch") {
//       setError("Ошибка соединения");
//       return;
//     }
//     setError(error.massange);
//   }
// };