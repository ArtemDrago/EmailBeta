import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FolderName from '../folderName/FolderName';
import './style.scss'

interface TitleBlockMailProps {
    keys: string[],
    setFolder: Function,
}

const TitleBlockMail: React.FC<TitleBlockMailProps> = ({ keys, setFolder }) => {

    return (
        <>
            <div className='name-folder'>

                <Link
                    className='btn-write'
                    to={'/write'}                >
                    Write a letter
                </Link>

                {keys.map((item, index) =>
                    <FolderName
                        item={item}
                        index={index}
                        key={index}
                        setFolder={setFolder}
                    />
                )}

            </div>
            <Outlet />
        </>
    );
}
export default TitleBlockMail;