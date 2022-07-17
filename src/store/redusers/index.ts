import { combineReducers } from "redux";
import { folderReduser } from "./folderReduser";


export const bigReduser = combineReducers({
   folder: folderReduser,
})

export const rootReduser = combineReducers({
   bigReduser,
})

export type RootState = ReturnType<typeof rootReduser>