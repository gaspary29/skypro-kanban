import * as S from "../../pages/RegistrationPage/RegistracionPage.styled";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/AppRoutes"; 
import { useState } from "react";
import { registration } from "../../api"; 
import { useUser } from "../../hooks/userUser"; 
import { Link } from "react-router-dom";

const Register = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
    name: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onRegister = async (event) => {
    event.preventDefault();

    if (!formValues.name) {
      setError("Введите имя!");
      return;
    }

    if (!formValues.login) {
      setError("Введите логин!");
      return;
    }

    if (!formValues.password) {
      setError("Введите пароль!");
      return;
    }

    try {
      const response = await registration({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });

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
          <S.FormHeader>Регистрация</S.FormHeader>
          <S.FormInput
            type="text"
            name="name"
            id="first-name"
            placeholder="Имя"
            value={formValues.name}
            onChange={onInputChange}
          />
          <S.FormInput
            type="text"
            name="login"
            id="loginReg"
            placeholder="Эл. почта"
            value={formValues.login}
            onChange={onInputChange}
          />
          <S.FormInput
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
            value={formValues.password}
            onChange={onInputChange}
          />
          {addRegError && <p style={{ color: "red" }}>{addRegError}</p>}

          <Link to={appRoutes.HOME}>
            <S.FormButton onClick={onRegister}>Зарегистрироваться</S.FormButton>
          </Link>
          <S.FormFooter>
            Уже есть аккаунт? <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
}
export default Register;
