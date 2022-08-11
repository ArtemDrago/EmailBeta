import React from 'react';
import { NavLink } from 'react-router-dom';
import CastomFluters from '../castomFluters/CastomFluters';
import './style.css'

interface FolderNameProps {
    item: string,
    index: number,
    setFolder: Function,
}

const FolderName: React.FC<FolderNameProps> = ({ item, index, setFolder }) => {

    const changeArrLetter = (item: string, e: any) => {
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
                />
                : <></>
            }

        </NavLink>
    )
}

export default FolderName;


