import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../page/LoginScreen/LoginScreen'

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginScreen/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas