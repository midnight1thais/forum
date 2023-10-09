// import { BrowserRouter, Route, Routes } from "react-router-dom";

import StyledGlobal from "./StyledGlobal";
import AddSubject from "./components/AddSubject/AddSubject";
import ChangePass from "./components/ChangePass/ChangePass";
import DeletePopUp from "./components/DeletePopUp/Delete";

// import LoginScreen from "./page/LoginScreen/LoginScreen";
// import RegisterScreen from "./page/RegisterScreen/RegisterScreen";
// import PostScreen from "./page/PostScreen/PostScreen";
// import AccountScreen from "./page/AccountScreen/AccountScreen";
// import AccountEditScreen from "./page/AccountEditScreen/AccountEditScreen";
// import Rotas from "./rotas/Rotas";


function App() {
  return (
    <>
      <StyledGlobal/>
      {/* <Rotas/> */}
      {/* <DeletePopUp/> */}
      {/* <AddSubject/> */}
      <ChangePass/>
    </>
  );
}

export default App;
