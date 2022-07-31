import React, { useEffect, useMemo, useState } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder, NewFolder } from '../../store/action-creator/folder';
import BodyContentMail from '../BodyContentMail/BodyContentMail';

import SettingBox from '../createAndSearch/SettingBox';
import FullScrinLetter from '../FullScrinLetter/FulScrinLetter';
import './BodyMail.css'


const BodyMail: React.FC = () => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderLetter, setFolderLetter] = React.useState<Array<lettersInFolder>>([])
   const [folderType, setFolderType] = React.useState<string>('Inbox')
   const [secondFolderLetter, setSecondFolderLetter] = useState(folderLetter)
   const [curValueType, setCurValueType] = useState('')
   const [visibleLetter, setVisibleLetter] = useState(false)
   const [fullItem, setFullItem] = useState<lettersInFolder>()

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

   const lookAtLetter = (item: lettersInFolder) => {
      setFullItem(item)
      setVisibleLetter(true)
   }

   const closeFullScrin = () => {
      setVisibleLetter(false)
   }


   return (
      <div className='wrapper'>
         <SettingBox
            filterFolder={filterFolder}
         />
         {visibleLetter
            ? <FullScrinLetter
               closeFullScrin={closeFullScrin}
               fullItem={fullItem}
            />
            : <BodyContentMail
               lookAtLetter={lookAtLetter}
               setFolder={setFolder}
               secondFolderLetter={secondFolderLetter}
            />
         }


      </div>
   );
}

export default BodyMail;