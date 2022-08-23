import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { lettersInFolder } from '../../store/action-creator/folder';
import { addDraftLetterAction, addOutgoinLetterAction } from '../../store/redusers/folderReduser';
import './style.scss'

interface WriteLetterProps { }

const WriteLetter: React.FC<WriteLetterProps> = () => {
   const navigate = useNavigate()
   const [name, setName] = useState(JSON.parse(localStorage.getItem('user')!) || 'Not user')
   const [inputwhom, setInputWhom] = useState('')
   const [textwhom, setTextWhom] = useState('')
   const dispath = useDispatch()

   const addToDrafts = () => {
      if (inputwhom.length !== 0) {
         const userLetterDraft: lettersInFolder = {
            id: +new Date(),
            value: textwhom,
            autor: inputwhom,
            date: new Date().toLocaleDateString(),
            chect: true,
            label: false,
         }
         dispath(addDraftLetterAction(userLetterDraft))
         alert('Saved successfully in Drafts')
         setInputWhom('')
         setTextWhom('')
      } else {
         setInputWhom('Min length 5 simbols')
      }
   }
   const addToOutgoin = () => {
      if (inputwhom.length !== 0) {
         const userLetterOut: lettersInFolder = {
            id: +new Date(),
            value: textwhom,
            autor: inputwhom,
            date: new Date().toLocaleDateString(),
            chect: true,
            label: false,
         }
         dispath(addOutgoinLetterAction(userLetterOut))
         alert('Sent successfully')
         setInputWhom('')
         setTextWhom('')
      } else {
         setInputWhom('Min length 5 simbols')
      }
   }

   return (
      <div
         className='content-block'
      >
         <button
            className='close-letter'
            onClick={() => navigate('/Inbox')}
         >
            <FontAwesomeIcon icon={['fas', 'xmark']} />
         </button>
         <div className='block-form'>
            <div className='block-name'>
               From whom: {name.user}
            </div>
            <div className='block-name'>
               To whom: <input
                  className='block-input'
                  value={inputwhom}
                  type='text'
                  placeholder='Name user...'
                  onChange={(e) => setInputWhom(e.target.value)}
               />
            </div>
            <div className='block-name'>
               <textarea
                  className='block-textarea'
                  placeholder='Entering text...'
                  maxLength={800}
                  suppressContentEditableWarning={true}
                  value={textwhom}
                  contentEditable
                  onChange={(e) => setTextWhom(e.target.value)}
               />
            </div>
         </div>
         <div className='btn-blockcontainer'>
            <button
               className='block-btn'
               onClick={() => addToDrafts()}
            >
               Drafts
            </button>
            <button
               className='block-btn'
               onClick={() => addToOutgoin()}
            >
               Send
            </button>
         </div>
      </div>
   );
}

export default WriteLetter;