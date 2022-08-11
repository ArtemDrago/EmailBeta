import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import { readLetterAction } from '../../store/redusers/folderReduser';
import './style.css'

interface FullScrinLetterProps {
   folderType: String
}

const FullScrinLetter: React.FC<FullScrinLetterProps> = ({ folderType }) => {
   const { folder } = useTypeSelector(state => state.bigReduser)
   const { folderTitle, id } = useParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const key = Object.keys(folder.bigFolder)
   let curArr = folder.bigFolder[`${folderTitle}`] || folder.bigFolder[`${folderType}`]
   const stateFolder: lettersInFolder[] = curArr.letters
   const curId = (!isNaN(+`${id}`) && stateFolder.length >= +`${id}`) ? id : `${stateFolder.length}`
   const stateItem = stateFolder.filter(item => item.id.toString() === curId)
   const valuesArr = [...stateItem]

   const renderFullLetter = () => {
      let folderName = null
      key.forEach(key => {
         if (key === folderTitle) {
            folderName = key
         }
      })

      const url = `/${folderType}/${curId}`
      const urlFolder = `/${folderName}/${curId}`
      const urlPath = document.location.pathname
      const leng = document.location.pathname
      const num = leng[leng.length - 1]
      if (url != urlPath) {
         if (folderName === null) {
            document.location.pathname = `${url}`
         }
         if (folderName != null && num != curId) {
            document.location.pathname = `${urlFolder}`
         }
      }
   }

   const changeReadLetter = (item: lettersInFolder) => {
      dispatch(readLetterAction([`${folderTitle}`, item]))
   }

   useMemo(() => {
      renderFullLetter()
      const item = folder.bigFolder[`${folderTitle}`].letters[+`${curId}` - 1]
      changeReadLetter(item)
   }, [])

   return (
      <div className='full-scrin'>
         <button
            className='close-letter'
            onClick={() => navigate(`/${folderTitle}`)}
         >
            <FontAwesomeIcon icon={['fas', 'xmark']} />
         </button>
         <section className='full-content'>
            {valuesArr[0] ?
               <>
                  <div className='content'>
                     {valuesArr[0].autor}
                  </div>
                  <div className='content text'>
                     {valuesArr[0].value}
                  </div>
                  <div className='content'>
                     {valuesArr[0].date}
                  </div>
               </>
               : <div className='content text'>
                  letters not found
               </div>
            }
         </section>
      </div>
   );
}

export default FullScrinLetter;