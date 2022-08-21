
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import { readAllAction } from '../../store/redusers/folderReduser';
import SetingLeterMenu from './SetingLeterMenu/SetingLeterMenu';
import SettingModal from './SettingModal/SettingModal';
import './style.css'

interface SettingBoxProp {
    filterFolder: Function,
    setChoice: Function,
    choiceLeters: boolean,
    choiceMail: lettersInFolder[],
    setSwitchItemsState: Function,
    getSwitchItemsState: Function,
    setChangeSelectFilter: Function,
}

const SettingBox: React.FC<SettingBoxProp> = ({ filterFolder, setChoice, choiceLeters,
    choiceMail, setSwitchItemsState, getSwitchItemsState, setChangeSelectFilter }) => {
    const { folder } = useTypeSelector(state => state.bigReduser)
    const keys = Object.keys(folder.bigFolder)
    const [inputValue, setInputValue] = React.useState<string>('')
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        filterFolder(inputValue)
    }, [inputValue])

    const readAllEmails = () => {
        dispatch(readAllAction())
    }

    useEffect(() => {
        const buttonList = document.querySelectorAll('.btn-create')
        if (keys.length >= 10) {
            buttonList[0].classList.add('disable')
        } else {
            buttonList[0].classList.remove('disable')
        }
    }, [keys])

    return (
        <>
            <div className='setting'>
                <div className='setting-buttonbox'>
                    <button
                        className='btn-create'
                        onClick={() => setVisible(true)}
                        disabled={(keys.length < 10) ? false : true}
                    >
                        Create folder
                    </button>
                    <button
                        className='btn-create'
                        onClick={() => readAllEmails()}
                    >
                        Read all
                    </button>
                    <button
                        className={choiceLeters ? 'btn-create create-active' : 'btn-create '}
                        onClick={() => setChoice()}
                    >
                        Select multiple
                    </button>
                    <select
                        className='filter-select'
                        onChange={(e) => setChangeSelectFilter(e.target.value)}
                        defaultValue='All'
                    >
                        <option value='All'>All</option>
                        <option value='Noted'>Noted</option>
                        <option value='Not noted'>Not noted</option>
                    </select>

                </div>

                <SettingModal
                    visible={visible}
                    setVisible={setVisible}
                />

                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className='input-search'
                    type='text'
                    placeholder="Search for emails..."
                />
            </div>
            <CSSTransition
                in={choiceLeters}
                timeout={1000}
                classNames="my-node"
                mountOnEnter
                unmountOnExit
            >
                <SetingLeterMenu
                    choiceMail={choiceMail}
                    setSwitchItemsState={setSwitchItemsState}
                    getSwitchItemsState={getSwitchItemsState}
                    keys={keys}
                />
            </CSSTransition>
            <Outlet />
        </>
    );
}

export default SettingBox;

function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
}
