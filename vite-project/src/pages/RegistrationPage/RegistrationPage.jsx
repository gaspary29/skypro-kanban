import * as S from "./RegistracionPage.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/AppRoutes";

export default function RegPage() {
  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <S.FormHeader>Регистрация</S.FormHeader>

          <S.FormInput type="text" placeholder="Имя" />
          <S.FormInput type="mail" placeholder="Эл. почта" />
          <S.FormInput type="password" placeholder="Пароль" />

          <Link to={appRoutes.MAIN}>
            <S.FormButton>Зарегистрироваться</S.FormButton>
          </Link>
          <S.FormFooter>
            Уже есть аккаунт? <Link to={appRoutes.LOGIN}>Войдите здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>
  );
}
