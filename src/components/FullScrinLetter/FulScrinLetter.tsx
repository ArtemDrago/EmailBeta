import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lettersInFolder } from '../../store/action-creator/folder';
import { addOutgoinLetterAction, changeValueDraftsAction, readLetterAction } from '../../store/redusers/folderReduser';
import './style.scss'

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

   const keyMass: number[] = []
   stateFolder.map(item => {
      keyMass.push(item.id)
   })

   let curId = (!isNaN(+`${id}`) && stateFolder.length >= +`${id}`)
      ?
      id
      :
      keyMass.includes(+`${id}`)
         ?
         id
         :
         (folderTitle === 'Remote')
            ?
            (curArr.letters.length > 0)
               ?
               `${stateFolder.slice(-1)[0].id}`
               : '0'
            :
            `${stateFolder.length}`

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

      if (url != urlPath) {
         if (folderName === null) {
            document.location.pathname = `${url}`
         }
         if (folderName != null && id != curId) {
            document.location.pathname = `${urlFolder}`
         }
      }
   }

   const changeReadLetter = (item: lettersInFolder) => {
      dispatch(readLetterAction([`${folderTitle}`, item]))
   }
   useEffect(() => {
      const item = folder.bigFolder[`${folderTitle}`].letters[+`${curId}` - 1]
      changeReadLetter(item)
   }, [])

   useMemo(() => {
      renderFullLetter()
   }, [])

   const addToOutgoinFullscrin = () => {
      const userLetterOut: lettersInFolder = {
         id: +new Date(),
         value: valuesArr[0].value,
         autor: valuesArr[0].autor,
         date: new Date().toLocaleDateString(),
         chect: true,
         label: false,
      }
      dispatch(addOutgoinLetterAction(userLetterOut))
      alert('Sent successfully')
   }

   const [stateValue, setStateValue] = useState(valuesArr[0].value || '')

   const valueSaveContent = () => {
      dispatch(changeValueDraftsAction({ id: valuesArr[0].id, value: stateValue }))
   }

   return (
      <div className='full-scrin'>
         <div className='btn-full'>
            <button
               className='close-letter'
               onClick={() => navigate(`/${folderTitle}`)}
            >
               <FontAwesomeIcon icon={['fas', 'xmark']} />
            </button>
            {folderTitle === 'Drafts'
               ?
               <div className='btn-sentsave'>
                  <button
                     className='btn-sent'
                     onClick={() => valueSaveContent()}
                  >
                     Save
                  </button>
                  <button
                     className='btn-sent'
                     onClick={() => addToOutgoinFullscrin()}
                  >
                     Sent
                  </button>
               </div>
               : <></>
            }
         </div>
         <section className='full-content'>
            {valuesArr[0] ?
               <>
                  <div className='full-content'>
                     <div className='content'>
                        {valuesArr[0].autor}
                     </div>
                     <div className='content text'>
                        {folderTitle === 'Drafts'
                           ? <textarea
                              className='textarea'
                              maxLength={800}
                              suppressContentEditableWarning={true}
                              value={stateValue}
                              wrap='hard'
                              onChange={(e) => setStateValue(e.target.value)}
                           />
                           :
                           <>{valuesArr[0].value}</>
                        }
                     </div>
                     <div className='content'>
                        {valuesArr[0].date}
                     </div>
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