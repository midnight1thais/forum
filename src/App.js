import { BrowserRouter, Route, Routes } from "react-router-dom";

import StyledGlobal from "./StyledGlobal";

import LoginScreen from "./page/LoginScreen/LoginScreen";
import RegisterScreen from "./page/RegisterScreen/RegisterScreen";
import PostScreen from "./page/PostScreen/PostScreen";

function App() {
  return (
    <>
      <StyledGlobal/>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginScreen}/>
          <Route path="/register" Component={RegisterScreen}/>
          <Route path="/home" Component={PostScreen}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
