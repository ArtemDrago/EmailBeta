import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css'

const HeaderMail: React.FC = () => {
   return (
      <div className='header'>
         <span className='logo'>Beta-Logo</span>
         <Outlet />
      </div>
   );
}

export default HeaderMail;