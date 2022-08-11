import { lettersInFolder } from "./folder";

export type LeterAction = DeliteLeterAction

export enum LeterActionTypes {
   DELITE_LETER = "DELITE_LETER"
}
export interface DeliteLeterAction {
   type: LeterActionTypes.DELITE_LETER;
   payload: {
      folderType: String,
      item: lettersInFolder
   }
}