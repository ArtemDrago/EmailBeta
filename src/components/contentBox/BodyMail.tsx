import React, { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { store } from '../../store';
import BodyContentMail from '../componentsContentFolder/BodyContentMail/BodyContentMail';
import SettingBox from '../createAndSearch/SettingBox';
import FolderLetters from '../componentsContentFolder/FolderLetters/FolderLetters';
import FullScrinLetter from '../FullScrinLetter/FulScrinLetter';
import TitleBlockMail from '../componentsFoldersName/titleBlockMail/TitleBlockMail';
import './BodyMail.css'
import { lettersInFolder } from '../../store/action-creator/folder';

const BodyMail: React.FC = () => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderType, setFolderType] = React.useState<string>('Inbox')
   const [curValueType, setCurValueType] = useState('')
   const [choiceLeters, setChoiceLetters] = useState(false)
   const [choiceMail, setChoiceMail] = React.useState<Array<lettersInFolder>>([])
   const [chectAllItems, setChectAllItems] = useState(false)
   const [removeSelectionAll, setRemoveSelectionAll] = useState(false)

   const filterFolder = (str: string) => {
      setCurValueType(str)
   }

   const rerenderUrl = () => {
      const urlPath = document.location.pathname
      if (urlPath == '/') {
         document.location.pathname = '/Inbox'
      }
   }

   useMemo(() => {
      localStorage.setItem('state', JSON.stringify(store.getState()));
      rerenderUrl()
   }, [])

   const setFolder = (item: string) => {
      setFolderType(item)
   }

   const totalKeys = { ...folder.bigFolder }
   const keys = Object.keys(totalKeys)

   const setChoice = () => {
      setChoiceLetters(!choiceLeters)
      if (choiceLeters === false) {
         setChoiceMail([])
      }
   }

   const closeChoiseMenu = () => {
      setChoiceLetters(false)
   }

   const setSwitchItemsState = () => {
      setChectAllItems(!chectAllItems)
   }
   const getSwitchItemsState = () => {
      setRemoveSelectionAll(!removeSelectionAll)
   }

   return (
      <div className='wrapper'>
         <Routes>
            <Route
               path='/'
               element={<SettingBox
                  filterFolder={filterFolder}
                  setChoice={setChoice}
                  choiceLeters={choiceLeters}
                  choiceMail={choiceMail}
                  setSwitchItemsState={setSwitchItemsState}
                  getSwitchItemsState={getSwitchItemsState}
               />}
            >
               <Route
                  path='/:folderTitle/:id'
                  element={<FullScrinLetter
                     folderType={folderType}
                  />}
               />

               <Route
                  path=''
                  element={<BodyContentMail />}
               >
                  <Route
                     path='/'
                     element={<TitleBlockMail
                        keys={keys}
                        setFolder={setFolder}
                     />
                     }
                  >
                     <Route
                        path=':folderType'
                        element={<FolderLetters
                           curValueType={curValueType}
                           choiceLeters={choiceLeters}
                           closeChoiseMenu={closeChoiseMenu}
                           setChoiceMail={setChoiceMail}
                           chectAllItems={chectAllItems}
                           removeSelectionAll={removeSelectionAll}
                        />
                        }
                     />

                     <Route
                        path='*'
                        element={<Navigate
                           to={`/Inbox`}
                        />}
                     />
                  </Route>
               </Route>
            </Route>

         </Routes>
      </div>
   );
}

export default BodyMail;