import * as S from "./RegistracionPage.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/AppRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../../api";
import { getUserFromLocalStronge } from "../../helper";

export default function RegPage(setUser) {
  const navigate = useNavigate();
 

  const regForm = {
    login: "",
    name: "",
    password: "",
  };
  const [regData, setRegData] = useState(regForm);

  const [addRegError, setAddRegError] = useState(null);

  const handleReg = async (e) => {
    e.preventDefault();

    if (!regData.name || regData.name.trim().length === 0) {
      setAddRegError("Не введено имя.");
      return;
    }

    if (!regData.login || regData.login.trim().length === 0) {
      setAddRegError("Не введён логин.");
      return;
    }

    if (!regData.password || regData.password.trim().length === 0) {
      setAddRegError("Не введён пароль.");
      return;
    }

    try {
      await registration(regData).then((data) => {
        console.log(data);
        setUser(data.user);
        navigate(paths.MAIN);
      });
    } catch (error) {
      setAddRegError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setRegData({
      ...regData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
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
            value={regData.name}
            onChange={handleInputChange}
          />
          <S.FormInput
            type="text"
            name="login"
            id="loginReg"
            placeholder="Эл. почта"
            value={regData.login}
            onChange={handleInputChange}
          />
          <S.FormInput
            type="password"
            name="password"
            id="passwordFirst"
            placeholder="Пароль"
            value={regData.password}
            onChange={handleInputChange}
          />
            {addRegError && <p style={{ color: "red" }}>{addRegError}</p>}
          <S.FormButton id="SignUpEnter" onClick={handleReg}>
            <Link to={appRoutes.MAIN}>Зарегистрироваться</Link>
          </S.FormButton>
          <S.FormFooter>
            Уже есть аккаунт? <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
}
