import React, { useEffect, useMemo, useState } from 'react';
import CastomFluters from '../castomFluters/CastomFluters';
import './style.css'


interface FolderNameProps {
    item: string,
    index: number,
    setFolder: Function,

}

const FolderName: React.FC<FolderNameProps> = ({ item, index, setFolder }) => {
    const [i, setI] = useState(JSON.parse(localStorage.getItem('indexFolder')!))
    const changeArrLetter = (item: string, e: any) => {
        const classListItem = document.querySelectorAll('.name')
        classListItem.forEach(el => {
            el.classList.remove('active')
        })
        localStorage.setItem('indexFolder', JSON.stringify(index))
        classListItem[index].classList.add('active')
        e.stopPropagation()
        setFolder(item)
    }

    useEffect(() => {
        const classListItem = document.querySelectorAll('.name')
        if (i > 0 || i === 0) {
            classListItem[i].classList.add('active')
        }
    }, [])

    window.addEventListener('unload', () => {
        localStorage.setItem('indexFolder', JSON.stringify(0))
    })

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

