import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SettingUser from './settingAcc/SettingUser';
import './style.css'

const HeaderMail: React.FC = () => {
   const [visionUserDate, setVisionUserDate] = useState(false)
   const locale = useLocation()

   const onVision = () => {
      setVisionUserDate(true)
   }

   const offVision = () => {
      setVisionUserDate(false)
   }

   return (
      <>
         <div className='header'>
            <span className='logo'>Beta-Logo</span>
            {(locale.pathname === '/registrate')
               ? <></>
               :
               <button
                  className='btn-control'
                  onClick={() => onVision()}
               >
                  Out Mail
               </button>
            }

         </div>
         {visionUserDate ?
            <SettingUser
               offVision={offVision}
            />
            :
            <></>
         }
      </>
   );
}

export default HeaderMail;