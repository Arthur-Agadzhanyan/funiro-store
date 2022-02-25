import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { Context } from '..'

function ProfilePage() {
    const {auth} = useContext(Context)

    const logout = async()=>{
        await signOut(auth)
                .then(()=>{
                    console.log('logined')
                }) 
                .catch((e)=>{
                    console.error(e)
                })
    }

    return (
        <>
            <h1>Profile Page</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default ProfilePage
