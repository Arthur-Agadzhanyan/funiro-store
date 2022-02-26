import React, { useCallback, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from ".";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import IconsHOC from "./utils/iconsHOC";

export default function App() {
  const {auth} = useContext(Context)
  const [user,loading,error] = useAuthState(auth)

  const Aboba = IconsHOC(()=>{
    return <h1>Aboba</h1>
  })

  if(loading){
    return <h1>Загрузка</h1>
  }

  return (
    <Router>
      <NavBar/>
      <Aboba className="green"/>
      <AppRouter isAuth={!!user}/>
    </Router>
  );
}