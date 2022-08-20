
export interface TypeBigFolder {
  key: NewFolder[]
}

export interface lettersInFolder {
  id: number,
  value: string,
  autor: string,
  date: string,
  chect: boolean,
  label: boolean,
}

export interface NewFolder {
  [key: string]: {
    id: number;
    lettters: lettersInFolder[];
    changeFolder: boolean;
  }

}

export type FolderAction = AddFolderAction | DeliteFolderAction |
  ChangeFolderAction | ReadAllEmailsAction | ReadItemEmailAction |
  ReadItemsEmailAction

export enum FolderActionTypes {
  ADD_FOLDER = "ADD_FOLDER",
  DELITE_FOLDER = "DELITE_FOLDER",
  CHANGE_FOLDER = "CHANGE_FOLDER",
  READ_ALL = "READ_ALL",
  READ_MAIL = "READ_MAIL",
  READ_ITEMS = "READ_ITEMS"
}
interface AddFolderAction {
  type: FolderActionTypes.ADD_FOLDER;
  payload: NewFolder
}
interface DeliteFolderAction {
  type: FolderActionTypes.DELITE_FOLDER;
  payload: string
}
interface ChangeFolderAction {
  type: FolderActionTypes.CHANGE_FOLDER;
  payload: string[]
}
interface ReadAllEmailsAction {
  type: FolderActionTypes.READ_ALL;
}
interface ReadItemEmailAction {
  type: FolderActionTypes.READ_MAIL;
  payload: (String | lettersInFolder)[]
}
interface ReadItemsEmailAction {
  type: FolderActionTypes.READ_ITEMS;
  payload: {
    folderType: String,
    items: lettersInFolder[]
  }
}
