import { lettersInFolder } from "./folder";

export type LeterAction = DeliteLeterAction | DeliteLetersAction | MoveToFolderAction

export enum LeterActionTypes {
   DELITE_LETER = "DELITE_LETER",
   DELITE_LETERS = "DELITE_LETERS",
   MOVE_TO_FOLDER = "MOVE_TO_FOLDER"
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