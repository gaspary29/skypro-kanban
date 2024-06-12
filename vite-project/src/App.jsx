import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/AppRoutes";
import ExitPage from "./pages/ExitPage";

function App() {
  // const [cards, setCards] = useState(cardList);
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate(appRoutes.MAIN);
  };
  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
    navigate(appRoutes.LOGIN);
  };

  return (
    <Routes>
      <Route path={appRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={appRoutes.REGISTR} element={<RegPage />} />
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// return (
//   <>
//   <GlobalStyle/>
//   <div className="wrapper">
//     <PopExit />
//     <PopNewCard />
//     <PopBrowse />
//     <Header setCards={setCards} cards={cards} />
//     <Main cardList={cards} />
//   </div>
//   </>
// );
