import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import TitleBlockMail from '../titleBlockMail/TitleBlockMail';
import './style.css'

interface BodyContentMailProps {
   setFolder: Function,
   secondFolderLetter: lettersInFolder[],
   folderType: String,

}

const BodyContentMail: React.FC<BodyContentMailProps> = ({ setFolder, secondFolderLetter, folderType }) => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const totalKeys = { ...folder.bigFolder }
   const keys = Object.keys(totalKeys)

   return (
      <div className='container'>

         <TitleBlockMail
            keys={keys}
            setFolder={setFolder}
         />

         <div className='value-folder'>

            {secondFolderLetter.length > 0 ?

               <div className='email-box'>
                  {secondFolderLetter.map((item, index) =>
                     <ContentFolderEmails
                        item={item}
                        index={index}
                        key={index}
                        folderType={folderType}
                     />
                  )}
               </div>
               :
               <div
                  className='not-content'
               >
                  Emails not found
               </div>
            }
         </div>


      </div>
   );
}

export default BodyContentMail;