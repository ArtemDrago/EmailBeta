import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { NewFolder } from '../../store/action-creator/folder';
import { addFolderAction, readAllAction } from '../../store/redusers/folderReduser';
import MyModal from '../UI/modal/MyModal';

import './style.css'

interface SettingBoxProp {
    filterFolder: Function,

}

const SettingBox: React.FC<SettingBoxProp> = ({ filterFolder }) => {

    const [inputValue, setInputValue] = React.useState<string>('')
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [createInput, setCreateInput] = useState('')

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
    useEffect(() => {
        filterFolder(inputValue)
    }, [inputValue])

    const readAllEmails = () => {
        dispatch(readAllAction())
    }

    return (
        <>
            <div className='setting'>
                <div>
                    <button
                        className='btn-create'
                        onClick={() => setVisible(true)}
                    >
                        Create folder
                    </button>
                    <button
                        className='btn-create'
                        onClick={() => readAllEmails()}
                    >
                        Read all
                    </button>
                </div>
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

                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className='input-search'
                    type='text'
                    placeholder="Search for emails..." />
            </div>
            <Outlet />
        </>
    );
}

export default SettingBox;

function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
}
