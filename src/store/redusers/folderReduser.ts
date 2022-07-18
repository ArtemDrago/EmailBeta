
import { FolderAction, FolderActionTypes, NewFolder } from "../action-creator/folder"

const date = new Date().toLocaleDateString()

const initialState: any = {
   bigFolder: {
      "Входящие": {
         id: 1,
         letters: [
            { id: 1, value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false },
            { id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ", autor: "Garry", date: date, chect: false },
            {
               id: 3, value: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Explicabo ea dolores magnam delectus aut!
             A perferendis in, quisquam est dolores debitis! Corporis architecto quia,
              id ratione fugit accusamus eius quidem. Lorem ipsum, dolor sit amet consectetur
               adipisicing elit. Minima, repellat! Eius dignissimos in, sit earum quibusdam numquam
                inventore reprehenderit aperiam dolore minima voluptas sapiente possimus, provident
                 excepturi veniam, aliquam quis!`,
               autor: "Cherry", date: date, chect: false
            },
         ],
         changeFolder: false,
      },
      "Исходящие": {
         id: 2,
         letters: [
            { id: 1, value: "текст", autor: "Black", date: date, chect: false },
            { id: 2, value: "текст2", autor: "White", date: date, chect: false },
            { id: 3, value: "текст3", autor: "Pinc", date: date, chect: false },
         ],
         changeFolder: false,
      },
      "Черновики": {
         id: 3,
         letters: [
            { id: 1, value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false },
            { id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ", autor: "Garry", date: date, chect: false },
            { id: 3, value: "text3", autor: "Cherry", date: date, chect: false },
         ],
         changeFolder: false,
      },
      "Удаленные": {
         id: 4,
         letters: [
            { id: 1, value: "текст", autor: "Black", date: date, chect: false },
            { id: 2, value: "текст2", autor: "White", date: date, chect: false },
            { id: 3, value: "текст3", autor: "Pinc", date: date, chect: false },
            { id: 4, value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false },
            { id: 5, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ", autor: "Garry", date: date, chect: false },
            { id: 6, value: "text3", autor: "Cherry", date: date, chect: false },
         ],
         changeFolder: false,
      },
      "Спам": {
         id: 5,
         letters: [
            { id: 1, value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false },
            { id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ", autor: "Garry", date: date, chect: false },
            { id: 3, value: "text3", autor: "Cherry", date: date, chect: false },
         ],
         changeFolder: false,
      },
   }
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
         const array = state.bigFolder

         for (let changeFluterName in array) {
            if (changeFluterName === currentNameFolder) {
               array[`${changeNameFolder}`] = array[`${currentNameFolder}`]
               delete array[`${currentNameFolder}`]
            }
         }
         return { ...state }
      default:
         return state
   }
}
export const addFolderAction = (payload: NewFolder) => ({ type: FolderActionTypes.ADD_FOLDER, payload })
export const deliteFolderAction = (payload: string) => ({ type: FolderActionTypes.DELITE_FOLDER, payload })
export const changeFolderAction = (payload: string[]) => ({ type: FolderActionTypes.CHANGE_FOLDER, payload })