import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import SettingUser from './settingAcc/SettingUser';
import './style.scss'

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
         <CSSTransition
            in={visionUserDate}
            timeout={1000}
            classNames="my-menu"
            mountOnEnter
            unmountOnExit
         >
            <SettingUser
               offVision={offVision}
            />
         </CSSTransition>

      </>
   );
}

export default HeaderMail;