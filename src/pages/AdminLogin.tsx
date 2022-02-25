import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react'
import { Context } from '..';

function AdminLoginPage() {
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
        <>
            <h1>Admin Login</h1>
            <button onClick={login}>Google</button>  
        </>
    )
}

export default AdminLoginPage
