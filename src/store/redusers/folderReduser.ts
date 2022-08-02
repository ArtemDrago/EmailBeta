
import { FolderAction, FolderActionTypes, lettersInFolder, NewFolder } from "../action-creator/folder"
import { arrayLetters } from "./state"
import _ from "lodash"

export const initialState: any = {
   bigFolder: JSON.parse(localStorage.getItem('state')!) || arrayLetters
}


export const folderReduser = (state = initialState, action: FolderAction) => {
   switch (action.type) {
      case FolderActionTypes.ADD_FOLDER:
         return { ...state, bigFolder: { ...state.bigFolder, ...action.payload } }
      case FolderActionTypes.DELITE_FOLDER:
         const arr = state.bigFolder
         for (let remuveFluterName in arr) {
            if (remuveFluterName === action.payload) {
               delete arr[`${remuveFluterName}`]
            }
         }
         return { ...state }
      case FolderActionTypes.CHANGE_FOLDER:
         const currentNameFolder = action.payload[0]
         const changeNameFolder = action.payload[1]
         let array = state.bigFolder
         let keys = Object.keys(array)
         let value = Object.values(array)
         const j = keys.map(item => {
            if (item === currentNameFolder) {
               return changeNameFolder
            }
            return item
         })
         const newArr = j.reduce((acc, n, i) => ({ ...acc, [n]: value[i] }), {})
         state.bigFolder = newArr
         return { ...state }
      case FolderActionTypes.READ_ALL:
         for (let i in state.bigFolder) {
            state.bigFolder[i].letters.forEach((elem: lettersInFolder) => {
               elem.chect = true
            });
         }
         return { ...state }

      case FolderActionTypes.READ_MAIL:
         const folderName = action.payload[0]
         const letter = action.payload[1]
         state.bigFolder[`${folderName}`].letters.forEach((item: lettersInFolder) => {
            if (item === letter) {
               item.chect = true
            }
         })
         return { ...state }

      default:
         return state
   }
}
export const addFolderAction = (payload: NewFolder) => ({ type: FolderActionTypes.ADD_FOLDER, payload })
export const deliteFolderAction = (payload: string) => ({ type: FolderActionTypes.DELITE_FOLDER, payload })
export const changeFolderAction = (payload: string[]) => ({ type: FolderActionTypes.CHANGE_FOLDER, payload })
export const readAllAction = () => ({ type: FolderActionTypes.READ_ALL })
export const readLetterAction = (payload: (String | lettersInFolder)[]) => ({ type: FolderActionTypes.READ_MAIL, payload })