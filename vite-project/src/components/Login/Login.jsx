import * as S from  "./Login.styled";
import { appRoutes } from "../../lib/AppRoutes"; 
import { useState } from "react";
import { loginUser } from "../../api"; 
import { useNavigate } from "react-router-dom";
import { useUser} from "../../hooks/userUser"; 
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
      <S.ContainerSigin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitleWrapper>
              <S.ModalTitle>Вход</S.ModalTitle>
            </S.ModalTitleWrapper>
            <S.ModalFormLogin id="formLogIn" action="#" onSubmit={onLogin}>
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formValues.login}
                onChange={onInputChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formValues.password}
                onChange={onInputChange}
              />
              <S.ModalButtonEnter id="btnEnter" type="submit">
                Войти
              </S.ModalButtonEnter>
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              <S.ModalFormGroup>
                <S.ModalFormText>Нужно зарегистрироваться?</S.ModalFormText>
                <S.ModalFormLink to={appRoutes.REGISTR}>
                  Регистрируйтесь здесь
                </S.ModalFormLink>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSigin>
    </S.Wrapper>
  );
};


export default Login;

