import React, { useState } from 'react';
import SettingUser from './settingAcc/SettingUser';
import './style.css'

const HeaderMail: React.FC = () => {
   const [visionUserDate, setVisionUserDate] = useState(false)

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
            <button
               className='btn-control'
               onClick={() => onVision()}
            >
               Out Mail
            </button>
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