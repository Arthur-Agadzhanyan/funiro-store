import React from 'react'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage';
import { privateRoutes, publicRoutes } from '../routes';

interface Props {
    isAuth: boolean
}

function AppRouter({isAuth}: Props) {
    if(isAuth){ // if user authorized, *not admin*
        return(
            <Routes>
                {privateRoutes.map(({path,Component})=>(
                    <Route path={path} element={<Component/>} />
                ))}
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes> 
        )
    }

    return ( // if user not authorized
        <Routes>
            {publicRoutes.map(({path,Component})=>(
                <Route path={path} element={<Component/>} />
            ))}
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes> 
    )
}

export default AppRouter
