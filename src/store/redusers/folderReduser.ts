
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
      case FolderActionTypes.READ_ITEMS:
         const nameFolder = action.payload.folderType
         const itemsForRead = action.payload.items
         state.bigFolder[`${nameFolder}`].letters.forEach((item: lettersInFolder) => {
            if (itemsForRead.includes(item)) {
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
         if (folderCase !== 'Remote') {
            state.bigFolder.Remote.letters.push(leter)
         }
         return { ...state }

      case LeterActionTypes.DELITE_LETERS:
         const caseFolder = action.payload.folderType
         const lettersItem = action.payload.item
         const filterLetters = state.bigFolder[`${caseFolder}`].letters.filter((item: lettersInFolder) => !lettersItem.includes(item))
         state.bigFolder[`${caseFolder}`].letters = filterLetters

         let currentId = +new Date()
         lettersItem.forEach(item => {
            item.id = currentId
            currentId += 1000
         })
         if (caseFolder !== 'Remote') {
            state.bigFolder.Remote.letters = [...state.bigFolder.Remote.letters, ...lettersItem]
         }

         return { ...state }
      case LeterActionTypes.MOVE_TO_FOLDER:
         const oldFolder = action.payload.oldFolder
         const newFolder = action.payload.newFolder
         const arrLeters = action.payload.items

         let filterMails = state.bigFolder[`${oldFolder}`].letters.filter((item: lettersInFolder) => !arrLeters.includes(item))
         state.bigFolder[`${oldFolder}`].letters = filterMails

         let currentIdMail = +new Date()
         let num = 1000
         arrLeters.forEach(item => {
            item.id = currentIdMail
            currentIdMail += num
            num += 223
         })

         state.bigFolder[`${newFolder}`].letters = [...state.bigFolder[`${newFolder}`].letters, ...arrLeters]

         return { ...state }

      case LeterActionTypes.HIGHLIGHT:
         const nameFolderMail = action.payload.folder
         const mailItem = action.payload.item

         state.bigFolder[`${nameFolderMail}`].letters.forEach((item: lettersInFolder) => {
            if (item === mailItem) {
               item.label = !item.label
            }
         })
         return { ...state }

      case LeterActionTypes.NEW_DRAFT:
         state.bigFolder.Drafts.letters = [...state.bigFolder.Drafts.letters, action.payload]
         return { ...state }

      case LeterActionTypes.NEW_OUTGOIN:
         state.bigFolder.Outgoing.letters = [...state.bigFolder.Outgoing.letters, action.payload]
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
export const readItemsAction = (payload: { folderType: String, items: lettersInFolder[] }) => ({ type: FolderActionTypes.READ_ITEMS, payload })

export const deilteLeterAction = (payload: { folderType: String, item: lettersInFolder }) => ({ type: LeterActionTypes.DELITE_LETER, payload })
export const deilteLetersAction = (payload: { folderType: String, item: lettersInFolder[] }) => ({ type: LeterActionTypes.DELITE_LETERS, payload })
export const moveToFolderLetersAction = (payload: { oldFolder: String, newFolder: String, items: lettersInFolder[] }) => ({ type: LeterActionTypes.MOVE_TO_FOLDER, payload })
export const highlightAction = (payload: { folder: String, item: lettersInFolder }) => ({ type: LeterActionTypes.HIGHLIGHT, payload })

export const addDraftLetterAction = (payload: lettersInFolder) => ({ type: LeterActionTypes.NEW_DRAFT, payload })
export const addOutgoinLetterAction = (payload: lettersInFolder) => ({ type: LeterActionTypes.NEW_OUTGOIN, payload })