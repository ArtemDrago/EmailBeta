import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { lettersInFolder } from '../../store/action-creator/folder';
import './style.css'

interface FullScrinLetterProps {
   fullItem: lettersInFolder | undefined,
   closeFullScrin: Function,
}

const FullScrinLetter: React.FC<FullScrinLetterProps> = ({ fullItem, closeFullScrin }) => {

   const closeWindowEmail = () => {
      closeFullScrin()
   }
   return (
      <div className='full-scrin'>
         <button
            className='close-letter'
            onClick={closeWindowEmail}
         >
            <FontAwesomeIcon icon={['fas', 'xmark']} />
         </button>
         <section className='full-content'>
            <div className='content'>
               {fullItem?.autor}
            </div>
            <div className='content text'>
               {fullItem?.value}
            </div>
            <div className='content'>
               {fullItem?.date}
            </div>
         </section>
      </div>
   );
}

export default FullScrinLetter;