import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../page/LoginScreen/LoginScreen'
import PostScreen from "../page/PostScreen/PostScreen";

function Rotas(props){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginScreen/>}/>
            <Route path="home" element={<PostScreen news={props.news} setNews={props.setNews}/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas