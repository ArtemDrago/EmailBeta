import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { lettersInFolder } from '../../store/action-creator/folder';
import { readLetterAction } from '../../store/redusers/folderReduser';
import './style.css'


interface ContentFolderEmailsProps {
    item: lettersInFolder,
    index: number,
    folderType: String | any,
}

const ContentFolderEmails: React.FC<ContentFolderEmailsProps> = ({ item, index, folderType }) => {

    const dispatch = useDispatch()
    const changeReadLetter = (item: lettersInFolder) => {
        dispatch(readLetterAction([folderType, item]))
    }
    return (
        <>
            <Link
                onClick={() => changeReadLetter(item)}
                className='value'
                to={`/${folderType}/${item.id}`}
            >

                {item.chect
                    ? <></>
                    : <div className='chect'></div>
                }
                <div className='content-letter'> {item.autor} </div>
                <div className='content-letter_text'> {item.value.substring(0, 50)} </div>
                <div className='content-letter'> {item.date}  </div>
            </Link>
        </>
    );
}

export default ContentFolderEmails;