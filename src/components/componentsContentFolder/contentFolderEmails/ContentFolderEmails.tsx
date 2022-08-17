import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { lettersInFolder } from '../../../store/action-creator/folder';
import { deilteLeterAction, readLetterAction } from '../../../store/redusers/folderReduser';
import './style.css'

interface ContentFolderEmailsProps {
    item: lettersInFolder,
    folderType: String | any,
    choiceLeters: Boolean,
    addLeterMail: Function,

}

const ContentFolderEmails: React.FC<ContentFolderEmailsProps> = ({ item, folderType, choiceLeters, addLeterMail }) => {

    const dispatch = useDispatch()
    const changeReadLetter = (item: lettersInFolder) => {
        dispatch(readLetterAction([folderType, item]))
    }
    const deliteEmail = (e: any, item: lettersInFolder) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(deilteLeterAction({
            folderType: folderType,
            item
        }))
    }
    const checkBlock = (e: any) => {
        e.stopPropagation()
    }

    const addLeterToChoiceMail = (item: lettersInFolder) => {
        addLeterMail(item)
    }

    return (
        <>
            <Link
                onClick={() => changeReadLetter(item)}
                className='value'
                to={`/${folderType}/${item.id}`}
            >
                {choiceLeters ?
                    <div
                        className='check-box'
                        onClick={(e) => checkBlock(e)}
                    >
                        <input
                            type='checkbox'
                            value={item.id}
                            name='mailCheck'
                            onClick={() => addLeterToChoiceMail(item)}
                            className='check'

                        />
                    </div>
                    :
                    <></>
                }
                <div className='look'>
                    {item.chect
                        ?
                        <></>
                        :
                        <div className='chect'></div>
                    }
                </div>
                <div className='content-letter'> {item.autor} </div>
                <div className='content-letter_text'> {item.value.substring(0, 50)} </div>
                <div className='content-letter'> {item.date} </div>
                <div className='delite-container'>
                    <button
                        className='delite-leter'
                        onClick={e => deliteEmail(e, item)}
                    >
                        <FontAwesomeIcon icon={['fas', 'trash']} />
                    </button>
                </div>
            </Link>
        </>
    );
}

export default ContentFolderEmails;