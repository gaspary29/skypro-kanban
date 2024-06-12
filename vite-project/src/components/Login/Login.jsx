import { Link } from "react-router-dom";
import * as S from "../../pages/RegistrationPage/RegistracionPage.styled";
import { appRoutes } from "../../lib/AppRoutes";

const Login = ({login}) => {
    return(
       <S.Wrapper>
       <S.Form >
         <S.FormContainer>
           <S.FormHeader>Вход</S.FormHeader>
         <S.FormInput type="mail" placeholder="Эл. почта" />
          <S.FormInput type="password" placeholder="Пароль" />
          <S.FormButton type="button" onClick={login}>
            Войти
          </S.FormButton>
          <S.FormFooter>
            <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
            <Link to={appRoutes.REGISTR}>Регистрируйтесь здесь</Link>
          </S.FormFooter>
        </S.FormContainer>
      </S.Form>
    </S.Wrapper>

    )
};

export default Login;