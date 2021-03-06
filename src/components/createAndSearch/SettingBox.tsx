import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder, NewFolder } from '../../store/action-creator/folder';
import { addFolderAction, readAllAction } from '../../store/redusers/folderReduser';

import './style.css'

interface SettingBoxProp {
    filterFolder: Function,

}

const SettingBox: React.FC<SettingBoxProp> = ({ filterFolder }) => {

    const [inputValue, setInputValue] = React.useState<string>('')
    const dispatch = useDispatch()

    const newFolder = () => {
        const nameFolder = prompt()
        const newFolder = {
            id: new Date(),
            letters: [],
            changeFolder: true,
        }
        if (nameFolder?.length != 0) {

            const obj: NewFolder = {}
            Object.assign(obj, { [`${nameFolder}`]: newFolder })

            dispatch(addFolderAction(obj))
        }
        else {
            alert('Не указанно имя папки')
        }
    }
    useEffect(() => {
        filterFolder(inputValue)
    }, [inputValue])

    const readAllEmails = () => {
        dispatch(readAllAction())
    }

    return (
        <div className='setting'>
            <button
                className='btn-create'
                onClick={() => newFolder()}
            >
                Create folder
            </button>
            <button
                className='btn-create'
                onClick={() => readAllEmails()}
            >
                Read all
            </button>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='input-search'
                type='text'
                placeholder="Search for emails..."
            />

        </div>
    );
}

export default SettingBox;

function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
}
