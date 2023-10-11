// import { BrowserRouter, Route, Routes } from "react-router-dom";

import StyledGlobal from "./StyledGlobal";

// import LoginScreen from "./page/LoginScreen/LoginScreen";
// import RegisterScreen from "./page/RegisterScreen/RegisterScreen";
// import PostScreen from "./page/PostScreen/PostScreen";
// import AccountScreen from "./page/AccountScreen/AccountScreen";
// import AccountEditScreen from "./page/AccountEditScreen/AccountEditScreen";
import Rotas from "./rotas/Rotas";
import { useState } from "react";


function App() {

  const [news, setNews] = useState([]);
  return (
    <>
      <StyledGlobal/>
      <Rotas new={news} setNews={setNews}/>
    
    </>
  );
}

export default App;
