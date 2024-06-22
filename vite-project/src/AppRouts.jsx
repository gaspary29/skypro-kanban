import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegPage from "./pages/RegistrationPage/RegistrationPage";
import ExitPage from "./pages/ExitPage";
import AddTaskPage from "./pages/AddTustPage/AddTuskPage";
import { appRoutes } from "./lib/AppRoutes";


function AppRoutes() {


  return (
    
    // <Routes>
    //   <Route path={appRoutes.LOGIN} element={<LoginPage />} />
    //   <Route path={appRoutes.REGISTR} element={<RegPage />} />
    //   <Route element={<PrivateRoute/>}>
    //     <Route path={appRoutes.HOME} element={<MainPage  />}>
    //     <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
    //       <Route path={appRoutes.CARD} element={<CardPage />} />
    //       <Route path={appRoutes.EXIT} element={<ExitPage/>} />
    //     </Route>
    //   </Route>
    // </Routes>

<Routes>
<Route element={<PrivateRoute />}>
  <Route path={appRoutes.HOME} element={<MainPage />}>
    <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
    <Route path={appRoutes.CARD} element={<CardPage />} />
    <Route path={appRoutes.EXIT} element={<ExitPage />} />
  </Route>
</Route>
<Route path={appRoutes.LOGIN} element={<LoginPage />} />
<Route path={appRoutes.REGISTR} element={<RegPage/>} />
</Routes>
  );
}

export default AppRoutes;

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
