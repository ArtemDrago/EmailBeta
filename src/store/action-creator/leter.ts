import { lettersInFolder } from "./folder";

export type LeterAction = DeliteLeterAction | DeliteLetersAction | MoveToFolderAction |
   HighLightAction | addNewDraftAction | addNewOutgoinAction | changeValueDraftAction

export enum LeterActionTypes {
   DELITE_LETER = "DELITE_LETER",
   DELITE_LETERS = "DELITE_LETERS",
   MOVE_TO_FOLDER = "MOVE_TO_FOLDER",
   HIGHLIGHT = "HIGHLIGHT",
   NEW_DRAFT = "NEW_DRAFT",
   NEW_OUTGOIN = "NEW_OUTGOIN",
   CHANGE_VALUE_DRAFT = "CHANGE_VALUE_DRAFT"
}
export interface DeliteLeterAction {
   type: LeterActionTypes.DELITE_LETER;
   payload: {
      folderType: String,
      item: lettersInFolder
   }
}
export interface DeliteLetersAction {
   type: LeterActionTypes.DELITE_LETERS;
   payload: {
      folderType: String,
      item: lettersInFolder[]
   }
}
export interface MoveToFolderAction {
   type: LeterActionTypes.MOVE_TO_FOLDER,
   payload: {
      oldFolder: String,
      newFolder: String,
      items: lettersInFolder[]
   }
}
export interface HighLightAction {
   type: LeterActionTypes.HIGHLIGHT,
   payload: {
      folder: String,
      item: lettersInFolder
   }
}

export interface addNewDraftAction {
   type: LeterActionTypes.NEW_DRAFT,
   payload: lettersInFolder
}
export interface addNewOutgoinAction {
   type: LeterActionTypes.NEW_OUTGOIN,
   payload: lettersInFolder
}
export interface changeValueDraftAction {
   type: LeterActionTypes.CHANGE_VALUE_DRAFT,
   payload: {
      id: Number,
      value: string
   }
}