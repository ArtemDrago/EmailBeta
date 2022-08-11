
import { FolderAction, FolderActionTypes, lettersInFolder, NewFolder } from "../action-creator/folder"
import { LeterAction, LeterActionTypes } from "../action-creator/leter"
import { arrayLetters } from "./state"

export const initialState: any = {
   bigFolder: JSON.parse(localStorage.getItem('state')!) || arrayLetters
}

export const folderReduser = (state = initialState, action: FolderAction | LeterAction) => {
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

      case LeterActionTypes.DELITE_LETER:
         const folderCase = action.payload.folderType
         const leter = action.payload.item
         const filterArr = state.bigFolder[`${folderCase}`].letters.filter((item: lettersInFolder) => item.id !== leter.id)
         state.bigFolder[`${folderCase}`].letters = filterArr
         const newId = new Date()
         const idMail = +newId
         leter.id = idMail
         state.bigFolder.Remote.letters.push(leter)
         console.log(state.bigFolder.Remote.letters)
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
export const deilteLeterAction = (payload: { folderType: String, item: lettersInFolder }) => ({ type: LeterActionTypes.DELITE_LETER, payload })