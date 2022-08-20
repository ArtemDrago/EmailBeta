import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './style.css'

interface RegistrateProps {

}

const Registrate: React.FC<RegistrateProps> = ({ }) => {

   const navigate = useNavigate()
   const fromPage: any = '/Inbox'
   const { signin } = useAuth()
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))

   const nav: Function = () => {
      navigate(fromPage, { replace: true })
   }
   const [userName, setUserName] = useState(userData.user || '')
   const [userPassword, setUserPassword] = useState(userData.password || '')

   const handleSubmit = (e: any) => {
      e.preventDefault()
      signin(userName, userPassword, nav())
      localStorage.setItem('user', JSON.stringify({
         user: userName,
         password: userPassword
      }));
   }

   return (
      <div className='form-registratecontainer'>
         <form
            className='form-container'
            onSubmit={handleSubmit}
         >
            <h3 className='title-register'>Registration</h3>
            <label className='label-registrate'>
               <div className='register-field'>
                  Name:
               </div>
               <input
                  className='input-registrate'
                  name='username'
                  type='text'
                  value={userName}
                  placeholder='Login...'
                  onChange={e =>
                     setUserName(e.target.value)
                  }
               />
            </label>
            <label className='label-registrate'>
               <div className='register-field'>
                  Password:
               </div>
               <input
                  className='input-registrate'
                  name='password'
                  type='password'
                  value={userPassword}
                  placeholder='Password...'
                  onChange={e =>
                     setUserPassword(e.target.value)
                  }
               />
            </label>
            <button
               type='submit'
               className='btn-registrate'
            >
               login
            </button>
         </form>

      </div>
   );
}

export default Registrate;