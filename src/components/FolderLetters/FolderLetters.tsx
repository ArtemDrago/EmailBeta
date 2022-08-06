import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import './style.css'

interface FolderLettersProps {
   folderType: String,
   curValueType: String,
}

const FolderLetters: React.FC<FolderLettersProps> = ({ curValueType }) => {
   const { folderType } = useParams()
   const current = folderType || 'Inbox'
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderMass, setFolderMass] = React.useState<Array<lettersInFolder>>([])
   const [secondFolder, setSecondFolder] = useState(folderMass)

   const isFolder = () => {
      if (folder.bigFolder[`${current}`] === undefined) {
         setFolderMass(folder.bigFolder.Inbox.letters)
      } else {
         setFolderMass(folder.bigFolder[`${current}`].letters)
      }
   }

   useMemo(() => {
      isFolder()
   }, [])

   useEffect(() => {
      isFolder()
   }, [current, folderType])

   useEffect(() => {
      setSecondFolder(folderMass)
   }, [folderMass])

   useMemo(() => {
      setSecondFolder(folderMass)
      if (curValueType) {
         return setSecondFolder(folderMass.filter((folder) =>
            folder.value.toLowerCase().includes(curValueType.toLowerCase())
         ))
      }
      return secondFolder
   }, [curValueType, current])

   return (
      <div className='value-folder'>

         {secondFolder.length > 0 ?

            <div className='email-box'>
               {secondFolder.map((item: lettersInFolder, index: number) =>
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