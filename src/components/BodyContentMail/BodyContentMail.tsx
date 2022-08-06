import React from 'react';
import { Outlet } from 'react-router-dom';
import FolderLetters from '../FolderLetters/FolderLetters';
import './style.css'

interface BodyContentMailProps {
   folderType: String,
   curValueType: String,
}

const BodyContentMail: React.FC<BodyContentMailProps> = ({ folderType, curValueType }) => {

   return (
      <div className='container'>
         <Outlet />

         <FolderLetters
            curValueType={curValueType}
            folderType={folderType}
         />

      </div>
   );
}

export default BodyContentMail;