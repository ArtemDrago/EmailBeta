import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFolderAction, deliteFolderAction } from '../../../store/redusers/folderReduser';
import MyModal from '../../UI/modal/MyModal';
import './style.scss'

interface CastomFlutersProps {
    item: string,
}

const CastomFluters: React.FC<CastomFlutersProps> = ({ item }) => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const [valueInput, setValueInput] = useState('')

    const remuvFolder = (item: string, e: any) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(deliteFolderAction(item))
        document.location.pathname = '/Inbox'
    }
    const changeTitleFolderVisible = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(true)
    }
    const changeTitleFolder = (e: any, item: string) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(false)
        if (!/^[0-9]+$/.test(valueInput) && valueInput.length != 0) {
            dispatch(changeFolderAction([item, valueInput]))
        }
        dispatch(changeFolderAction([item, 'Folder name']))
        setValueInput('')
    }
    return (
        <div className='btn-container'>
            <button
                className='btn-change'
                onClick={e => changeTitleFolderVisible(e)}
            >
                <FontAwesomeIcon icon={['fas', 'pen']} />
            </button>
            <MyModal
                visible={visible}
                setVisible={setVisible}
            >
                <h3 className='title-change'>
                    Change folder name
                </h3>
                <input
                    className='my-input'
                    type="text"
                    placeholder='Enter a new folder name'
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value)}
                />
                <button
                    className='btn'
                    onClick={e => changeTitleFolder(e, item)}
                >
                    Change
                </button>
            </MyModal>
            <button
                className='btn-remuve'
                onClick={e => remuvFolder(item, e)}
            >
                <FontAwesomeIcon icon={['fas', 'trash']} />
            </button>

        </div>
    );
}

export default CastomFluters;