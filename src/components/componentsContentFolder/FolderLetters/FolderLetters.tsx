import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { lettersInFolder } from '../../../store/action-creator/folder';
import ContentFolderEmails from '../contentFolderEmails/ContentFolderEmails';
import './style.css'

interface FolderLettersProps {
   choiceLeters: boolean,
   curValueType: String,
   closeChoiseMenu: Function,
   setChoiceMail: Function,
   chectAllItems: boolean,
   removeSelectionAll: boolean
}

const FolderLetters: React.FC<FolderLettersProps> = ({ curValueType, choiceLeters, closeChoiseMenu,
   setChoiceMail, chectAllItems, removeSelectionAll }) => {
   const { folderType } = useParams()
   const current = folderType || 'Inbox'
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderMass, setFolderMass] = React.useState<Array<lettersInFolder>>([])
   const [secondFolder, setSecondFolder] = useState(folderMass)
   const [currentArr, setcurrentArr] = React.useState<Array<lettersInFolder>>([])


   const isFolder = () => {
      if (folder.bigFolder[`${current}`] === undefined) {
         setFolderMass(folder.bigFolder.Inbox.letters)
         document.location.pathname = '/Inbox'
      } else {
         setFolderMass(folder.bigFolder[`${current}`].letters)
      }
   }
   useMemo(() => {
      isFolder()
   }, [folder])

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

   const addLeterMail = (item: lettersInFolder) => {
      const curArrItems = [...currentArr, item]
      if (currentArr.includes(item)) {
         setcurrentArr(currentArr.filter(el => el !== item))
      } else {
         setcurrentArr(curArrItems)
      }
   }

   useEffect(() => {
      setcurrentArr([])
      closeChoiseMenu()
   }, [current])

   useEffect(() => {
      setChoiceMail(currentArr)
   }, [currentArr])

   function check(field: any, flag: number) {
      if (flag == 1) {
         for (let i = 0; i < field.length; i++) {
            field[i].checked = true;
         }
      } else {
         for (let i = 0; i < field.length; i++) {
            field[i].checked = false;
         }
      }
   }

   useEffect(() => {
      let checkList = document.querySelectorAll('.check')
      check(checkList, 1)
      setcurrentArr(folderMass)
   }, [chectAllItems])

   useEffect(() => {
      let checkList = document.querySelectorAll('.check')
      check(checkList, 0)
      setcurrentArr([])
   }, [removeSelectionAll, secondFolder])


   return (
      <div className='value-folder'>

         {secondFolder.length > 0 ?

            <div className='email-box'>
               {secondFolder.map((item: lettersInFolder, index: number) =>
                  <ContentFolderEmails
                     item={item}
                     key={index}
                     folderType={folderType}
                     choiceLeters={choiceLeters}
                     addLeterMail={addLeterMail}
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