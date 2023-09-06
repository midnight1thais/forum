import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../page/LoginScreen/LoginScreen'
import PostScreen from "../page/PostScreen/PostScreen";

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginScreen/>}/>
            <Route path="home" element={<PostScreen/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas