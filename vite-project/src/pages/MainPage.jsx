import { useState } from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { GlobalStyle } from "../Global.styled";
import { Outlet } from "react-router-dom";
import { getTodos } from "../api";

function MainPage() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoding, setLoding] = useState(true);

  userEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodos({
          token: user.token,
        });
        setCards(response.tasks);
      } catch (error) {
        console.error(error);
        setError("Ошибка при получении задач");
      } finally {
        setLoding(false);
      }
    };
    fetchData();
  }, [user.token]);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Outlet />
        <Header 
        setCards={setCards}
         cards={cards} 
         setAuth = {setAuth}
         setUser = {setUser}
         />
        {error && <p> {error}</p>}
        {!error && <Main cardList={cards} isLoding={isLoding} />}
      </div>
    </>
  );
}
export default MainPage;
