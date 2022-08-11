import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { lettersInFolder } from '../../../store/action-creator/folder';
import { deilteLeterAction, readLetterAction } from '../../../store/redusers/folderReduser';
import './style.css'

interface ContentFolderEmailsProps {
    item: lettersInFolder,
    folderType: String | any,
}

const ContentFolderEmails: React.FC<ContentFolderEmailsProps> = ({ item, folderType }) => {

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

    return (
        <>
            <Link
                onClick={() => changeReadLetter(item)}
                className='value'
                to={`/${folderType}/${item.id}`}
            >
                <div className='look'>
                    {item.chect
                        ? //<input type='checkbox'></input>
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