import React, { useState } from 'react';

interface valueInterface {
   user: String,
   signin: (newUser: String, password: String, cb: Function) => void,
   signout: (cb: Function) => void
}

export const AuthContext = React.createContext<valueInterface>({
   user: '',
   signin(newUser, password, cb) { },
   signout(cb: Function) { }
})

interface AuthProviderProps {
   children: any
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))
   const [user, setUser] = useState(userData.user || '')
   const [password, setPassword] = useState(userData.password || '')

   const signin = (newUser: string, password: string, cb: Function) => {
      setUser(newUser)
      setPassword(password)
      cb = () => { }
   }
   const signout = (cb: Function) => {
      setUser('')
      setPassword('')
      cb = () => { }
   }

   const value: any = { user, password, signin, signout }

   return <AuthContext.Provider value={value} >
      {children}
   </AuthContext.Provider>;
}

export default AuthProvider;