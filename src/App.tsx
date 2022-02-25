import React, { useCallback, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from ".";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/AppRouter";

export default function App() {
  const {auth} = useContext(Context)
  const [user,loading,error] = useAuthState(auth)

  if(loading){
    return <h1>Загрузка</h1>
  }

  return (
    <Router>
      <NavBar/>
      <AppRouter isAuth={!!user}/>
    </Router>
  );
}