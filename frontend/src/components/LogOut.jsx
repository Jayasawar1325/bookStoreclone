import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/authContext'
const LogOut = () => {
    const {authUser,setAuthUser}= useAuth()
    const handleLogOut= ()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('Users')
            toast.success("LogOut Successfully")
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
        
        catch(err){
            toast.error('Error : ',err.message)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div>
    <button className='px-3 py-2 bg-red-500 rounded-md text-white' onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default LogOut