import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
import mount from '../../../resources/images/mount.jpg'
import { useTheme } from '../../../hooks/useThems';

interface SettingUserProps {
   offVision: Function
}

const SettingUser: React.FC<SettingUserProps> = ({ offVision }) => {
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))
   const [name, setName] = useState(userData.user)

   const { theme, setTheme } = useTheme()

   const handleLightThemeClick = () => {
      setTheme('light')
   }
   const handleDarkThemeClick = () => {
      setTheme('dark')
   }

   return (
      <div className='setting-header'>

         <div className='user-content'>
            <button
               onClick={() => offVision()}
               className="close-usercontent"
            >
               X
            </button>
            <div className='imgand-name'>
               <div className="image-row">
                  <img className='image' src={mount} alt="" />
               </div>
               <h3 className='title-name'>
                  {name}
               </h3>
            </div>
         </div>

         <hr className='line' />
         <h3 className='title-them'>
            Change them
         </h3>
         <div className='them-conyainer'>
            <button
               className='btn-them'
               onClick={() => handleDarkThemeClick()}
            >
               dark
            </button>
            <button
               className='btn-them'
               onClick={() => handleLightThemeClick()}
            >
               light
            </button>
         </div>
         <hr className='line' />
         <Link
            className='btn-signout'
            to={'/registrate'}
            onClick={() => offVision()}
         >
            Sign out
         </Link>
      </div>
   );
}

export default SettingUser;