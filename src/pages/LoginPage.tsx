import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react'
import { Context } from '..';

function LoginPage() {
  const {auth} = useContext(Context)

    const login = async ()=>{
      try {
        const provider = new GoogleAuthProvider()
        const { user } = await signInWithPopup(auth,provider)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <button onClick={login}>Google</button>  
    )
}

export default LoginPage
