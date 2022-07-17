import React from 'react';
import FolderName from '../folderName/FolderName';
import './style.css'

interface TitleBlockMailProps {
    keys: string[],
    setFolder: Function,
}

const TitleBlockMail: React.FC<TitleBlockMailProps> = ({ keys, setFolder }) => {
    return (
        <div className='name-folder'>

            {keys.map((item, index) =>
                <FolderName
                    item={item}
                    index={index}
                    key={index}
                    setFolder={setFolder}
                />
            )}

        </div>
    );
}

export default TitleBlockMail;