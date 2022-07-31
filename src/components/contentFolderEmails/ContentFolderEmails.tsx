import React, { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import './style.css'


interface ContentFolderEmailsProps {
    item: lettersInFolder,
    index: number,
    lookAtLetter: Function,

}

const ContentFolderEmails: React.FC<ContentFolderEmailsProps> = ({ item, index, lookAtLetter }) => {

    const openLetter = (item: lettersInFolder) => {
        lookAtLetter(item)
        item.chect = true
    }

    return (
        <button
            onClick={() => openLetter(item)}
            className='value'
        >
            {item.chect
                ? <></>
                : <div className='chect'></div>
            }
            <div className='content-letter'> {item.autor} </div>
            <div className='content-letter_text'> {item.value.substring(0, 35)} </div>
            <div className='content-letter'> {item.date}  </div>
        </button>
    );
}

export default ContentFolderEmails;