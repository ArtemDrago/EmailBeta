import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

interface SettingUserProps {
   offVision: Function
}

const SettingUser: React.FC<SettingUserProps> = ({ offVision }) => {
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))
   const [name, setName] = useState(userData.user)

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

               </div>
               <h3 className='title-name'>
                  {name}
               </h3>
            </div>
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