import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css'

interface BodyContentMailProps {
}

const BodyContentMail: React.FC<BodyContentMailProps> = ({ }) => {
   return (
      <div className='container'>
         <Outlet />
      </div>
   );
}

export default BodyContentMail;