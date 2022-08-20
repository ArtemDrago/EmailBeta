import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { lettersInFolder } from '../../../store/action-creator/folder';
import { deilteLetersAction, moveToFolderLetersAction, readItemsAction } from '../../../store/redusers/folderReduser';
import './style.css'

interface SetingLeterMenuProps {
   choiceMail: lettersInFolder[],
   setSwitchItemsState: Function,
   getSwitchItemsState: Function,
   keys: string[]
}

const SetingLeterMenu: React.FC<SetingLeterMenuProps> = ({ choiceMail, setSwitchItemsState,
   getSwitchItemsState, keys }) => {

   const { folderType } = useParams()
   const current = folderType || 'Inbox'
   const dispatch = useDispatch()
   const filterKeys = keys.filter(item => item !== "Remote" && item !== "Inbox" && item !== current)
   const [moveToFolder, setMoveToFolder] = useState('')

   filterKeys.unshift('select folder')

   useEffect(() => {
      const buttonList = document.querySelectorAll('.action-mail')
      if (choiceMail.length === 0) {
         buttonList[2].classList.add('disable')
         buttonList[3].classList.add('disable')
      } else {
         buttonList[2].classList.remove('disable')
         buttonList[3].classList.remove('disable')
      }
   }, [choiceMail])

   const switchStateItems = () => {
      setSwitchItemsState()
   }
   const switchState = () => {
      getSwitchItemsState()
   }
   const readItemSwitch = () => {
      dispatch(readItemsAction({
         folderType: current,
         items: choiceMail
      }))
   }
   const deliteItemSwitch = () => {
      dispatch(deilteLetersAction({
         folderType: current,
         item: choiceMail
      }))
   }

   const changeMoveTo = () => {

      dispatch(moveToFolderLetersAction({
         oldFolder: current,
         newFolder: moveToFolder,
         items: choiceMail
      }))
   }
   useEffect(() => {
      if (choiceMail.length != 0) {
         changeMoveTo()
      }
   }, [moveToFolder])

   return (
      <div
         className='conteiner-seting'
      >
         <button
            className='action-mail'
            onClick={() => switchStateItems()}
         >
            Choose all
         </button>
         <button
            className='action-mail'
            onClick={() => switchState()}
         >
            Remove selection
         </button>
         <button
            className='action-mail'
            onClick={() => readItemSwitch()}
            disabled={choiceMail.length > 0 ? false : true}
         >
            Read
         </button>
         <button
            className='action-mail'
            onClick={() => deliteItemSwitch()}
            disabled={choiceMail.length > 0 ? false : true}
         >
            Delite
         </button>
         <select
            className='select-folder'
            onChange={(e) => setMoveToFolder(e.target.value)}
            defaultValue='select folder'
         >
            {filterKeys.map((item, index) =>
               <option
                  className='options-folder'
                  key={index}
                  value={item}
                  disabled={(index === 0) ? true : false}
               >
                  {item}
               </option>

            )}
         </select>
      </div>
   );
}

export default SetingLeterMenu;