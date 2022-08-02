import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder, NewFolder } from '../../store/action-creator/folder';
import BodyContentMail from '../BodyContentMail/BodyContentMail';

import SettingBox from '../createAndSearch/SettingBox';
import FolderLetters from '../FolderLetters/FolderLetters';
import FolderName from '../folderName/FolderName';
import FullScrinLetter from '../FullScrinLetter/FulScrinLetter';
import TitleBlockMail from '../titleBlockMail/TitleBlockMail';
import './BodyMail.css'


const BodyMail: React.FC = () => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderLetter, setFolderLetter] = React.useState<Array<lettersInFolder>>([])
   const [folderType, setFolderType] = React.useState<string>('Inbox')
   const [secondFolderLetter, setSecondFolderLetter] = useState(folderLetter)
   const [curValueType, setCurValueType] = useState('')

   const filterFolder = (str: string) => {
      setCurValueType(str)
   }

   useMemo(() => {
      setSecondFolderLetter(folderLetter)
      if (curValueType) {
         return setSecondFolderLetter(folderLetter.filter(folder =>
            folder.value.toLowerCase().includes(curValueType.toLowerCase())
         ))
      }
      return secondFolderLetter
   }, [curValueType, folderLetter])

   useMemo(() => {
      setFolderLetter(folder.bigFolder.Inbox.letters)
   }, [])

   useEffect(() => {
      const arrFolder = folder.bigFolder
      const thisFolder = Object.getOwnPropertyDescriptor(arrFolder, folderType)
      setFolderLetter(thisFolder?.value.letters)
   }, [folderType])

   const setFolder = (item: string) => {
      setFolderType(item)
   }
   const totalKeys = { ...folder.bigFolder }
   const keys = Object.keys(totalKeys)

   return (
      <div className='wrapper'>
         <Routes>
            <Route
               path='/'
               element={<SettingBox
                  filterFolder={filterFolder}
               />} >
               <Route
                  path='/:folderType/:id'
                  element={<FullScrinLetter
                     secondFolderLetter={secondFolderLetter}
                  />}
               />
               <Route
                  path='/'
                  element={<BodyContentMail
                     folderType={folderType}
                     setFolder={setFolder}
                     secondFolderLetter={secondFolderLetter}
                  />}
               >
                  <Route
                     path='/'
                     element={<TitleBlockMail
                        keys={keys}
                        setFolder={setFolder}
                     />
                     }
                  />

               </Route>
            </Route>
         </Routes>
      </div>
   );
}

export default BodyMail;