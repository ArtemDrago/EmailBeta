import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import './style.css'

interface FullScrinLetterProps {
   folderType: String
}

const FullScrinLetter: React.FC<FullScrinLetterProps> = ({ folderType }) => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const { id } = useParams()
   const stateFolder: lettersInFolder[] = folder.bigFolder[`${folderType}`].letters
   const navigate = useNavigate()
   const curId = (!isNaN(+`${id}`) && stateFolder.length >= +`${id}`) ? id : '1'
   const stateItem = stateFolder.filter(item => item.id.toString() === curId)
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