import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from '../page/LoginScreen/LoginScreen'
import PostScreen from "../page/PostScreen/PostScreen";
import AccountScreen from "../page/AccountScreen/AccountScreen";
import RegisterScreen from "../page/RegisterScreen/RegisterScreen";
import PostOpenedScreen from "../page/PostOpenedScreen/PostOpenedScreen"


const PrivateRoutes = ({children, redirectTo}) => {
    const isAuthenticated = localStorage.getItem("@Auth:token") !== null;
    console.log('isAuth', isAuthenticated)
    return isAuthenticated === true ? children : <Navigate to={redirectTo}/>
}

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginScreen/>}/>
            <Route path="register" element={<RegisterScreen/>}/>
            <Route path="opened_screen" element={<PrivateRoutes redirectTo={'/'}>
                <PostOpenedScreen/>
            </PrivateRoutes>}/>
            <Route path="home" element={<PrivateRoutes redirectTo={'/'}>
                <PostScreen/>
            </PrivateRoutes>}/>
            <Route path="account" element={ <PrivateRoutes redirectTo={'/'}>
                <AccountScreen/>
            </PrivateRoutes>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas