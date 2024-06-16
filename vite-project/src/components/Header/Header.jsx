import { useState } from "react";
import * as S from "./Header.styled";
import * as B from "../shared.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/AppRoutes";
import { useUser } from "../../hooks/userUser";

const Header = ({setCards, cards}) => {
  const {user} = useUser();
  const [isOpen, setOpen] = useState(false);
  const hendleOpen = () => {
    setOpen ((prev) => !prev)
  }

  const onAddCard = () => {
   const newCard = {
    id: Date.now(),
   title: "TEST",
topic:"Research",
date: "13.05.2024",
status: "Без статуса",


   }
    const newCardList = [...cards,newCard];
    setCards (newCardList);
  }
  return (
    <S.Header>
      <B.Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="IMG/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button className="header__btn-main-new _hover01" onClick={onAddCard}>
              Создать новую задачу
            </button>
            <S.HeaderUser onClick={hendleOpen}>
            {user.name}
            </S.HeaderUser>
{isOpen && (            <S.HeaderPopUserSet >
              <S.PopUserSetName>{user.name}</S.PopUserSetName>
              <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <Link to = {appRoutes.EXIT}>
              <S.ButtonUser>
                Выйти
              </S.ButtonUser>
              </Link>
            </S.HeaderPopUserSet>)}
          </S.HeaderNav>
        </S.HeaderBlock>
      </B.Container>
    </S.Header>
  );
};

export default Header;
