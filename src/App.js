import { BrowserRouter, Route, Routes } from "react-router-dom";

import StyledGlobal from "./StyledGlobal";

import LoginScreen from "./page/LoginScreen/LoginScreen";
import RegisterScreen from "./page/RegisterScreen/RegisterScreen";
import PostScreen from "./page/PostScreen/PostScreen";
import CreatePost from "./components/CreatePost/CreatePost";
import Rotas from "./rotas/Rotas";

function App() {
  return (
    <>
      <StyledGlobal/>
      <Rotas/>
     
    </>
  );
}

export default App;
