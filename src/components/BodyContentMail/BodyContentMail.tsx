import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import TitleBlockMail from '../titleBlockMail/TitleBlockMail';
import './style.css'

interface BodyContentMailProps {
   lookAtLetter: Function,
   setFolder: Function,
   secondFolderLetter: lettersInFolder[],

}

const BodyContentMail: React.FC<BodyContentMailProps> = ({ setFolder, secondFolderLetter, lookAtLetter }) => {
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
                        lookAtLetter={lookAtLetter}
                        item={item}
                        index={index}
                        key={index}
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