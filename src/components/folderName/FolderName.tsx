import React, { useEffect } from 'react';
import { NavLink, useMatch, useParams } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import CastomFluters from '../castomFluters/CastomFluters';
import './style.css'

interface FolderNameProps {
    item: string,
    index: number,
    setFolder: Function,
}

const FolderName: React.FC<FolderNameProps> = ({ item, index, setFolder }) => {

    const changeArrLetter = (item: string, e: any) => {
        localStorage.setItem('indexFolder', JSON.stringify(index))
        e.stopPropagation()
        setFolder(item)
    }

    return (
        <NavLink
            to={item}
            className={`name`}
            onClick={e => changeArrLetter(item, e)}
        >
            {item}
            {index > 4 ?
                <CastomFluters
                    item={item}
                    setFolder={setFolder}
                />
                : <></>
            }

        </NavLink>
    )
}

export default FolderName;

function setFolderType(item: string) {
    throw new Error('Function not implemented.');
}
function classnames(arg0: string, arg1: { 'change-class': boolean; }): string | undefined {
    throw new Error('Function not implemented.');
}

