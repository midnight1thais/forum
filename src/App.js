// import { BrowserRouter, Route, Routes } from "react-router-dom";

import StyledGlobal from "./styledGlobal.jsx";
import { ChakraProvider } from '@chakra-ui/react'

// import LoginScreen from "./page/LoginScreen/LoginScreen";
// import RegisterScreen from "./page/RegisterScreen/RegisterScreen";
// import PostScreen from "./page/PostScreen/PostScreen";
import MyPostNew from "./page/MyPostNew/MyPostNew.js";

function App() {
  return (
    <>
      <ChakraProvider>
      <StyledGlobal/>
      <MyPostNew/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginScreen}/>
          <Route path="/register" Component={RegisterScreen}/>
          <Route path="/home" Component={PostScreen}/>
        </Routes>
      </BrowserRouter> */}
      </ChakraProvider>
    </>
  );
}

export default App;
