import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFolderAction, deliteFolderAction } from '../../store/redusers/folderReduser';
import MyModal from '../UI/modal/MyModal';
import './style.css'

interface CastomFlutersProps {
    setFolder: Function,
    item: string,
}

const CastomFluters: React.FC<CastomFlutersProps> = ({ item, setFolder }) => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const [valueInput, setValueInput] = useState('')

    const remuvFolder = (item: string, e: any) => {
        e.stopPropagation()
        dispatch(deliteFolderAction(item))
        setFolder('Входящие')
    }
    const changeTitleFolderVisible = (e: any) => {
        e.stopPropagation()
        setVisible(true)
    }
    const changeTitleFolder = (e: any, item: string) => {
        e.stopPropagation()
        setVisible(false)
        if (valueInput.length != 0) {
            dispatch(changeFolderAction([item, valueInput]))
        }
        setValueInput('')
    }

    return (
        <div className='btn-container'>
            <div
                className='btn-change'
                onClick={e => changeTitleFolderVisible(e)}
            >
                <FontAwesomeIcon icon={['fas', 'pen']} />
            </div>
            <MyModal visible={visible} setVisible={setVisible} >
                <h3>Сменить имя папки</h3>
                <input
                    className='my-input'
                    type="text"
                    placeholder='Введите новое имя папки'
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value)}
                />
                <button
                    className='btn'
                    onClick={e => changeTitleFolder(e, item)}
                >
                    Изменить
                </button>
            </MyModal>
            <div
                className='btn-remuve'
                onClick={e => remuvFolder(item, e)}
            >
                <FontAwesomeIcon icon={['fas', 'trash']} />
            </div>

        </div>
    );
}

export default CastomFluters;