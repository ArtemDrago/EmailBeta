import React from 'react';
import { lettersInFolder } from '../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import './style.css'

interface FolderLettersProps {
   secondFolderLetter: lettersInFolder[],
   folderType: String
}

const FolderLetters: React.FC<FolderLettersProps> = ({ secondFolderLetter, folderType }) => {
   return (
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
   );
}

export default FolderLetters;