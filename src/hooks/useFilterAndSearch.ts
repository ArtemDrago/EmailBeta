import React, { useMemo } from 'react';
import { lettersInFolder } from '../store/action-creator/folder';


export const useSortedLetters = (type: String, arrey: lettersInFolder[], folder: any) => {
   const sortedLetter = useMemo(() => {
      if (type === 'Noted') {
         return arrey.filter(item => item.label === true)
      } else if (type === 'Not noted') {
         return arrey.filter(item => item.label === false)
      }
      return arrey

   }, [type, arrey, folder])
   return sortedLetter
}

export const useLetters = (type: String, arrey: lettersInFolder[], query: String, folder: any) => {
   const sortedLetters: lettersInFolder[] = useSortedLetters(type, arrey, folder)
   const sortAndFilter = useMemo(() => {
      return sortedLetters.filter((folder) =>
         folder.value.toLowerCase().includes(query.toLowerCase())
      )
   }, [query, sortedLetters])
   return sortAndFilter
}