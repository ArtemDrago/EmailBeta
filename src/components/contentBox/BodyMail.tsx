import React, { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { store } from '../../store';
import BodyContentMail from '../BodyContentMail/BodyContentMail';
import SettingBox from '../createAndSearch/SettingBox';
import FolderLetters from '../FolderLetters/FolderLetters';
import FullScrinLetter from '../FullScrinLetter/FulScrinLetter';
import TitleBlockMail from '../titleBlockMail/TitleBlockMail';
import './BodyMail.css'

const BodyMail: React.FC = () => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const [folderType, setFolderType] = React.useState<string>('Inbox')
   const [curValueType, setCurValueType] = useState('')

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

   return (
      <div className='wrapper'>
         <Routes>
            <Route
               path='/'
               element={<SettingBox
                  filterFolder={filterFolder}
               />}
            >
               <Route
                  path='/:folderType/:id'
                  element={<FullScrinLetter
                     folderType={folderType}
                  />}
               />
               <Route
                  path=''
                  element={<BodyContentMail
                     curValueType={curValueType}
                     folderType={folderType}
                  />}
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
                           folderType={folderType}
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