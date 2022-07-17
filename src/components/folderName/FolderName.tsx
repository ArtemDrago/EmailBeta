import React, { useState } from 'react';
import CastomFluters from '../castomFluters/CastomFluters';
import './style.css'


interface FolderNameProps {
    item: string,
    index: number,
    setFolder: Function,

}

const FolderName: React.FC<FolderNameProps> = ({ item, index, setFolder }) => {

    const changeArrLetter = (item: string, e: any) => {
        const classListItem = document.querySelectorAll('.name')
        classListItem.forEach(el => {
            el.classList.remove('active')
        })
        classListItem[index].classList.add('active')
        e.stopPropagation()
        setFolder(item)
    }

    return (
        <div
            className={`name`}
            onClick={e => changeArrLetter(item, e)}
        >
            {item}
            {index > 4 ?
                <CastomFluters item={item} setFolder={setFolder} />
                : <></>
            }

        </div>
    )
}

export default FolderName;

function setFolderType(item: string) {
    throw new Error('Function not implemented.');
}
function classnames(arg0: string, arg1: { 'change-class': boolean; }): string | undefined {
    throw new Error('Function not implemented.');
}

