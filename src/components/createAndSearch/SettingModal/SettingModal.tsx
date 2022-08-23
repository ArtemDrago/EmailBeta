import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NewFolder } from '../../../store/action-creator/folder';
import { addFolderAction } from '../../../store/redusers/folderReduser';
import MyModal from '../../UI/modal/MyModal';
import './style.scss'

interface SettingModalProps {
   setVisible: Function,
   visible: boolean
}

const SettingModal: React.FC<SettingModalProps> = ({ visible, setVisible }) => {

   const [createInput, setCreateInput] = useState('')
   const dispatch = useDispatch()

   const newFolder = () => {
      const newFolder = {
         id: new Date(),
         letters: [],
         changeFolder: true,
      }
      if (!/^[0-9]+$/.test(createInput) && createInput?.length != 0) {
         const obj: NewFolder = {}
         Object.assign(obj, { [`${createInput}`]: newFolder })
         dispatch(addFolderAction(obj))
      }
      else {
         alert('Folder name not specified')
      }
      setVisible(false)
      setCreateInput('')
   }

   return (
      <MyModal
         visible={visible}
         setVisible={setVisible}
      >
         <h3 className='title-change'>Create a new folder</h3>
         <input
            className='my-input'
            type="text"
            placeholder='Enter a folder name'
            value={createInput}
            onChange={e => setCreateInput(e.target.value)} />
         <button
            className='btn'
            onClick={() => newFolder()}
         >
            Create
         </button>
      </MyModal>
   );
}

export default SettingModal;