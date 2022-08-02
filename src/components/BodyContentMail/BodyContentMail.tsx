import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import FolderLetters from '../FolderLetters/FolderLetters';
import TitleBlockMail from '../titleBlockMail/TitleBlockMail';
import './style.css'

interface BodyContentMailProps {
   setFolder: Function,
   secondFolderLetter: lettersInFolder[],
   folderType: String,

}

const BodyContentMail: React.FC<BodyContentMailProps> = ({ setFolder, secondFolderLetter, folderType }) => {
   // const { folder } = useTypeSelector(state => state.bigReduser)
   // const totalKeys = { ...folder.bigFolder }
   // const keys = Object.keys(totalKeys)

   return (
      <div className='container'>
         <Outlet />

         {/* <TitleBlockMail
            keys={keys}
            setFolder={setFolder}
         /> */}

         <FolderLetters
            secondFolderLetter={secondFolderLetter}
            folderType={folderType}
         />


      </div>
   );
}

export default BodyContentMail;