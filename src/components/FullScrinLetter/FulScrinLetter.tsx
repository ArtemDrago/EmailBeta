import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lettersInFolder } from '../../store/action-creator/folder';
import './style.css'

interface FullScrinLetterProps {
   secondFolderLetter: lettersInFolder[],
}

const FullScrinLetter: React.FC<FullScrinLetterProps> = ({ secondFolderLetter }) => {
   const { id } = useParams()
   const navigate = useNavigate()
   const stateItem = secondFolderLetter.filter(item => item.id.toString() === id)
   const valuesArr = [...stateItem]

   return (
      <div className='full-scrin'>
         <button
            className='close-letter'
            onClick={() => navigate(-1)}
         >
            <FontAwesomeIcon icon={['fas', 'xmark']} />
         </button>
         <section className='full-content'>
            <div className='content'>
               {valuesArr[0].autor}
            </div>
            <div className='content text'>
               {valuesArr[0].value}
            </div>
            <div className='content'>
               {valuesArr[0].date}
            </div>
         </section>
      </div>
   );
}

export default FullScrinLetter;