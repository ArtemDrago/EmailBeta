import React, { useEffect, useMemo, useState } from 'react';
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
import Registrate from '../registrate/Registrate';
import RequireAuth from '../hoc/RequireAuth';
import AuthProvider from '../../context/AuthProvider';

const BodyMail: React.FC = () => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderType, setFolderType] = React.useState<string>('Inbox')
   const [curValueType, setCurValueType] = useState('')
   const [choiceLeters, setChoiceLetters] = useState(false)
   const [choiceMail, setChoiceMail] = React.useState<Array<lettersInFolder>>([])
   const [chectAllItems, setChectAllItems] = useState(false)
   const [removeSelectionAll, setRemoveSelectionAll] = useState(false)
   const [changeSelectFilter, setChangeSelectFilter] = useState('All')
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))

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
      localStorage.setItem('user', JSON.stringify({
         user: userData.user || '',
         password: userData.password || ''
      }));
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
         <AuthProvider>
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
                     setChangeSelectFilter={setChangeSelectFilter}
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
                     element={
                        <RequireAuth>
                           <BodyContentMail />
                        </RequireAuth>
                     }
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
                              changeSelectFilter={changeSelectFilter}
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

               <Route
                  path='/registrate'
                  element={<Registrate
                  />}
               />
            </Routes>
         </AuthProvider>
      </div >
   );
}

export default BodyMail;