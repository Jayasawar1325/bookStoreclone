import React, { createContext, useContext , useState} from 'react'

export const AuthContext = createContext()
const AuthProvider = ({children})=>{
    const initialAuthUser = localStorage.getItem('Users')
    const [authUser,setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined)
    return(
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export default AuthProvider